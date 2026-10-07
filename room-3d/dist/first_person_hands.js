// First-person arms and hands. Procedural: two-bone arm IK from a shoulder fixed to the
// camera, finger poses blended per grip type, and one gesture state machine driven by the
// object's configuration (handPose / handTarget). One skinned mesh (one draw call) per arm.
//
// Gesture: reach -> contact (grip closes / finger presses) -> drive (hand follows the moving
// handle, knob or lid) -> release -> retract. The interaction system delays the part's motion
// until contact, so the object never moves before the hand arrives.
import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {EYE_HEIGHT} from './interaction_system.js';

const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
const UPPER=.29,FORE=.265,PALM=.088,REACH=UPPER+FORE-.004;
// Finger layout in the hand frame: +y along the fingers, +z = back of the hand,
// +x toward the thumb (mirrored per side by `s`).
const FINGERS=[{x:.025,len:[.042,.025,.020],r:.0086},{x:.008,len:[.046,.028,.021],r:.0089},{x:-.0095,len:[.043,.026,.020],r:.0084},{x:-.026,len:[.034,.021,.018],r:.0075}];
const THUMB={base:[.030,.020,-.012],len:[.037,.030,.024],r:.0099};
// Flex per phalanx (rad) for the four fingers, then thumb [flex, spread].
export const HAND_POSES={
 relaxed:{f:[[.30,.40,.26],[.34,.44,.28],[.40,.48,.30],[.48,.52,.32]],t:[.25,.15]},
 open:{f:[[.08,.06,.04],[.08,.06,.04],[.10,.08,.05],[.12,.08,.05]],t:[.05,.45]},
 grip:{f:[[.92,1.02,.52],[.96,1.06,.55],[1.0,1.06,.55],[1.04,1.02,.52]],t:[.85,-.05]},
 pinch:{f:[[.78,.60,.35],[.95,.85,.45],[1.25,1.25,.80],[1.30,1.25,.80]],t:[.75,.20]},
 point:{f:[[.04,.04,.02],[1.35,1.45,.95],[1.40,1.45,.95],[1.40,1.40,.90]],t:[.80,.0]},
 hook:{f:[[.50,.62,.30],[.50,.62,.30],[.55,.62,.30],[.60,.62,.30]],t:[.30,.25]},
 flat:{f:[[.06,.05,.02],[.06,.05,.02],[.07,.05,.02],[.09,.06,.03]],t:[.10,.50]}
};
// Where the grasped point sits relative to the wrist, in the hand frame (x scaled by side).
const GRIP_POINT={grip:[0,.118,-.033],pinch:[.014,.132,-.020],point:[.025,.172,-.006],hook:[0,.128,-.024],flat:[0,.105,-.020],open:[0,.12,-.03],relaxed:[0,.112,-.03]};
const SKIN=new THREE.Color('#e8c3a6'),SLEEVE=new THREE.Color('#d8d0c3'),CUFF=new THREE.Color('#cdc4b6');
const ease=q=>q<=0?0:q>=1?1:q*q*(3-2*q);
function aim(dir,ref,out=new THREE.Quaternion()){const y=dir.clone().normalize();let z=ref.clone().addScaledVector(y,-ref.dot(y));if(z.lengthSq()<1e-8){z=Math.abs(y.z)<.9?V(0,0,1):V(1,0,0);z.addScaledVector(y,-z.dot(y));}z.normalize();const x=y.clone().cross(z);return out.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x,y,z));}
function basisQuat(fingers,dorsal){return aim(fingers,dorsal);}

