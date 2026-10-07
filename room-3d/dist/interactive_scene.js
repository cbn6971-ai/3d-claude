import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {buildRoomModel,createPartGeometry,createPartMaterial} from './scene_model.js';
import {createCollisionWorld} from './roam_physics.js';

// A runtime adapter for existing geometry. The original Viewer and exports remain intact.
export function buildInteractiveScene(doc,spec,wallClip,configs){
 const root=new THREE.Group(),parts=new Map(),bindings=new Map(),nodes=new Map(spec.nodes.map(n=>[n.name,n]));
 const moving=new Set(configs.flatMap(c=>c.animation.flatMap(a=>a.parts))),bodies=new Map(),replaced=new Set();
 for(const c of configs){for(const body of c.openBodies||[])bodies.set(body.body,body);if(c.frontPartition)bodies.set(c.frontPartition.body,c.frontPartition);if(c.glassPartition){const p=c.glassPartition,n=nodes.get(p.body);replaced.add(n.name);for(let i=0;i<2;i++){const v=structuredClone(n);v.name=p.names[i];const axis=p.axis==='x'?0:1;v.size[axis]/=2;v.position[axis]+=(i-.5)*v.size[axis];nodes.set(v.name,v);}}}
 for(const p of bodies.values()){const n=nodes.get(p.body),[x,z,y]=n.position,[w,d,h]=n.size;for(let i=0;i<p.count;i++){const v=structuredClone(n);v.name=p.body+'_interactive_front'+i;v.wall=false;
   if(p.front==='-x'){v.size=[.018,p.kind==='drawer'?d-.025:d/2-.014,p.kind==='drawer'?h/2-.016:h-.024];v.position=[x-w/2,z+(p.kind==='drawer'?0:(i-.5)*d/2),y+(p.kind==='drawer'?(i-.5)*h/2:0)];}
   else{v.size=[w/2-.014,.018,h-.024];v.position=[x+(i-.5)*w/2,z-d/2,y];}nodes.set(v.name,v);}}
 const independent=new Set([...moving,...bodies.keys(),...configs.filter(c=>c.glassPartition).flatMap(c=>c.glassPartition.names)]);
 const baseNodes=spec.nodes.filter(n=>!independent.has(n.name)&&!replaced.has(n.name));const staticModel=buildRoomModel(doc,{...spec,nodes:baseNodes},wallClip,{decorSpec:spec});root.add(staticModel);
 for(const name of independent){const n=nodes.get(name);if(!n)throw Error('交互部件未绑定 '+name);// Opened bodies use their plain carcass; the separate fronts carry the door/drawer faces.
  let g=createPartGeometry(bodies.has(name)?{...n,carcass:true}:n);const material=createPartMaterial(doc,n,wallClip);
  if(bodies.has(name)){const front=bodies.get(name).front;g=openFront(g,front);material.side=THREE.DoubleSide;}
  const mesh=new THREE.Mesh(g,material);mesh.name=name;mesh.userData={layer:n.layer,parts:[name]};parts.set(name,mesh);root.add(mesh);
 }
 const collisionNodes=spec.nodes.filter(n=>!moving.has(n.name));const world=createCollisionWorld({...spec,nodes:collisionNodes});world.staticBoxes=[...world.boxes];world.dynamicBoxes=[];
 // Eye clearance uses cached part bounds, never the whole bed/sofa footprint.
 // These small volumes are computed once from existing geometry, not rebuilt assets.
 world.cameraBoxes=collisionNodes.filter(n=>(n.wall||['furniture','soft'].includes(n.layer))&&!['Bed_rug','Living_rug'].includes(n.name)&&!bodies.has(n.name)).flatMap(n=>{
  const g=createPartGeometry(n);if(!g)return [];g.computeBoundingBox();const b=g.boundingBox.clone();g.dispose();return {minX:b.min.x,maxX:b.max.x,minY:b.min.y,maxY:b.max.y,minZ:b.min.z,maxZ:b.max.z,name:n.name};
 });
 const collisionBindings=[];
 for(const c of configs){const list=[];for(const a of c.animation){const meshes=a.parts.map(n=>parts.get(n));if(meshes.some(m=>!m))throw Error('交互动画引用缺少部件 '+c.id);let binding;
   if(['rotate','translate','transform'].includes(a.type)){
    const group=new THREE.Group();group.name=c.id+'_motion';const pivot=a.pivot||[0,0,0];group.position.fromArray(pivot);root.add(group);root.updateMatrixWorld(true);meshes.forEach(m=>group.attach(m));
    // Folded curtains share one material, so retain one draw call per panel.
    if(a.type==='transform'&&meshes.length>1&&meshes.every(m=>m.material.color.equals(meshes[0].material.color))){const gs=meshes.map(m=>{m.updateMatrix();return m.geometry.clone().applyMatrix4(m.matrix);}),geometry=mergeGeometries(gs);gs.forEach(g=>g.dispose());const combined=new THREE.Mesh(geometry,meshes[0].material);for(const m of meshes){group.remove(m);m.geometry.dispose();if(m!==meshes[0])m.material.dispose();}group.add(combined);}
    binding={descriptor:a,group,base:group.position.clone()};if(a.collision)collisionBindings.push(binding);
   }else{binding={descriptor:a,meshes};if(a.type==='light'){const light=new THREE.PointLight(a.color,0,a.distance,2);light.position.fromArray(a.position);root.add(light);binding.light=light;}
    if(a.type==='screen'){binding.texture=desktopTexture();for(const m of meshes){m.material.map=binding.texture;m.material.emissiveMap=binding.texture;m.material.needsUpdate=true;}}
    if(a.type==='water'){const water=new THREE.InstancedMesh(new THREE.CylinderGeometry(.009,.014,a.length,5),new THREE.MeshLambertMaterial({color:0x93b9cd,transparent:true,opacity:.30,depthWrite:false}),7);for(let i=0;i<7;i++){const matrix=new THREE.Matrix4().makeTranslation((i%3-1)*.031,-a.length/2,(Math.floor(i/3)-1)*.025);water.setMatrixAt(i,matrix);}water.position.fromArray(a.position);water.visible=false;root.add(water);binding.water=water;}
   }list.push(binding);
  }bindings.set(c.id,list);
 }
 function apply(id,progress){for(const b of bindings.get(id)||[]){const a=b.descriptor,p=progress;
   if(a.type==='rotate')b.group.rotation[a.axis]=(p-(a.initial||0))*a.amount;
   else if(a.type==='translate')b.group.position.copy(b.base).addScaledVector(new THREE.Vector3(...a.offset),p-(a.initial||0));
   else if(a.type==='transform'){b.group.position.copy(b.base).addScaledVector(new THREE.Vector3(...a.closedOffset),1-p);b.group.scale.set(...a.closedScale).lerp(new THREE.Vector3(1,1,1),p);}
   else if(a.type==='light'){b.light.intensity=p*a.intensity;for(const m of b.meshes){m.material.emissive.setHex(a.color);m.material.emissiveIntensity=p*.65;}}
   else if(a.type==='emissive'){for(const m of b.meshes){m.material.emissive.setHex(a.color);m.material.emissiveIntensity=p*a.intensity;}}
   else if(a.type==='screen'){for(const m of b.meshes){m.material.color.setRGB(.015+.65*p,.015+.65*p,.015+.65*p);m.material.emissive.setHex(0xffffff);m.material.emissiveIntensity=p*.38;}}
   else if(a.type==='water'){b.water.visible=p>.001;b.water.material.opacity=p*.30;}
  }updateCollision();
 }
 function updateCollision(){root.updateMatrixWorld(true);world.dynamicBoxes=[];for(const b of collisionBindings){const bounds=new THREE.Box3().setFromObject(b.group);world.dynamicBoxes.push({minX:bounds.min.x,maxX:bounds.max.x,minY:bounds.min.y,maxY:bounds.max.y,minZ:bounds.min.z,maxZ:bounds.max.z,name:b.group.name});}world.boxes=[...world.staticBoxes,...world.dynamicBoxes];}
 function animateEffects(time){let active=false;for(const list of bindings.values())for(const b of list){if(b.water?.visible){active=true;b.water.scale.y=.98+Math.sin(time*.009)*.02;}}return active;}
 function dispose(){const geometries=new Set(),materials=new Set(),textures=new Set();root.traverse(m=>{if(m.geometry)geometries.add(m.geometry);if(m.material){materials.add(m.material);if(m.material.map)textures.add(m.material.map);}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());root.removeFromParent();}
 root.visible=false;return {root,parts,bindings,world,apply,updateCollision,animateEffects,dispose};
}
function openFront(geometry,front){const index=geometry.index,normal=geometry.getAttribute('normal'),axis=front.endsWith('x')?0:2,sign=front[0]==='-'?-1:1,indices=[];for(let i=0;i<index.count;i+=3){const n=index.getX(i),value=axis===0?normal.getX(n):normal.getZ(n);if(value*sign<.9)indices.push(index.getX(i),index.getX(i+1),index.getX(i+2));}geometry.setIndex(indices);geometry.clearGroups();return geometry;}
function desktopTexture(){const w=64,h=40,data=new Uint8Array(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4,bar=x>8&&x<52&&y>9&&y<32,line=bar&&y%6<2;data[i]=line?156:bar?53:22;data[i+1]=line?180:bar?69:32;data[i+2]=line?190:bar?79:42;data[i+3]=255;}const t=new THREE.DataTexture(data,w,h);t.colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t;}
