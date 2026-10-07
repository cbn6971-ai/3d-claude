"""blender --background --python model/build_room.py -- --render
Edit parameters.json and run again; generates .blend, .glb, .usdz and six checks.
"""
import sys,json,math,argparse
from pathlib import Path
import bpy
from mathutils import Vector
HERE=Path(__file__).resolve().parent;ROOT=HERE.parent
sys.path.insert(0,str(HERE))
from scene_builder import build
args=sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else []
parser=argparse.ArgumentParser();parser.add_argument('--render',action='store_true');parser.add_argument('--params',type=Path,default=HERE/'parameters.json');parser.add_argument('--out',type=Path,default=ROOT/'dist');opts=parser.parse_args(args)
OUT=opts.out;OUT.mkdir(parents=True,exist_ok=True)
doc=json.loads(opts.params.read_text());spec=build(doc)
(OUT/'scene.json').write_text(json.dumps(spec,ensure_ascii=False));(OUT/'parameters.json').write_text(json.dumps(doc,ensure_ascii=False,indent=2))
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
for c in list(bpy.data.collections):
 if c.name!='Collection':bpy.data.collections.remove(c)
sc=bpy.context.scene;sc.unit_settings.system='METRIC';sc.unit_settings.scale_length=1
cols={}
for layer in ['structure','exterior','furniture','soft','ceiling','cameras','lights']:
 c=bpy.data.collections.new(layer);sc.collection.children.link(c);cols[layer]=c
palette=dict(doc['palette'],metal='#a8adb2',grout='#9fa3a8',stripe='#e0e2e4',frosted='#b8c6c8',sheer='#e7e9e5')
mats={}
def srgb_to_lin(a):return a/12.92 if a<=.04045 else ((a+.055)/1.055)**2.4
for name,h in palette.items():
 rgb=tuple(srgb_to_lin(int(h[i:i+2],16)/255) for i in (1,3,5));m=bpy.data.materials.new(name);m.diffuse_color=(*rgb,1);m.use_nodes=True;n=m.node_tree.nodes.get('Principled BSDF');n.inputs['Base Color'].default_value=(*rgb,1);n.inputs['Roughness'].default_value=.70
 if name=='metal':n.inputs['Metallic'].default_value=.45;n.inputs['Roughness'].default_value=.40
 if name in ['glass','sheer']:
  n.inputs['Alpha'].default_value=.18 if name=='glass' else .30;m.surface_render_method='DITHERED';m.diffuse_color=(*rgb,n.inputs['Alpha'].default_value)
 mats[name]=m
objects={}
for d in spec['nodes']:
 x,y,z=d['position'];y=-y;a,b,c=d['size']
 if d['shape']=='box':bpy.ops.mesh.primitive_cube_add(size=1,location=(x,y,z));obj=bpy.context.object;obj.dimensions=(a,b,c)
 elif d['shape']=='cylinder':bpy.ops.mesh.primitive_cylinder_add(vertices=16,radius=a,depth=c,location=(x,y,z));obj=bpy.context.object
 else:bpy.ops.mesh.primitive_uv_sphere_add(segments=16,ring_count=8,radius=1,location=(x,y,z));obj=bpy.context.object;obj.scale=(a,b,c)
 obj.name=d['name'];rx,ry,rz=d['rotation'];obj.rotation_euler=(-rx,ry,-rz)
 if d['shape']!='cylinder':
  bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 if d.get('bevel'):
  mod=obj.modifiers.new('Soft edges','BEVEL');mod.width=d['bevel'];mod.segments=2
  bpy.context.view_layer.objects.active=obj;bpy.ops.object.modifier_apply(modifier=mod.name)
 obj.data.materials.append(mats[d['material']]);obj['layer']=d['layer'];obj['semantic_name']=d['name'];obj['wall']=d.get('wall',False)
 if d.get('side'):obj['side']=d['side']
 for coll in list(obj.users_collection):coll.objects.unlink(obj)
 cols[d['layer']].objects.link(obj)
 objects[d['name']]=obj
 if d['shape']!='box':
  for poly in obj.data.polygons:poly.use_smooth=True
