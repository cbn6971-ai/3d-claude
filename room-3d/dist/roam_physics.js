// Inexpensive 2D circle against simplified rectangles; units are metres.
export const PLAYER_RADIUS=.19;
export const PLAYER_HEIGHT=1.75;
export function createCollisionWorld(spec){
 const boxes=[],groups=new Map();
 const category=name=>['Bed_','Wardrobe_','Sofa_','Desk_','Coffee_','Chair_','Kitchen_cabinet','Kitchen_counter','Nightstand','Vanity','Toilet_'].find(p=>name.startsWith(p));
 function bounds(n){const [x,z,y]=n.position,[a,b,c]=n.size;const angle=n.rotation[2]||0;const sphere=n.shape==='sphere';const hx=(sphere?a:a/2),hz=(sphere?b:b/2);return {minX:x-Math.abs(Math.cos(angle))*hx-Math.abs(Math.sin(angle))*hz,maxX:x+Math.abs(Math.cos(angle))*hx+Math.abs(Math.sin(angle))*hz,minZ:z-Math.abs(Math.sin(angle))*hx-Math.abs(Math.cos(angle))*hz,maxZ:z+Math.abs(Math.sin(angle))*hx+Math.abs(Math.cos(angle))*hz,minY:y-(sphere?c:c/2),maxY:y+(sphere?c:c/2),name:n.name};}
 for(const n of spec.nodes){const b=bounds(n);if((n.wall||n.name==='Bath_slider_glass')&&b.minY<PLAYER_HEIGHT&&b.maxY>.12)boxes.push(b);
  const key=n.layer==='furniture'&&category(n.name);if(!key||b.minY>PLAYER_HEIGHT)continue;
  if(!groups.has(key))groups.set(key,{...b,name:key});else{const g=groups.get(key);for(const k of ['X','Y','Z']){g['min'+k]=Math.min(g['min'+k],b['min'+k]);g['max'+k]=Math.max(g['max'+k],b['max'+k]);}}
 }
 boxes.push(...groups.values());return {width:spec.derived.width,depth:spec.derived.total_depth,boxes};
}
export function isWalkable(world,x,z,radius=PLAYER_RADIUS){
 if(x<radius||z<radius||x>world.width-radius||z>world.depth-radius)return false;
 return !world.boxes.some(b=>{const dx=x-Math.max(b.minX,Math.min(x,b.maxX)),dz=z-Math.max(b.minZ,Math.min(z,b.maxZ));return dx*dx+dz*dz<radius*radius-1e-9;});
}
export function moveWithCollision(world,position,dx,dz,radius=PLAYER_RADIUS){
 const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.04));let x=position.x,z=position.z;
 for(let i=0;i<steps;i++){const nx=x+dx/steps,nz=z+dz/steps;if(isWalkable(world,nx,nz,radius)){x=nx;z=nz;}else{if(isWalkable(world,nx,z,radius))x=nx;if(isWalkable(world,x,nz,radius))z=nz;}}
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
