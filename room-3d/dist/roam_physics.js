// Inexpensive 2D circle against simplified rectangles; units are metres.
// 0.16 m: half of a ~0.42 m shoulder width with the shoulders slightly turned, so a
// 0.50-0.60 m passage leaves 9-14 cm each side and a 0.35 m squeeze is still possible.
export const PLAYER_RADIUS=.16;
export const PLAYER_HEIGHT=1.75;
// Walls/door leaves come from the exact structural parts. Furniture uses the simplified
// collisionProxy boxes declared in the interaction configuration ({min:[x,y,z],max:[x,y,z]}),
// never the visual bounding box. Without configs the v1 category envelopes are used.
export function createCollisionWorld(spec,configs){
 const boxes=[],groups=new Map(),proxies=(configs||[]).flatMap(c=>(c.collisionProxy||[]).map((p,i)=>({minX:p.min[0],minY:p.min[1],minZ:p.min[2],maxX:p.max[0],maxY:p.max[1],maxZ:p.max[2],name:c.id+'_proxy'+(p.name?'_'+p.name:i),objects:p.objects||c.object||[]})));
 const category=name=>['Bed_','Wardrobe_','Sofa_','Desk_','Coffee_','Chair_','Kitchen_cabinet','Kitchen_counter','Nightstand','Vanity','Toilet_'].find(p=>name.startsWith(p));
 function bounds(n){const [x,z,y]=n.position,[a,b,c]=n.size;const angle=n.rotation[2]||0;const sphere=n.shape==='sphere';const hx=(sphere?a:a/2),hz=(sphere?b:b/2);return {minX:x-Math.abs(Math.cos(angle))*hx-Math.abs(Math.sin(angle))*hz,maxX:x+Math.abs(Math.cos(angle))*hx+Math.abs(Math.sin(angle))*hz,minZ:z-Math.abs(Math.sin(angle))*hx-Math.abs(Math.cos(angle))*hz,maxZ:z+Math.abs(Math.sin(angle))*hx+Math.abs(Math.cos(angle))*hz,minY:y-(sphere?c:c/2),maxY:y+(sphere?c:c/2),name:n.name};}
 for(const n of spec.nodes){const b=bounds(n);if((n.wall||n.name==='Bath_slider_glass')&&b.minY<PLAYER_HEIGHT&&b.maxY>.12)boxes.push(b);
  if(proxies.length)continue;const key=n.layer==='furniture'&&category(n.name);if(!key||b.minY>PLAYER_HEIGHT)continue;
  if(!groups.has(key))groups.set(key,{...b,name:key});else{const g=groups.get(key);for(const k of ['X','Y','Z']){g['min'+k]=Math.min(g['min'+k],b['min'+k]);g['max'+k]=Math.max(g['max'+k],b['max'+k]);}}
 }
 boxes.push(...groups.values(),...proxies);return {width:spec.derived.width,depth:spec.derived.total_depth,boxes};
}
export function isWalkable(world,x,z,radius=PLAYER_RADIUS){
 if(x<radius||z<radius||x>world.width-radius||z>world.depth-radius)return false;
 return !world.boxes.some(b=>{const dx=x-Math.max(b.minX,Math.min(x,b.maxX)),dz=z-Math.max(b.minZ,Math.min(z,b.maxZ));return dx*dx+dz*dz<radius*radius-1e-9;});
}
export function moveWithCollision(world,position,dx,dz,radius=PLAYER_RADIUS){
 const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.04));let x=position.x,z=position.z;
 for(let i=0;i<steps;i++){const sx=dx/steps,sz=dz/steps,nx=x+sx,nz=z+sz;if(isWalkable(world,nx,nz,radius)){x=nx;z=nz;continue;}
  const ox=x,oz=z;if(isWalkable(world,nx,z,radius))x=nx;if(isWalkable(world,x,nz,radius))z=nz;
  // Corner slide: when the main axis is stopped by a box corner, nudge sideways (at most
  // half the step) toward the free side so the player rounds corners into narrow gaps.
  if(x===ox&&z===oz){const len=Math.hypot(sx,sz);if(len<1e-6)continue;const px=-sz/len,pz=sx/len;slide:for(const k of [1,-1])for(const f of [.35,.7]){const tx=ox+sx*.5+px*k*len*f,tz=oz+sz*.5+pz*k*len*f;if(isWalkable(world,tx,tz,radius)){x=tx;z=tz;break slide;}}}
 }
 return {x,z};
}
export function cameraFraction(world,start,end){
 let fraction=1;for(const b of world.boxes){let lo=0,hi=1;for(const axis of ['X','Y','Z']){const k=axis.toLowerCase(),d=end[k]-start[k],min=b['min'+axis]-.06,max=b['max'+axis]+.06;
   if(Math.abs(d)<1e-8){if(start[k]<min||start[k]>max){hi=-1;break;}}else{const a=(min-start[k])/d,c=(max-start[k])/d;lo=Math.max(lo,Math.min(a,c));hi=Math.min(hi,Math.max(a,c));}}
  if(lo<=hi&&hi>=0&&lo>=0&&lo<fraction)fraction=Math.max(.08,lo-.03);
 }return fraction;
}
export class Walker {
 constructor(world,spawn){this.world=world;this.spawn={...spawn};this.position={...spawn};this.velocity={x:0,z:0};this.facing=0;this.travel=0;}
 reset(){this.position={...this.spawn};this.velocity={x:0,z:0};this.facing=0;this.travel=0;this.speed=0;}
 update(dt,input,yaw){dt=Math.min(.05,Math.max(0,dt));const inputLength=Math.hypot(input.x,input.y),dead=.08,scale=inputLength>dead?Math.min(1,(inputLength-dead)/(1-dead))/inputLength:0,forward=-input.y*scale;let dx=Math.cos(yaw)*input.x*scale-Math.sin(yaw)*forward,dz=-Math.sin(yaw)*input.x*scale-Math.cos(yaw)*forward;const length=Math.hypot(dx,dz);const a=1-Math.exp(-dt*(length>.001?8:10));this.velocity.x+=(dx*1.10-this.velocity.x)*a;this.velocity.z+=(dz*1.10-this.velocity.z)*a;
  if(length===0&&Math.hypot(this.velocity.x,this.velocity.z)<.001)this.velocity={x:0,z:0};
  const next=moveWithCollision(this.world,this.position,this.velocity.x*dt,this.velocity.z*dt),moved=Math.hypot(next.x-this.position.x,next.z-this.position.z);if(moved>.00005){const desired=Math.atan2(next.x-this.position.x,next.z-this.position.z),difference=Math.atan2(Math.sin(desired-this.facing),Math.cos(desired-this.facing));this.facing+=difference*(1-Math.exp(-dt*14));}this.position=next;this.travel+=moved;this.speed=moved/dt||0;return this.speed;
 }
}
