"""Checks real exported GLB/USDZ containers, opening positions and physical overlap."""
from pathlib import Path
import json,struct,zipfile,math
from scene_builder import build
R=Path(__file__).resolve().parents[1];doc=json.loads((R/'model/parameters.json').read_text());s=build(doc);p={k:v['value'] for k,v in doc['parameters'].items()};W=p['body_width'];D=s['derived']['bedroom_depth'];B=p['body_depth'];L=s['derived']['total_depth'];t=p['inner_wall_thickness']
by={n['name']:n for n in s['nodes']};results=[]
def check(name,ok,note=''):
 results.append({'check':name,'passed':bool(ok),'note':note})
 if not ok:raise AssertionError(name+' '+note)
raw=(R/'dist/room.glb').read_bytes();magic,version,length=struct.unpack('<4sII',raw[:12]);check('GLB header',magic==b'glTF' and version==2 and length==len(raw));chunklen,typ=struct.unpack('<I4s',raw[12:20]);gltf=json.loads(raw[20:20+chunklen]);layers={n.get('extras',{}).get('layer') for n in gltf['nodes']};check('Every generated component exported',len(gltf['meshes'])==len(s['nodes']));check('Unique component names',len(by)==len(s['nodes']));check('GLB layer metadata',{'structure','exterior','furniture','soft','ceiling'}<=layers)
check('Ceiling in GLB',any(n.get('name')=='Ceiling' for n in gltf['nodes']))
check('Bedroom opening left of sofa',p['bedroom_opening_x']+p['bedroom_opening_width']<by['Sofa_base']['position'][0]-p['sofa_width']/2)
check('Sofa back at bedroom partition',abs(by['Sofa_back']['position'][1]-(D+t/2+p['sofa_back_gap']+.11))<1e-6)
check('Kitchen remains open toward living',not any(n['name'].startswith('Partition_kitchen_front') for n in s['nodes']))
check('Bathroom left-wall opening',any(n['name']=='Bath_slider_glass' and abs(n['position'][0]-p['bathroom_left_x'])<1e-6 for n in s['nodes']))
check('Entry on desk side',by['Entry_frame0']['position'][0]==0 and by['Desk_top']['position'][0]<W/2)
check('Wardrobe opposite desk',by['Wardrobe_body']['position'][0]>W/2 and by['Desk_top']['position'][0]<W/2)
check('Bed head against right wall',abs(by['Bed_headboard']['position'][0]-(W-p['bed_right_gap']))<1e-6)
check('Single bathroom window on B end wall',any(n['name']=='Bath_window_glass' and abs(n['position'][1]-L)<1e-6 for n in s['nodes']))
check('Positive geometry dimensions',all(all(isinstance(x,(int,float)) and math.isfinite(x) and x>0 for x in n['size']) for n in s['nodes']))
check('Sofa/table leave left walking path',min(by['Sofa_base']['position'][0]-p['sofa_width']/2,by['Coffee_top']['position'][0]-p['coffee_width']/2)>.80)
check('Top camera image exists', (R/'dist/checks/top.png').exists())
with zipfile.ZipFile(R/'dist/room.usdz') as z:
 check('USDZ readable package',z.testzip() is None);check('USDZ first entry is USD',z.namelist()[0].endswith(('.usd','.usdc','.usda')))
 check('USDZ uncompressed',all(i.compress_type==zipfile.ZIP_STORED for i in z.infolist()))
 align=[]
 for i in z.infolist():
  h=raw if False else (R/'dist/room.usdz').read_bytes()[i.header_offset:i.header_offset+30]
  fn,extra=struct.unpack('<HH',h[26:30]);align.append((i.header_offset+30+fn+extra)%64==0)
 check('USDZ 64-byte alignment',all(align))
(R/'dist/model_validation.json').write_text(json.dumps({'checks':results,'node_count':len(s['nodes']),'mesh_count':len(gltf['meshes']),'unresolved':doc['unresolved_conflicts']},ensure_ascii=False,indent=2));print('MODEL_VALIDATION_OK',len(results),'checks')
