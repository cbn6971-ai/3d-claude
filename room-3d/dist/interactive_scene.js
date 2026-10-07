import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {buildRoomModel,createPartGeometry,createPartMaterial} from './scene_model.js';
import {createCollisionWorld} from './roam_physics.js';
import {withVirtualNodes,createFlameGeometry} from './furnishing.js';
import {channelKey} from './interaction_keys.js';

// A runtime adapter for existing geometry. The original Viewer and exports remain intact.
export function buildInteractiveScene(doc,spec,wallClip,configs){
 spec=withVirtualNodes(spec);
 const root=new THREE.Group(),parts=new Map(),bindings=new Map(),nodes=new Map(spec.nodes.map(n=>[n.name,n]));
 const moving=new Set(configs.flatMap(c=>c.animation.flatMap(a=>a.parts))),bodies=new Map(),replaced=new Set();
 for(const c of configs){for(const body of c.openBodies||[])bodies.set(body.body,body);if(c.frontPartition)bodies.set(c.frontPartition.body,c.frontPartition);if(c.glassPartition){const p=c.glassPartition,n=nodes.get(p.body);replaced.add(n.name);for(let i=0;i<2;i++){const v=structuredClone(n);v.name=p.names[i];const axis=p.axis==='x'?0:1;v.size[axis]/=2;v.position[axis]+=(i-.5)*v.size[axis];nodes.set(v.name,v);}}}
 for(const p of bodies.values()){const n=nodes.get(p.body),[x,z,y]=n.position,[w,d,h]=n.size;for(let i=0;i<p.count;i++){const v=structuredClone(n);v.name=p.body+'_interactive_front'+i;v.wall=false;
   if(p.front==='-x'){v.size=[.018,p.kind==='drawer'?d-.025:d/2-.014,p.kind==='drawer'?h/2-.016:h-.024];v.position=[x-w/2,z+(p.kind==='drawer'?0:(i-.5)*d/2),y+(p.kind==='drawer'?(i-.5)*h/2:0)];}
   else{v.size=[w/2-.014,.018,h-.024];v.position=[x+(i-.5)*w/2,z-d/2,y];}nodes.set(v.name,v);}}
 const independent=new Set([...moving,...bodies.keys(),...configs.filter(c=>c.glassPartition).flatMap(c=>c.glassPartition.names)]);
 const baseNodes=spec.nodes.filter(n=>!independent.has(n.name)&&!replaced.has(n.name));const staticModel=buildRoomModel(doc,{...spec,nodes:baseNodes},wallClip,{decorSpec:spec});root.add(staticModel);
 for(const name of independent){const n=nodes.get(name);if(!n)throw Error('交互部件未绑定 '+name);// Opened bodies are built as real board carcasses (open on their front side); the
  // separate fronts and drawer boxes carry the moving faces.
  const g=createPartGeometry(bodies.has(name)?{...n,carcass:bodies.get(name).front}:n);const material=createPartMaterial(doc,n,wallClip);
  const mesh=new THREE.Mesh(g,material);mesh.name=name;mesh.userData={layer:n.layer,parts:[name]};parts.set(name,mesh);root.add(mesh);
 }
 const collisionNodes=spec.nodes.filter(n=>!moving.has(n.name));const world=createCollisionWorld({...spec,nodes:collisionNodes},configs);world.staticBoxes=[...world.boxes];world.dynamicBoxes=[];
 // Eye clearance uses cached part bounds, never the whole bed/sofa footprint.
 // These small volumes are computed once from existing geometry, not rebuilt assets.
 world.cameraBoxes=collisionNodes.filter(n=>(n.wall||['furniture','soft'].includes(n.layer))&&!['Bed_rug','Living_rug'].includes(n.name)&&!bodies.has(n.name)).flatMap(n=>{
  const g=createPartGeometry(n);if(!g)return [];g.computeBoundingBox();const b=g.boundingBox.clone();g.dispose();return {minX:b.min.x,maxX:b.max.x,minY:b.min.y,maxY:b.max.y,minZ:b.min.z,maxZ:b.max.z,name:n.name};
 });
 // Glass and window frames: not walking colliders (the house edge already is), but hands
 // must not pass through them.
 world.glazingBoxes=spec.nodes.filter(n=>n.side==='glazing').map(n=>{const g=createPartGeometry(n);g.computeBoundingBox();const b=g.boundingBox;g.dispose();return {minX:b.min.x,maxX:b.max.x,minY:b.min.y,maxY:b.max.y,minZ:b.min.z,maxZ:b.max.z,name:n.name};});
 const collisionBindings=[],effectParts=new Set(configs.flatMap(c=>c.animation.filter(a=>!['rotate','translate','transform'].includes(a.type)).flatMap(a=>a.parts)));
 for(const c of configs){for(const a of c.animation){const key=channelKey(c,a.channel);if(!bindings.has(key))bindings.set(key,[]);const list=bindings.get(key);const meshes=a.parts.map(n=>parts.get(n));if(meshes.some(m=>!m))throw Error('交互动画引用缺少部件 '+c.id);let binding;
   if(['rotate','translate','transform'].includes(a.type)){
    const group=new THREE.Group();group.name=key+'_motion';const pivot=a.pivot||[0,0,0];group.position.fromArray(pivot);root.add(group);root.updateMatrixWorld(true);meshes.forEach(m=>group.attach(m));
    // Parts that move together and share a material (curtain folds, a drawer front and its
    // box) are merged into one draw call, unless a material effect also targets them.
    const bySkin=new Map();for(const m of meshes){if(effectParts.has(m.name))continue;const k=m.material.userData.styleKey+'|'+m.material.side;if(!bySkin.has(k))bySkin.set(k,[]);bySkin.get(k).push(m);}
    for(const same of bySkin.values())if(same.length>1){const gs=same.map(m=>{m.updateMatrix();return m.geometry.clone().applyMatrix4(m.matrix);}),geometry=mergeGeometries(gs);gs.forEach(g=>g.dispose());const combined=new THREE.Mesh(geometry,same[0].material);combined.name=same[0].name+'_merged';for(const m of same){group.remove(m);m.geometry.dispose();if(m!==same[0])m.material.dispose();}group.add(combined);}
    binding={descriptor:a,group,base:group.position.clone()};if(a.collision)collisionBindings.push(binding);
   }else{binding={descriptor:a,meshes};if(a.type==='light'){const light=new THREE.PointLight(a.color,0,a.distance,2);light.position.fromArray(a.position);root.add(light);binding.light=light;}
    if(a.type==='screen'){binding.texture=desktopTexture();for(const m of meshes){m.material.map=binding.texture;m.material.emissiveMap=binding.texture;m.material.needsUpdate=true;}}
    if(a.type==='flame'){const flame=new THREE.Mesh(createFlameGeometry(a.radius||.052),new THREE.MeshBasicMaterial({vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));flame.position.fromArray(a.position);flame.visible=false;flame.renderOrder=3;root.add(flame);binding.flame=flame;binding.level=0;}
    if(a.type==='water'){const water=new THREE.InstancedMesh(new THREE.CylinderGeometry(.009,.014,a.length,5),new THREE.MeshLambertMaterial({color:0x93b9cd,transparent:true,opacity:.30,depthWrite:false}),7);for(let i=0;i<7;i++){const matrix=new THREE.Matrix4().makeTranslation((i%3-1)*.031,-a.length/2,(Math.floor(i/3)-1)*.025);water.setMatrixAt(i,matrix);}water.position.fromArray(a.position);water.visible=false;root.add(water);binding.water=water;}
   }list.push(binding);
  }
 }
 // Hand targets: authored world points (at the parts' initial pose) re-expressed in the
 // moving group's frame so a grip follows a drawer, door, lid or knob as it moves.
 root.updateMatrixWorld(true);const handTargets=new Map();
 for(const c of configs)for(const t of [].concat(c.handTarget||[])){const key=channelKey(c,t.channel),group=(bindings.get(key)||[]).find(b=>b.group)?.group,point=new THREE.Vector3(...t.point);handTargets.set(key,{group:t.follow===false?null:group||null,local:group&&t.follow!==false?group.worldToLocal(point.clone()):point,spec:t});}
 function handTarget(key){const h=handTargets.get(key);if(!h)return null;const position=h.local.clone(),quaternion=new THREE.Quaternion();if(h.group){h.group.updateWorldMatrix(true,false);h.group.localToWorld(position);h.group.getWorldQuaternion(quaternion);}return {position,quaternion};}
 function apply(id,progress){for(const b of bindings.get(id)||[]){const a=b.descriptor,p=progress;
   if(a.type==='rotate')b.group.rotation[a.axis]=(p-(a.initial||0))*a.amount;
   else if(a.type==='translate')b.group.position.copy(b.base).addScaledVector(new THREE.Vector3(...a.offset),p-(a.initial||0));
   else if(a.type==='transform'){b.group.position.copy(b.base).addScaledVector(new THREE.Vector3(...a.closedOffset),1-p);b.group.scale.set(...a.closedScale).lerp(new THREE.Vector3(1,1,1),p);}
   else if(a.type==='light'){b.light.intensity=p*a.intensity;for(const m of b.meshes){m.material.emissive.setHex(a.color);m.material.emissiveIntensity=p*.65;}}
   else if(a.type==='emissive'){for(const m of b.meshes){m.material.emissive.setHex(a.color);m.material.emissiveIntensity=p*a.intensity;}}
   else if(a.type==='screen'){for(const m of b.meshes){m.material.color.setRGB(.015+.65*p,.015+.65*p,.015+.65*p);m.material.emissive.setHex(0xffffff);m.material.emissiveIntensity=p*.38;}}
   else if(a.type==='water'){b.water.visible=p>.001;b.water.material.opacity=p*.30;}
   else if(a.type==='flame'){b.level=p;b.flame.visible=p>.02;}
  }updateCollision();
 }
 function updateCollision(){root.updateMatrixWorld(true);world.dynamicBoxes=[];for(const b of collisionBindings){const bounds=new THREE.Box3().setFromObject(b.group);world.dynamicBoxes.push({minX:bounds.min.x,maxX:bounds.max.x,minY:bounds.min.y,maxY:bounds.max.y,minZ:bounds.min.z,maxZ:bounds.max.z,name:b.group.name});}world.boxes=[...world.staticBoxes,...world.dynamicBoxes];}
 // Space a moving part sweeps between closed and open; the body's step-in avoids it.
 const sweeps=new Map();for(const [key,list]of bindings){const groups=list.filter(b=>b.descriptor.collision&&b.group);if(!groups.length)continue;const boxes=[];for(const p of [0,.25,.5,.75,1]){apply(key,p);for(const b of groups){const bounds=new THREE.Box3().setFromObject(b.group);boxes.push({minX:bounds.min.x,maxX:bounds.max.x,minY:bounds.min.y,maxY:bounds.max.y,minZ:bounds.min.z,maxZ:bounds.max.z,name:key+'_sweep'});}}sweeps.set(key,boxes);}
 function sweep(key){return sweeps.get(key)||[];}
 function animateEffects(time){let active=false;for(const list of bindings.values())for(const b of list){if(b.water?.visible){active=true;b.water.scale.y=.98+Math.sin(time*.009)*.02;}
   // Flame height and spread follow the knob level; a cheap two-sine flicker keeps it alive.
   if(b.flame?.visible){active=true;const k=b.level,f=1+.07*Math.sin(time*.031+b.descriptor.position[2]*40)+.04*Math.sin(time*.057);b.flame.scale.set(.82+.28*k,(.32+.95*k)*f,.82+.28*k);}}return active;}
 function dispose(){const geometries=new Set(),materials=new Set(),textures=new Set();root.traverse(m=>{if(m.geometry)geometries.add(m.geometry);if(m.material){materials.add(m.material);if(m.material.map)textures.add(m.material.map);}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());root.removeFromParent();}
 root.visible=false;return {root,parts,bindings,world,apply,updateCollision,animateEffects,dispose,handTarget,sweep,nodes,configs};
}
function desktopTexture(){const w=64,h=40,data=new Uint8Array(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4,bar=x>8&&x<52&&y>9&&y<32,line=bar&&y%6<2;data[i]=line?156:bar?53:22;data[i+1]=line?180:bar?69:32;data[i+2]=line?190:bar?79:42;data[i+3]=255;}const t=new THREE.DataTexture(data,w,h);t.colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;return t;}
