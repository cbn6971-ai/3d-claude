import * as THREE from 'three';
export function createCharacter(){
 const root=new THREE.Group(),body=new THREE.Group();root.name='Roam_character_175cm';root.add(body);
 const colors={skin:0xd9af92,shirt:0x678092,pants:0x384753,shoes:0xe5e4df,hair:0x302b29,eyes:0x302b29};const materials=Object.fromEntries(Object.entries(colors).map(([k,color])=>[k,new THREE.MeshLambertMaterial({color})]));
 function ellipsoid(parent,name,x,y,z,a,b,c,mat){const m=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),materials[mat]);m.name=name;m.position.set(x,y,z);m.scale.set(a,b,c);parent.add(m);return m;}
 function limb(parent,name,x,y,z,top,bottom,length,mat){const m=new THREE.Mesh(new THREE.CylinderGeometry(top,bottom,length,10),materials[mat]);m.name=name;m.position.set(x,y,z);parent.add(m);return m;}
 limb(body,'Torso',0,1.19,0,.205,.145,.43,'shirt').scale.z=.58;
 ellipsoid(body,'Pelvis',0,.94,0,.16,.13,.10,'pants');limb(body,'Neck',0,1.455,0,.06,.065,.08,'skin');
 ellipsoid(body,'Head',0,1.59,0,.125,.16,.115,'skin');ellipsoid(body,'Hair',0,1.68,-.015,.128,.07,.112,'hair');
 ellipsoid(body,'Nose',0,1.585,.118,.025,.03,.023,'skin');for(const x of [-.044,.044])ellipsoid(body,'Eye',x,1.625,.103,.012,.012,.011,'eyes');
 const legs=[],arms=[];for(const side of [-1,1]){
  const leg=new THREE.Group();leg.position.set(side*.095,.92,0);body.add(leg);legs.push(leg);limb(leg,'Thigh',0,-.205,0,.085,.067,.39,'pants');const knee=new THREE.Group();knee.position.y=-.40;leg.add(knee);limb(knee,'Shin',0,-.20,0,.065,.045,.39,'pants');ellipsoid(knee,'Shoe',0,-.46,.052,.066,.06,.125,'shoes');leg.userData.knee=knee;
  const arm=new THREE.Group();arm.position.set(side*.225,1.36,0);body.add(arm);arms.push(arm);ellipsoid(arm,'Shoulder',0,-.02,0,.07,.08,.065,'shirt');limb(arm,'Upper_arm',side*.018,-.145,0,.061,.046,.24,'shirt');limb(arm,'Forearm',side*.018,-.375,.015,.045,.033,.24,'skin');ellipsoid(arm,'Hand',side*.018,-.525,.018,.04,.065,.035,'skin');
 }
 root.visible=false;return {root,animate(travel,speed,dt){const strength=Math.min(1,speed/.8),phase=travel*8;for(let i=0;i<2;i++){const swing=Math.sin(phase+i*Math.PI)*.36*strength;legs[i].rotation.x=swing;legs[i].userData.knee.rotation.x=Math.max(0,-swing)*.5;arms[i].rotation.x=-swing*.7;}body.position.y=Math.abs(Math.sin(phase))*strength*.016;},dispose(){const gs=new Set();root.traverse(o=>{if(o.isMesh)gs.add(o.geometry);});gs.forEach(g=>g.dispose());Object.values(materials).forEach(m=>m.dispose());}};
}
