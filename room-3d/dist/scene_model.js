import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export function createPartGeometry(n){
 const [a,b,c]=n.size;let geometry;if(n.shape==='box')geometry=new THREE.BoxGeometry(a,c,b);else if(n.shape==='cylinder')geometry=new THREE.CylinderGeometry(a,a,c,12);else{geometry=new THREE.SphereGeometry(1,12,6);geometry.scale(a,c,b);}
 const [rx,ry,rz]=n.rotation,rotation=new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(-rx,ry,-rz,'XYZ')),convert=new THREE.Matrix4().makeRotationX(-Math.PI/2);
 rotation.premultiply(convert).multiply(convert.clone().invert());rotation.setPosition(n.position[0],n.position[2],n.position[1]);geometry.applyMatrix4(rotation);return geometry;
}
export function createPartMaterial(doc,n,wallClip){
 const palette={...doc.palette,metal:'#a8adb2',grout:'#9fa3a8',stripe:'#e0e2e4',frosted:'#b8c6c8',sheer:'#e7e9e5'},transparent=['glass','sheer'].includes(n.material);
 const material=new THREE.MeshLambertMaterial({color:palette[n.material],transparent,opacity:n.material==='glass'?.18:n.material==='sheer'?.30:1,side:transparent?THREE.DoubleSide:THREE.FrontSide,depthWrite:!transparent});material.forceSinglePass=true;
 if(n.wall&&n.layer==='structure')material.clippingPlanes=[wallClip];return material;
}
export function buildRoomModel(doc,spec,wallClip){
 const root=new THREE.Group(),groups=new Map();
 for(const n of spec.nodes){const key=JSON.stringify([n.layer,n.material,!!n.wall,n.side||'']);if(!groups.has(key))groups.set(key,{node:n,geometries:[],names:[]});const batch=groups.get(key);batch.geometries.push(createPartGeometry(n));batch.names.push(n.name);}
 for(const {node:n,geometries,names}of groups.values()){
  const material=createPartMaterial(doc,n,wallClip),geometry=mergeGeometries(geometries);if(!geometry)throw Error('部件合并失败');geometries.forEach(g=>g.dispose());
  const mesh=new THREE.Mesh(geometry,material);mesh.name=names[0]+'_batch';mesh.userData={layer:n.layer,wall:!!n.wall,side:n.side,parts:names};root.add(mesh);
 }root.userData.partCount=spec.nodes.length;return root;
}
