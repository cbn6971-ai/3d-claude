import * as THREE from 'three';
import {isWalkable,moveWithCollision,PLAYER_RADIUS} from './roam_physics.js';
export const EYE_HEIGHT=1.62;
const angleDelta=(a,b)=>Math.atan2(Math.sin(b-a),Math.cos(b-a));
const v=a=>new THREE.Vector3(...a);
export function findFloorRoute(world,start,end){
 if(!isWalkable(world,start.x,start.z)||!isWalkable(world,end.x,end.z))return null;
 const clear=(a,b)=>{const p=moveWithCollision(world,a,b.x-a.x,b.z-a.z);return Math.hypot(p.x-b.x,p.z-b.z)<.002;};if(clear(start,end))return [{...start},{...end}];
 const cell=.07,nx=Math.ceil(world.width/cell)+1,key=(x,z)=>x+z*nx,position=k=>({x:(k%nx)*cell,z:Math.floor(k/nx)*cell});
 const nearest=p=>{const candidates=[];const x=Math.round(p.x/cell),z=Math.round(p.z/cell);for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){const q=position(key(x+a,z+b));if(isWalkable(world,q.x,q.z)&&clear(p,q))candidates.push(q);}return candidates.sort((a,b)=>Math.hypot(a.x-p.x,a.z-p.z)-Math.hypot(b.x-p.x,b.z-p.z))[0];};
 const first=nearest(start),last=nearest(end);if(!first||!last)return null;const from=key(Math.round(first.x/cell),Math.round(first.z/cell)),goal=key(Math.round(last.x/cell),Math.round(last.z/cell)),queue=[from],parents=new Map([[from,null]]);let head=0;
 while(head<queue.length&&head<15000){const k=queue[head++];if(k===goal)break;const p=position(k);for(const [a,b]of [[1,0],[-1,0],[0,1],[0,-1]]){const x=Math.round(p.x/cell)+a,z=Math.round(p.z/cell)+b;if(x<0||x>=nx||z<0||z*cell>world.depth)continue;const next=key(x,z);if(!parents.has(next)&&isWalkable(world,x*cell,z*cell)){parents.set(next,k);queue.push(next);}}}
 if(!parents.has(goal))return null;const path=[end];for(let k=goal;k!==null;k=parents.get(k))path.push(position(k));path.push(start);path.reverse();const reduced=[path[0]];let i=0;while(i<path.length-1){let j=path.length-1;while(j>i+1&&!clear(path[i],path[j]))j--;reduced.push(path[j]);i=j;}return reduced;
}
// Segment/AABB occlusion is cheap; there is no per-frame high-detail mesh collision.
export function occluded(world,start,end,ignored=[]){for(const b of world.boxes){if(ignored.includes(b.name)||ignored.some(n=>b.name===n+'_motion'||n.startsWith(b.name)))continue;let lo=0,hi=1;for(const axis of ['X','Y','Z']){const k=axis.toLowerCase(),d=end[k]-start[k],min=b['min'+axis],max=b['max'+axis];if(Math.abs(d)<1e-8){if(start[k]<min||start[k]>max){hi=-1;break;}}else{const a=(min-start[k])/d,c=(max-start[k])/d;lo=Math.max(lo,Math.min(a,c));hi=Math.min(hi,Math.max(a,c));}}if(lo<=hi&&lo>.015&&lo<.96)return true;}return false;}
export function cameraClear(world,p,r=.045){
 if(p.x<r||p.z<r||p.x>world.width-r||p.z>world.depth-r)return false;
 return ![...(world.cameraBoxes||[]),...(world.dynamicBoxes||[])].some(b=>{
  const dx=p.x-Math.max(b.minX,Math.min(p.x,b.maxX)),dy=p.y-Math.max(b.minY,Math.min(p.y,b.maxY)),dz=p.z-Math.max(b.minZ,Math.min(p.z,b.maxZ));return dx*dx+dy*dy+dz*dz<r*r;
 });
}
const ease=q=>q*q*q*(q*(q*6-15)+10);
function clearSegment(world,a,b){const steps=Math.max(1,Math.ceil(a.distanceTo(b)/.02));for(let i=0;i<=steps;i++)if(!cameraClear(world,a.clone().lerp(b,i/steps)))return false;return true;}
// Round only small corners whose complete swept path is clear. Straight fallback
// retains configured safe waypoints; no Catmull overshoot into walls or cushions.
function roundPath(world,points){const result=[points[0]];for(let i=1;i<points.length-1;i++){
 const prev=points[i-1],corner=points[i],next=points[i+1],radius=Math.min(.09,prev.distanceTo(corner)*.20,next.distanceTo(corner)*.20),a=corner.clone().lerp(prev,radius/corner.distanceTo(prev)),b=corner.clone().lerp(next,radius/corner.distanceTo(next)),arc=[];
 for(let j=0;j<=8;j++){const q=j/8;arc.push(a.clone().multiplyScalar((1-q)**2).addScaledVector(corner,2*q*(1-q)).addScaledVector(b,q*q));}
 const path=[result[result.length-1],...arc,next];if(path.slice(1).every((p,j)=>clearSegment(world,path[j],p)))result.push(...arc);else result.push(corner);
 }result.push(points[points.length-1]);return result;
}
export class InteractionSystem {
 constructor({configs,adapter,camera,walker,onWake}){Object.assign(this,{configs,adapter,camera,walker,onWake});this.registry=new Map(configs.map(c=>[c.id,c]));this.states=new Map(configs.map(c=>[c.id,{...c.state}]));this.progress=new Map();this.animations=new Map();this.occupied=null;this.motion=null;this.focus=null;this.pendingFocus=null;this.focusDwell=0;this.focusLost=0;this.message='';this.messageUntil=0;this.time=0;this.sleepAmount=0;this.bobAmount=0;this.look={yaw:0,pitch:0};this.lookTarget={...this.look};this.enabled=false;for(const c of configs){const value=c.state.open??c.state.on??0;this.progress.set(c.id,+value);adapter.apply(c.id,+value);}}
 start(){this.enabled=true;this.focus=this.pendingFocus=null;this.focusDwell=this.focusLost=0;this.message='';this.sleepAmount=this.bobAmount=0;this.look={yaw:0,pitch:-.04};this.lookTarget={...this.look};this.camera.position.set(this.walker.position.x,EYE_HEIGHT,this.walker.position.z);this.orient();}
 stop(){this.enabled=false;if(this.occupied)this.states.get(this.occupied.config.id).posture='standing';this.occupied=null;this.motion=null;this.focus=this.pendingFocus=null;this.sleepAmount=this.bobAmount=0;
  // Pause exactly where the leaf is, including its velocity. Re-entry resumes it.
  // Exiting the Viewer must never snap a half-open drawer to an endpoint.
 }
 orient(){this.camera.quaternion.setFromEuler(new THREE.Euler(this.look.pitch,this.look.yaw,0,'YXZ'));}
 turn(dx,dy){if(this.motion)return;let yaw=this.lookTarget.yaw-dx*.0044,pitch=this.lookTarget.pitch-dy*.0031;const p=this.occupied?.pose;if(p){yaw=p.yaw+THREE.MathUtils.clamp(angleDelta(p.yaw,yaw),-p.yawLimit,p.yawLimit);pitch=THREE.MathUtils.clamp(pitch,...p.pitchLimits);}else pitch=THREE.MathUtils.clamp(pitch,-1.18,1.30);this.lookTarget={yaw,pitch};this.onWake();}
 notify(message){this.message=message;this.messageUntil=this.time+2.4;this.onWake();}
 available(config){if(!config)return [];const stance=this.occupied?.config.id===config.id?this.occupied.action.id:'standing';return config.actions.filter(a=>!a.available||a.available.includes(stance)||(a.available.includes('occupied')&&stance!=='standing')).map(a=>({...a,label:a.kind==='toggle'?a.labels[+!!this.states.get(config.id)[a.channel]]:a.label}));}
 candidate(config,point,retain=false){const eye=this.camera.position,target=v(point.position),delta=target.clone().sub(eye),horizontal=Math.hypot(target.x-this.walker.position.x,target.z-this.walker.position.z),distance=delta.length();
  if(horizontal>point.range+(retain ? .10 : 0)||distance>Math.hypot(point.range+(retain ? .10 : 0),1.45))return null;
  const forward=new THREE.Vector3(0,0,-1).applyQuaternion(this.camera.quaternion),alignment=forward.dot(delta.normalize());if(alignment<(retain ? .84 : .90)||occluded(this.adapter.world,eye,target,[config.id,...config.object]))return null;
  return {config,point,score:(1-alignment)*40+distance*.008};
 }
 select(dt=0){if(this.occupied){this.focus={config:this.occupied.config,point:this.occupied.point};return this.focus;}if(this.motion)return this.focus;
  let best=null;for(const config of this.configs)for(const point of config.interactionPoints){const c=this.candidate(config,point);if(c&&(!best||c.score<best.score))best=c;}
  // Explicit math/test selection is immediate; actual frame selection uses dwell.
  if(!dt){this.focus=best;this.pendingFocus=null;return this.focus;}
  const retained=this.focus&&this.candidate(this.focus.config,this.focus.point,true);
  if(retained&&(!best||best.config.id===this.focus.config.id||best.score>retained.score-.35)){this.focusLost=this.focusDwell=0;this.pendingFocus=null;return this.focus;}
  if(best){if(this.pendingFocus?.config.id===best.config.id)this.focusDwell+=dt;else{this.pendingFocus=best;this.focusDwell=dt;}if(this.focusDwell>=(this.focus ? .20 : .12)){this.focus=best;this.focusLost=this.focusDwell=0;this.pendingFocus=null;}}
  else{this.pendingFocus=null;this.focusDwell=0;}
  if(!retained){this.focusLost+=dt;if(this.focusLost>.18)this.focus=null;}else this.focusLost=0;return this.focus;
 }
 execute(actionId,objectId=this.focus?.config.id){const config=this.registry.get(objectId);if(!config||!this.enabled)return false;
  // Hysteresis only stabilizes the hint; it never extends actionable reach or occlusion.
  if(this.focus?.config.id!==objectId||(!this.occupied&&!config.interactionPoints.some(p=>Math.hypot(p.position[0]-this.walker.position.x,p.position[2]-this.walker.position.z)<=p.range&&this.candidate(config,p,true))))return false;
  const action=this.available(config).find(a=>a.id===actionId);if(!action)return false;
  if(action.kind==='release')return this.release();if(this.motion)return false;
  if(action.kind==='toggle'){if(this.occupied)return false;const state=this.states.get(config.id),existing=this.animations.get(config.id),previous=!!state[action.channel],target=+!previous;
   state[action.channel]=!previous;this.animations.set(config.id,{target,velocity:existing?.velocity||0,duration:config.duration??.75,channel:action.channel,safe:existing?.safe??+previous,recovering:false});this.walker.velocity={x:0,z:0};this.onWake();return true;
  }
  if(action.kind==='pose'){if(this.animations.size)return false;const pose=config.cameraPose[action.cameraPose],point=this.focus.point,previous=this.occupied;let path=[],occupation;
   if(!previous){const approach={x:point.approach[0],z:point.approach[1]},floor=findFloorRoute(this.adapter.world,this.walker.position,approach);if(!floor){this.notify('请走到家具前方再使用');return false;}occupation={config,point,action,pose,returnPosition:{...this.walker.position},returnLook:{...this.look},anchor:approach};path=floor.map(p=>[p.x,EYE_HEIGHT,p.z]);}
   else{occupation={...previous,action,pose};path=[this.camera.position.toArray()]; // Sit up through the old clearance waypoint before lying/reclining again.
    if(previous.action.cameraPose!==action.cameraPose)path.push(...[...previous.pose.waypoints].reverse());}
   path.push(...pose.waypoints,pose.position);if(!this.makeMotion(path,{yaw:pose.yaw,pitch:pose.pitch},false,pose.duration)){this.notify('镜头路径被挡住了，请换个位置');return false;}
   this.occupied=occupation;this.states.get(config.id).posture=action.id;this.walker.velocity={x:0,z:0};this.bobAmount=0;this.onWake();return true;
  }return false;
 }
 makeMotion(path,look,exiting,duration){const points=[this.camera.position.clone(),...path.map(v)],cleaned=points.filter((p,i)=>i===0||p.distanceTo(points[i-1])>.001);
  if(cleaned.slice(1).some((p,i)=>!clearSegment(this.adapter.world,cleaned[i],p)))return false;
  const rounded=cleaned.length>2?roundPath(this.adapter.world,cleaned):cleaned,distances=[];let total=0;for(let i=1;i<rounded.length;i++){total+=rounded[i].distanceTo(rounded[i-1]);distances.push(total);}
  this.motion={points:rounded,distances,total,elapsed:0,duration:Math.max(exiting ? .95 : 1.05,duration||0,total/.95),fromLook:{...this.look},toLook:look,exiting};return true;
 }
 release(){if(!this.occupied||this.motion)return false;const o=this.occupied,route=findFloorRoute(this.adapter.world,o.anchor,o.returnPosition);if(!route){this.notify('起身位置被挡住了');return false;}
  // Raise the head above the seat before moving into the aisle, then hand control back.
  const path=[...o.pose.waypoints].reverse();if(!path.length)path.push([this.camera.position.x,EYE_HEIGHT,this.camera.position.z]);
  path.push([o.anchor.x,EYE_HEIGHT,o.anchor.z],...route.map(p=>[p.x,EYE_HEIGHT,p.z]));if(!this.makeMotion(path,o.returnLook,true,o.pose.releaseDuration))return false;this.onWake();return true;
 }
 get locked(){return !!this.occupied||!!this.motion||this.animations.size>0;}
 update(dt,time,movement=false){this.time=time;if(!this.enabled)return false;if(movement&&this.occupied&&!this.motion)this.release();
  for(const [id,a]of [...this.animations]){const old=this.progress.get(id),omega=6.8/a.duration,delta=old-a.target,c=a.velocity+omega*delta,decay=Math.exp(-omega*dt);let p=a.target+(delta+c*dt)*decay,velocity=(a.velocity-omega*c*dt)*decay;
   // Clamp endpoints, retaining momentum on mid-flight reversals; spring is critically damped.
   p=THREE.MathUtils.clamp(p,0,1);if(p===0||p===1)velocity=0;this.adapter.apply(id,p);
   const overlap=this.adapter.world.dynamicBoxes.some(b=>{const pos=this.walker.position,dx=pos.x-Math.max(b.minX,Math.min(pos.x,b.maxX)),dz=pos.z-Math.max(b.minZ,Math.min(pos.z,b.maxZ));return b.name.startsWith(id+'_')&&dx*dx+dz*dz<PLAYER_RADIUS*PLAYER_RADIUS-.00001;});
   if(overlap){this.adapter.apply(id,old);if(a.recovering){this.animations.delete(id);this.states.get(id)[a.channel]=old>=.5;}else{a.target=a.safe;a.velocity=0;a.recovering=true;this.states.get(id)[a.channel]=!!a.safe;this.notify('被挡住了，退后一点再操作');}continue;}
   this.progress.set(id,p);a.velocity=velocity;if(Math.abs(p-a.target)<.0003&&Math.abs(velocity)<.003){this.progress.set(id,a.target);this.adapter.apply(id,a.target);this.animations.delete(id);}
  }
  if(this.motion){const m=this.motion;m.elapsed+=dt;const q=Math.min(1,m.elapsed/m.duration),travel=ease(q)*m.total;let i=0;while(i<m.distances.length-1&&travel>m.distances[i])i++;if(m.distances.length){const before=i?m.distances[i-1]:0,length=m.distances[i]-before;this.camera.position.lerpVectors(m.points[i],m.points[i+1],length?(travel-before)/length:1);}
   this.look={yaw:m.fromLook.yaw+angleDelta(m.fromLook.yaw,m.toLook.yaw)*ease(q),pitch:m.fromLook.pitch+(m.toLook.pitch-m.fromLook.pitch)*ease(q)};this.lookTarget={...this.look};
   if(q===1){if(m.exiting){this.walker.position={...this.occupied.returnPosition};this.walker.velocity={x:0,z:0};this.states.get(this.occupied.config.id).posture='standing';this.occupied=null;}this.motion=null;}
  }else{
   const alpha=1-Math.exp(-dt*22);this.look.yaw+=angleDelta(this.look.yaw,this.lookTarget.yaw)*alpha;this.look.pitch+=(this.lookTarget.pitch-this.look.pitch)*alpha;
   if(Math.abs(angleDelta(this.look.yaw,this.lookTarget.yaw))<.00005)this.look.yaw=this.lookTarget.yaw;if(Math.abs(this.look.pitch-this.lookTarget.pitch)<.00005)this.look.pitch=this.lookTarget.pitch;
   if(!this.occupied){const target=this.locked?0:Math.min(1,(this.walker.speed||0)/1.10)*.003;this.bobAmount+=(target-this.bobAmount)*(1-Math.exp(-dt*9));if(Math.abs(this.bobAmount-target)<.00002)this.bobAmount=target;const p=new THREE.Vector3(this.walker.position.x,EYE_HEIGHT+Math.sin(this.walker.travel*12)*this.bobAmount,this.walker.position.z);if(cameraClear(this.adapter.world,p))this.camera.position.copy(p);}
  }
  this.orient();const sleep=this.occupied?.action.sleep&&!this.motion?1:0,alpha=1-Math.exp(-dt*6);this.sleepAmount+=(sleep-this.sleepAmount)*alpha;if(Math.abs(this.sleepAmount-sleep)<.002)this.sleepAmount=sleep;
  if(this.message&&time>this.messageUntil)this.message='';this.select(dt);const effects=this.adapter.animateEffects(time*1000);return !!this.motion||this.animations.size>0||effects||Math.abs(this.sleepAmount-sleep)>.002||!!this.message||!!this.pendingFocus||this.focusLost>0&&this.focusLost<.19||Math.abs(angleDelta(this.look.yaw,this.lookTarget.yaw))>.00005||Math.abs(this.look.pitch-this.lookTarget.pitch)>.00005||this.bobAmount>.00002;
 }
 getState(){return {firstPerson:true,stance:this.occupied?.action.id||'standing',object:this.occupied?.config.id||null,movementLocked:this.locked,movingCamera:!!this.motion,focus:this.focus?.config.id||null,states:Object.fromEntries(this.states),animations:this.animations.size,camera:this.camera.position.toArray(),eyeHeight:EYE_HEIGHT,sleepAmount:this.sleepAmount};}
}