// ---------------------------------------------------------------- arm mesh
function buildArm(side){
 const s=side==='right'?-1:1,armSide=side==='right'?1:-1,bones=[],segs=[];
 const bone=(parent,pos,name)=>{const b=new THREE.Bone();b.name=name;b.position.fromArray(pos);if(parent)parent.add(b);bones.push(b);return b;};
 const shoulder=bone(null,[0,0,0],'shoulder'),elbow=bone(shoulder,[0,UPPER,0],'elbow'),wrist=bone(elbow,[0,FORE,0],'wrist');
 const fingers=FINGERS.map((f,i)=>{let p=wrist;return f.len.map((l,j)=>{const b=bone(p,j===0?[f.x*s,PALM,0]:[0,f.len[j-1],0],'f'+i+j);p=b;return b;});});
 const t0=bone(wrist,[THUMB.base[0]*s,THUMB.base[1],THUMB.base[2]],'t0'),t1=bone(t0,[0,THUMB.len[0],0],'t1'),t2=bone(t1,[0,THUMB.len[1],0],'t2');
 const thumbRest=aim(V(s*.62,.62,-.40),V(s*.75,0,.65));t0.quaternion.copy(thumbRest);
 shoulder.updateMatrixWorld(true);
 const seg=(b,geometry,color)=>{geometry=geometry.index?geometry:geometry;for(const k of Object.keys(geometry.attributes))if(k!=='position'&&k!=='normal')geometry.deleteAttribute(k);geometry.applyMatrix4(b.matrixWorld);const n=geometry.attributes.position.count,index=bones.indexOf(b),si=new Uint16Array(n*4),sw=new Float32Array(n*4),col=new Float32Array(n*3);for(let i=0;i<n;i++){si[i*4]=index;sw[i*4]=1;col[i*3]=color.r;col[i*3+1]=color.g;col[i*3+2]=color.b;}geometry.setAttribute('skinIndex',new THREE.BufferAttribute(si,4));geometry.setAttribute('skinWeight',new THREE.BufferAttribute(sw,4));geometry.setAttribute('color',new THREE.BufferAttribute(col,3));segs.push(geometry);};
 const capsule=(r,l,cap=4,rad=10)=>new THREE.CapsuleGeometry(r,l,cap,rad).translate(0,l/2,0);
 seg(shoulder,new THREE.CylinderGeometry(.050,.054,UPPER,14).translate(0,UPPER/2,0),SLEEVE);
 seg(elbow,new THREE.SphereGeometry(.052,14,8),SLEEVE);
 seg(elbow,new THREE.CylinderGeometry(.047,.051,FORE*.56,14).translate(0,FORE*.28,0).scale(1,1,.9),SLEEVE);
 seg(elbow,new THREE.CylinderGeometry(.049,.049,.024,14).translate(0,FORE*.56,0).scale(1,1,.9),CUFF);
 seg(elbow,new THREE.CylinderGeometry(.027,.038,FORE,14).translate(0,FORE/2,0).scale(1,1,.8),SKIN);
 seg(wrist,new THREE.SphereGeometry(.029,12,8).scale(1,.8,.72),SKIN);
 // Rounded palm: a flattened ellipsoid plus a soft knuckle ridge, no box edges.
 const palm=new THREE.SphereGeometry(1,18,12),pp=palm.attributes.position;for(let i=0;i<pp.count;i++){const x=pp.getX(i),y=pp.getY(i),z=pp.getZ(i),sq=1-.25*Math.pow(Math.abs(y),4);pp.setXYZ(i,x*.041*sq,y*PALM*.56,z*(z>0?.014:.017));}palm.computeVertexNormals();
 seg(wrist,palm.translate(s*.001,PALM*.52,-.002),SKIN);
 seg(wrist,new THREE.CapsuleGeometry(.012,.056,4,10).rotateZ(Math.PI/2).scale(1,1,.9).translate(s*.0,PALM-.004,.001),SKIN);
 seg(wrist,new THREE.SphereGeometry(1,12,8).scale(.019,.032,.015).translate(s*.024,.030,-.010),SKIN);
 FINGERS.forEach((f,i)=>f.len.forEach((l,j)=>seg(fingers[i][j],capsule(f.r*(1-j*.09),l),SKIN)));
 [t0,t1,t2].forEach((b,j)=>seg(b,capsule(THUMB.r*(1-j*.1),THUMB.len[j]),SKIN));
 const geometry=mergeGeometries(segs);segs.forEach(g=>g.dispose());
 const material=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.62,metalness:0});
 const mesh=new THREE.SkinnedMesh(geometry,material);mesh.add(shoulder);mesh.updateMatrixWorld(true);mesh.bind(new THREE.Skeleton(bones));mesh.frustumCulled=false;mesh.name='Hand_'+side;mesh.renderOrder=2;
 return {mesh,side,s,armSide,shoulder,elbow,wrist,fingers,thumb:[t0,t1,t2],thumbRest};
}