# Cameras and neutral light, unit-independent default.
W=spec['derived']['width'];L=spec['derived']['total_depth'];D=spec['derived']['bedroom_depth'];B=spec['derived']['body_depth'];H=spec['derived']['height']
sc.world.color=(.55,.55,.55);sc.world.use_nodes=True;sc.world.node_tree.nodes['Background'].inputs[0].default_value=(.78,.82,.89,1);sc.world.node_tree.nodes['Background'].inputs[1].default_value=.5
for name,loc,energy,size in [('Key',(W*.35,L*.35,9),1500,7),('Fill',(-4,L*.75,6),1000,6),('Rim',(W+4,0,6),950,5)]:
 data=bpy.data.lights.new(name,'AREA');data.energy=energy;data.shape='DISK';data.size=size;obj=bpy.data.objects.new(name,data);cols['lights'].objects.link(obj);obj.location=(loc[0],-loc[1],loc[2]);obj.rotation_euler=(Vector((W/2,-L/2,0))-obj.location).to_track_quat('-Z','Y').to_euler()
target=(W/2,L/2,.65);dist=max(L,W)*1.5
views={'front':((W/2,L+dist,H*.7),target),'back':((W/2,-dist,H*.7),target),'left':((-dist,L/2,H*.7),target),'right':((W+dist,L/2,H*.7),target),'aerial':((W/2-dist*.65,L/2+dist*.65,dist*.92),target),'top':((W/2,L/2,dist),(W/2,L/2,0))}
for name,(loc,look) in views.items():
 data=bpy.data.cameras.new('Camera_'+name);data.type='ORTHO';data.ortho_scale=((L+2)*1050/850 if name=='top' else (L+1.7) if name=='aerial' else 7.0 if name in ['front','back'] else (L+2));obj=bpy.data.objects.new('Camera_'+name,data);cols['cameras'].objects.link(obj);obj.location=(loc[0],-loc[1],loc[2]);world_look=Vector((look[0],-look[1],look[2]));obj.rotation_euler=(world_look-obj.location).to_track_quat('-Z','Y').to_euler()
# Keep full geometry in .blend and GLB; export selection avoids cameras/lights.
for obj in bpy.context.selected_objects:obj.select_set(False)
for obj in objects.values():obj.select_set(True)
bpy.ops.export_scene.gltf(filepath=str(OUT/'room.glb'),export_format='GLB',use_selection=True,export_extras=True,export_apply=True,export_yup=True)
objects['Ceiling'].select_set(False)  # Native Quick Look uses an open-top variant.
try:
 bpy.ops.wm.usd_export(filepath=str(OUT/'room.usdz'),selected_objects_only=True,export_materials=True,generate_preview_surface=True,export_textures=True,export_cameras=False,export_lights=False,convert_orientation=True,export_global_up_selection='Y',export_global_forward_selection='NEGATIVE_Z')
 (OUT/'usdz_status.json').write_text(json.dumps({'exported':True,'verified_on_iphone':False}))
except Exception as exc:
 (OUT/'usdz_status.json').write_text(json.dumps({'exported':False,'reason':str(exc)}));print('USDZ optional:',exc)
sc.camera=bpy.data.objects['Camera_aerial'];objects['Ceiling'].hide_render=True;objects['Ceiling'].hide_set(True)
sc.render.engine='CYCLES';sc.cycles.samples=12;sc.cycles.use_denoising=True;sc.cycles.device='CPU';sc.render.threads_mode='FIXED';sc.render.threads=8
sc.render.resolution_x=1050;sc.render.resolution_y=850;sc.render.resolution_percentage=100;sc.render.image_settings.file_format='PNG'
sc.view_settings.view_transform='AgX'
# Leave furniture and topology clear in opening viewport.
for a in bpy.context.screen.areas if bpy.context.screen else []:
 if a.type=='VIEW_3D':a.spaces.active.region_3d.view_distance=14;a.spaces.active.region_3d.view_location=Vector((W/2,-L/2,.65))
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'room.blend'))
if opts.render:
 checks=OUT/'checks';checks.mkdir(exist_ok=True)
 for name in views:
  # Documented cutaway: exact principal-axis projection with near exterior walls removed.
  for obj in objects.values():obj.hide_render=(obj['layer']=='ceiling')
  hidden={'front':['end'],'back':['balcony'],'left':['left'],'right':['right'],'aerial':['left','end'],'top':[]}[name]
  for obj in objects.values():
   if obj.get('side') in hidden:obj.hide_render=True
  sc.camera=bpy.data.objects['Camera_'+name];sc.render.filepath=str(checks/(name+'.png'));bpy.ops.render.render(write_still=True)
 for obj in objects.values():obj.hide_render=obj['layer']=='ceiling'
 sc.camera=bpy.data.objects['Camera_aerial']
 bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'room.blend'))
print('ROOM_BUILD_OK',len(objects),'objects')
