import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {styledGeometry,createStyledMaterial,effectiveMaterial,decorPieces,styleContext,setStyleContext,withVirtualNodes} from './furnishing.js';
// Visual geometry for one semantic part. Furniture/soft parts use the round-two styled
// shapes inside the unchanged node envelope; walls, frames and grout stay primitives.
export function createPartGeometry(n){return styledGeometry(n);}
export function createPartMaterial(doc,n,wallClip){
 const material=createStyledMaterial(n.decor?n.material:effectiveMaterial(n));
 if(n.wall&&n.layer==='structure')material.clippingPlanes=[wallClip];return material;
}
// options.decorSpec: full scene used for decor/style context when spec.nodes is a subset.
export function buildRoomModel(doc,spec,wallClip,options={}){
 spec=withVirtualNodes(spec);const full=withVirtualNodes(options.decorSpec||spec);setStyleContext(styleContext(full.nodes));
 const root=new THREE.Group(),groups=new Map();
 const batch=(n,material,geometry,name,decor)=>{const key=JSON.stringify([n.layer,material,!!n.wall,n.side||'']);if(!groups.has(key))groups.set(key,{node:{...n,material,decor:true},geometries:[],names:[],decor:[]});const b=groups.get(key);if(geometry)b.geometries.push(geometry);(decor?b.decor:b.names).push(name);};
 // Virtual working parts (drawer boxes, toilet seat/lid, knobs ...) are drawn but listed
 // separately, so `parts` remains exactly the scene.json semantic set.
 for(const n of spec.nodes)batch(n,effectiveMaterial(n),createPartGeometry(n),n.name,!!n.virtual);
 if(options.decor!==false)for(const d of decorPieces(full))batch({layer:d.layer,side:d.side},d.material,d.geometry,d.name,true);
 for(const {node:n,geometries,names,decor}of groups.values()){
  if(!geometries.length)continue;
  const material=createPartMaterial(doc,n,wallClip),geometry=mergeGeometries(geometries);if(!geometry)throw Error('部件合并失败');geometries.forEach(g=>g.dispose());
  const mesh=new THREE.Mesh(geometry,material);mesh.name=(names[0]||decor[0])+'_batch';mesh.userData={layer:n.layer,wall:!!n.wall,side:n.side,parts:names,decor};root.add(mesh);
 }
 // Parts whose visual is fully carried by another part (e.g. printed bedding stripes)
 // still belong to a batch so every semantic name remains addressable.
 for(const {names}of groups.values())if(names.length&&!root.children.some(m=>m.userData.parts===names)){const host=root.children.find(m=>m.userData.layer===spec.nodes.find(n=>n.name===names[0]).layer);if(host)host.userData.parts.push(...names);}
 root.userData.partCount=spec.nodes.filter(n=>!n.virtual).length;return root;
}