// ---------------------------------------------------------------- rig
export class HandRig {
 constructor({adapter,camera,root}){
  Object.assign(this,{adapter,camera});this.group=new THREE.Group();this.group.name='FirstPersonHands';(root||adapter.root).add(this.group);
  this.arms={right:buildArm('right'),left:buildArm('left')};for(const a of Object.values(this.arms))this.group.add(a.mesh);
  this.hands={};for(const side of ['right','left'])this.hands[side]={T:null,D:null,Z:null,curl:'relaxed',curlFrom:'relaxed',curlT:1,lower:1,visible:true};
  this.gesture=null;this.crouch=0;this.assist=null;this.time=0;this.lastSignature='';
 }
 reset(){this.gesture=null;this.crouch=0;this.assist=null;for(const h of Object.values(this.hands)){h.T=null;h.lower=1;}}
 // World frame of the camera for this frame.
 frame(){const c=this.camera;c.updateMatrixWorld(true);const q=c.getWorldQuaternion(new THREE.Quaternion());return {eye:c.getWorldPosition(V()),q,right:V(1,0,0).applyQuaternion(q),up:V(0,1,0).applyQuaternion(q),fwd:V(0,0,-1).applyQuaternion(q)};}
 shoulder(side,f){const k=side==='right'?1:-1;return f.eye.clone().addScaledVector(f.right,k*.185).addScaledVector(f.up,-.235).addScaledVector(f.fwd,-.04);}
 // Relaxed hands resting at the bottom corners of the view, scaled to the viewport.
 idle(side,f,ctx){const c=this.camera,k=side==='right'?1:-1,tanV=Math.tan(THREE.MathUtils.degToRad(c.fov||70)/2),tanH=tanV*(c.aspect||1),d=.40,bob=Math.sin((ctx.travel||0)*12)*(ctx.bob||0)*1.8;
  const T=f.eye.clone().addScaledVector(f.right,k*Math.min(.17,d*tanH*.70)).addScaledVector(f.up,-d*tanV*.92+bob).addScaledVector(f.fwd,d);
  const D=f.fwd.clone().multiplyScalar(1).addScaledVector(f.up,.42).addScaledVector(f.right,-k*.28).normalize(),Z=f.up.clone().multiplyScalar(.80).addScaledVector(f.right,k*.50).addScaledVector(f.fwd,.30).normalize();
  return {T,D,Z};}
 target(g){return this.adapter.handTarget(g.key);}
 // Hand orientation for a gesture at the part's current rotation.
 orientation(g,t){if(g.mode!=='grip'){const D=g.approach.clone().setY(g.approach.y-.25).normalize();return {D,Z:V(0,1,0).addScaledVector(D,-D.y).normalize()};}const hp=g.config.handPose,D=V(...(hp.fingers||[0,-1,0])),Z=V(...(hp.palm||[0,0,1])).negate();if(hp.follow!==false&&t?.quaternion){D.applyQuaternion(t.quaternion);Z.applyQuaternion(t.quaternion);}return {D,Z};}
 begin({config,key,action}){
  const hp=config.handPose;if(!hp)return null;const t=this.adapter.handTarget(key);if(!t)return null;
  if(this.gesture&&this.gesture.key===key&&['contact','drive'].includes(this.gesture.phase)){this.gesture.renew=true;return 0;}
  const f=this.frame(),local=t.position.clone().sub(f.eye).applyQuaternion(f.q.clone().invert()),side=hp.hand||(local.x<-.04?'left':'right'),h=this.hands[side],from=h.T?{T:h.T.clone(),D:h.D.clone(),Z:h.Z.clone()}:this.idle(side,f,{});
  const flat=Math.hypot(t.position.x-f.eye.x,t.position.z-f.eye.z),step=Math.max(0,flat-.50),reach=THREE.MathUtils.clamp(.28+from.T.distanceTo(t.position)*.30+step*.9,.32,.95);
  const mode=hp.gesture==='press'?'press':hp.gesture==='remote'?'remote':'grip',contact=mode==='press'?.07:mode==='remote'?.12:.10;
  this.gesture={config,key,action,side,mode,grip:hp.grip||(mode==='press'||mode==='remote'?'point':'grip'),phase:'reach',t:0,reach,contact,from,approach:t.position.clone().sub(f.eye).normalize()};
  return reach+contact;
 }
 // Grip point and orientation the active hand aims for this frame.
 gesturePose(g,f,ctx){const t=this.target(g),{D,Z}=this.orientation(g,t);let T=t.position.clone();
  if(g.mode==='remote'){const S=this.shoulder(g.side,f),dir=T.clone().sub(S).normalize();T=S.addScaledVector(dir,REACH*.86);D.copy(dir);Z.copy(f.up).addScaledVector(dir,-f.up.dot(dir)).normalize();}
  return {T,D,Z,target:t};}
 update(dt,ctx={}){
  this.time+=dt;const f=this.frame(),g=this.gesture;let active=false;this.group.position.copy(f.eye);this.group.quaternion.copy(f.q);this.group.updateMatrixWorld(true);
  const hidden=ctx.occupied||ctx.motion||ctx.sleeping;this.crouch=0;this.assist=null;
  if(g){g.t+=dt;active=true;const pose=this.gesturePose(g,f,ctx),h=this.hands[g.side];
   if(hidden){this.gesture=null;}
   else{
    let T,D,Z,curl=g.grip;
    if(g.phase==='reach'){const u=ease(g.t/g.reach),lift=Math.sin(Math.PI*u)*.05;T=g.from.T.clone().lerp(g.mode==='press'?pose.T.clone().addScaledVector(g.approach,-.035):pose.T,u).addScaledVector(f.up,lift);D=g.from.D.clone().lerp(pose.D,u).normalize();Z=g.from.Z.clone().lerp(pose.Z,u).normalize();curl=u<.7?'open':g.grip==='point'?'point':'open';if(g.t>=g.reach){g.phase='contact';g.t=0;}}
    else if(g.phase==='contact'){const u=Math.min(1,g.t/g.contact);T=g.mode==='press'?pose.T.clone().addScaledVector(g.approach,-.035*(1-u)):pose.T;D=pose.D;Z=pose.Z;if(g.t>=g.contact){g.phase=g.mode==='grip'?'drive':'hold';g.t=0;}}
    else if(g.phase==='drive'){T=pose.T;D=pose.D;Z=pose.Z;g.away=(h.reachDist>REACH+.09)?(g.away||0)+dt:0;if(g.away>.25||(g.t>.12&&!ctx.animating?.(g.key))){g.phase='release';g.t=0;}}
    else if(g.phase==='hold'){const u=Math.min(1,g.t/.09);T=g.mode==='press'?pose.T.clone().addScaledVector(g.approach,-.035*u):pose.T;D=pose.D;Z=pose.Z;if(g.t>=(g.mode==='remote'?.30:.09)){g.phase='release';g.t=0;}}
    else if(g.phase==='release'){T=h.T.clone();D=h.D.clone();Z=h.Z.clone();curl=g.mode==='grip'?'open':g.grip;if(g.t>=.10){g.phase='retract';g.t=0;g.retractFrom={T:h.T.clone(),D:h.D.clone(),Z:h.Z.clone()};}}
    else if(g.phase==='retract'){const idle=this.idle(g.side,f,ctx),u=ease(g.t/.32);T=g.retractFrom.T.clone().lerp(idle.T,u);D=g.retractFrom.D.clone().lerp(idle.D,u).normalize();Z=g.retractFrom.Z.clone().lerp(idle.Z,u).normalize();curl=u>.5?'relaxed':'open';if(g.t>=.32)this.gesture=null;}
    this.setHand(h,T,D,Z,curl);
    // Body assistance while reaching/holding: step toward a far handle, crouch for a low one.
    if(['reach','contact','drive','hold'].includes(g.phase)&&g.mode!=='remote'){const tp=pose.target.position,flat=Math.hypot(tp.x-f.eye.x,tp.z-f.eye.z);
     // Step in only as far as the arm needs (measured shoulder->wrist), never into the part.
     const need=(h.reachDist||0)-REACH*(g.phase==='drive'?.97:.90);if(need>0&&flat>.22){const k=Math.min(1.1,need*5+.15)/flat;this.assist={x:(tp.x-f.eye.x)*k,z:(tp.z-f.eye.z)*k};}
     this.crouch=THREE.MathUtils.clamp((EYE_HEIGHT-.21)-tp.y-.36,0,.72);}
   }
  }
  for(const side of ['right','left']){const h=this.hands[side],busy=this.gesture?.side===side;
   if(!busy){const idle=this.idle(side,f,ctx),lowerTarget=hidden?1:0;h.lower+=(lowerTarget-h.lower)*(1-Math.exp(-dt*9));if(Math.abs(h.lower-lowerTarget)<.002)h.lower=lowerTarget;else active=true;
    const T=idle.T.addScaledVector(f.up,-.28*h.lower).addScaledVector(f.fwd,-.10*h.lower),prev=h.T?.clone();this.setHand(h,T,idle.D,idle.Z,'relaxed');if(prev&&prev.distanceTo(h.T)>.0004)active=true;}
   if(h.curlT<1){h.curlT=Math.min(1,h.curlT+dt/.11);active=true;}
   this.pose(side,f,busy?this.gesture:null);
  }
  return active;
 }
 setHand(h,T,D,Z,curl){if(curl!==h.curl){h.curlFrom=h.curl;h.curl=curl;h.curlT=0;}h.T=T.clone();h.D=D.clone();h.Z=Z.clone();}
 // Keep hand points out of walls and furniture except the part being handled.
 clear(points,ignore,r){const boxes=[...(this.adapter.world.cameraBoxes||[]),...(this.adapter.world.glazingBoxes||[]),...(this.adapter.world.dynamicBoxes||[])];const shift=V();
  for(let iter=0;iter<2;iter++)for(const b of boxes){if(ignore(b.name))continue;for(const p0 of points){const p=p0.clone().add(shift);if(p.x<b.minX-r||p.x>b.maxX+r||p.y<b.minY-r||p.y>b.maxY+r||p.z<b.minZ-r||p.z>b.maxZ+r)continue;
   // Prefer lifting over an obstacle (a chair back, a counter edge) to sliding sideways.
   const opts=[[b.minX-r-p.x,0,1],[b.maxX+r-p.x,0,1],[b.minY-r-p.y,1,1.6],[b.maxY+r-p.y,1,.45],[b.minZ-r-p.z,2,1],[b.maxZ+r-p.z,2,1]].sort((a,c)=>Math.abs(a[0])*a[2]-Math.abs(c[0])*c[2])[0];shift.setComponent(opts[1],shift.getComponent(opts[1])+opts[0]);}}
  return shift;}
 // Never reach through a thin panel: limit the hand to the first box crossed on the way from the eye.
 reachLimit(from,to,ignore,r){const boxes=[...(this.adapter.world.cameraBoxes||[]),...(this.adapter.world.glazingBoxes||[]),...(this.adapter.world.dynamicBoxes||[])],d=to.clone().sub(from);let limit=1;
  for(const b of boxes){if(ignore(b.name))continue;let lo=0,hi=1;for(const [k,mn,mx]of [['x',b.minX,b.maxX],['y',b.minY,b.maxY],['z',b.minZ,b.maxZ]]){const o=from[k],dk=d[k];if(Math.abs(dk)<1e-9){if(o<mn-r||o>mx+r){hi=-1;break;}continue;}const a=(mn-r-o)/dk,c=(mx+r-o)/dk;lo=Math.max(lo,Math.min(a,c));hi=Math.min(hi,Math.max(a,c));}
   if(hi>=lo&&lo>1e-4&&lo<limit)limit=lo;}return limit;}
 pose(side,f,g){
  const arm=this.arms[side],h=this.hands[side],s=arm.s;let T=h.T.clone();const D=h.D.clone().normalize(),Z=h.Z.clone(),qHand=basisQuat(D,Z),gp=GRIP_POINT[h.curl]||GRIP_POINT.relaxed;
  const toWrist=V(gp[0]*s,gp[1],gp[2]).applyQuaternion(qHand);
  // Clearance: grip point, fingertips and wrist stay outside non-target boxes.
  const ignoreNames=g?new Set([g.config.id,g.key+'_motion',...(g.config.object||[]),...(g.config.animation||[]).flatMap(a=>a.parts)]):null,ignore=name=>!!ignoreNames&&(ignoreNames.has(name)||name.startsWith(g.config.id+'#')||name.startsWith(g.config.id+'_'));
  const tip=T.clone().addScaledVector(D,.06),wristW=T.clone().sub(toWrist),mid=wristW.clone().lerp(this.shoulder(side,f),.25),rr=g&&g.phase!=='retract'?.010:.022;T.add(this.clear([T,tip,wristW,mid],ignore,rr));
  const tipNow=T.clone().addScaledVector(D,.06),lim=this.reachLimit(f.eye,tipNow,ignore,g&&g.phase!=='retract'?.002:.02);if(lim<1)T.copy(f.eye.clone().lerp(tipNow,Math.max(.2,lim*.94)).addScaledVector(D,-.06));h.T.copy(T);
  const S=this.shoulder(side,f);let W=T.clone().sub(toWrist);const SW=W.clone().sub(S);let dist=SW.length();h.reachDist=dist;h.reachable=dist<=REACH+.01;if(dist>REACH){W=S.clone().addScaledVector(SW.normalize(),REACH);dist=REACH;}
  const dir=W.clone().sub(S).normalize(),pole=f.up.clone().multiplyScalar(-1).addScaledVector(f.right,arm.armSide*.55).addScaledVector(f.fwd,-.30).normalize(),perp=pole.addScaledVector(dir,-pole.dot(dir)).normalize();
  const cosA=THREE.MathUtils.clamp((UPPER*UPPER+dist*dist-FORE*FORE)/(2*UPPER*dist),-1,1),E=S.clone().addScaledVector(dir,UPPER*cosA).addScaledVector(perp,UPPER*Math.sqrt(1-cosA*cosA));
  h.W=W;h.E=E;h.S=S;
  // World -> rig (camera) space and bone rotations.
  const inv=f.q.clone().invert(),toLocal=p=>p.clone().sub(f.eye).applyQuaternion(inv),Sl=toLocal(S),El=toLocal(E),Wl=toLocal(W),qH=inv.clone().multiply(qHand);
  const zRef=V(0,0,1).applyQuaternion(qH),q0=aim(El.clone().sub(Sl),toLocal(S.clone().add(pole)).sub(Sl)),q1=aim(Wl.clone().sub(El),zRef);
  arm.shoulder.position.copy(Sl);arm.shoulder.quaternion.copy(q0);arm.elbow.quaternion.copy(q0.clone().invert().multiply(q1));arm.wrist.quaternion.copy(q1.clone().invert().multiply(qH));
  const a=HAND_POSES[h.curlFrom]||HAND_POSES.relaxed,b=HAND_POSES[h.curl]||HAND_POSES.relaxed,k=ease(h.curlT);
  arm.fingers.forEach((chain,i)=>chain.forEach((bone,j)=>{bone.rotation.set(-(a.f[i][j]+(b.f[i][j]-a.f[i][j])*k),0,0);}));
  const tf=a.t[0]+(b.t[0]-a.t[0])*k,ts=a.t[1]+(b.t[1]-a.t[1])*k;arm.thumb[0].quaternion.copy(arm.thumbRest).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(-tf*.45,0,s*ts*.5)));arm.thumb[1].rotation.set(-tf*.6,0,0);arm.thumb[2].rotation.set(-tf*.5,0,0);
 }
 holding(key){return !!this.gesture&&this.gesture.key===key&&['contact','drive'].includes(this.gesture.phase);}
 gripPoint(side='right'){const h=this.hands[side];return h.T?h.T.clone():null;}
 getState(){const g=this.gesture;return {gesture:g?{key:g.key,phase:g.phase,side:g.side,mode:g.mode}:null,crouch:this.crouch,assist:this.assist?{...this.assist}:null};}
 dispose(){for(const a of Object.values(this.arms)){a.mesh.geometry.dispose();a.mesh.material.dispose();}this.group.removeFromParent();}
}
