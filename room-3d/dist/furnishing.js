// Round-two furnishing: visual geometry, materials and small decor for the existing
// semantic parts. Every scene.json node keeps its name, position and size; only the
// shape drawn inside that envelope changes, so colliders, interaction points and
// camera poses (all derived from the envelopes) stay where they were.
import * as THREE from 'three';
import {mergeGeometries,mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
const TAU=Math.PI*2;

// ---------------------------------------------------------------- noise / textures
function hash(x,y,s){let h=Math.imul(x|0,374761393)+Math.imul(y|0,668265263)+Math.imul(s|0,1442695041);h=Math.imul(h^(h>>>13),1274126177);return ((h^(h>>>16))>>>0)/4294967295;}
function vnoise(x,y,s=0,px=0,py=0){const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi,wx=a=>px?((a%px)+px)%px:a,wy=a=>py?((a%py)+py)%py:a,u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);
 const a=hash(wx(xi),wy(yi),s),b=hash(wx(xi+1),wy(yi),s),c=hash(wx(xi),wy(yi+1),s),d=hash(wx(xi+1),wy(yi+1),s);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;}
// Tileable fbm over the unit square; fx/fy are integer lattice frequencies.
function fbm(u,v,s,fx=4,fy=4,oct=4){let t=0,amp=.5,norm=0;for(let i=0;i<oct;i++){const k=1<<i;t+=amp*vnoise(u*fx*k,v*fy*k,s+i,fx*k,fy*k);norm+=amp;amp*=.5;}return t/norm;}
// Non-periodic world noise for wrinkles and leaves.
function wnoise(x,y,s=0,oct=3){let t=0,amp=.5,f=1,norm=0;for(let i=0;i<oct;i++){t+=amp*vnoise(x*f,y*f,s+i*7);norm+=amp;amp*=.5;f*=2.03;}return t/norm*2-1;}
const smooth=(a,b,x)=>{const t=Math.min(1,Math.max(0,(x-a)/(b-a)));return t*t*(3-2*t);};
const fract=x=>x-Math.floor(x);

const textureCache=new Map();
function dataTexture(key,size,fn,{srgb=true}={}){
 if(textureCache.has(key))return textureCache.get(key);
 const data=new Uint8Array(size*size*4);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){const c=fn((x+.5)/size,(y+.5)/size),i=(y*size+x)*4;for(let k=0;k<3;k++)data[i+k]=Math.max(0,Math.min(255,Math.round((c[k]??c[0])*255)));data[i+3]=255;}
 const t=new THREE.DataTexture(data,size,size);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=srgb?THREE.SRGBColorSpace:THREE.NoColorSpace;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;t.anisotropy=4;t.needsUpdate=true;
 textureCache.set(key,t);return t;
}
const gray=v=>[v,v,v];
const TEXTURES={
 // Matt emulsion: almost flat, just enough variation to stop walls reading as CG.
 plaster:()=>dataTexture('plaster',128,(u,v)=>gray(.975+.025*fbm(u,v,3,8,8,3))),
 // Light oak: grain runs along texture u.
 oak:()=>dataTexture('oak',256,(u,v)=>{const warp=fbm(u,v,11,2,6,2),ring=.5+.5*Math.sin(TAU*(v*14+warp*2.4)),pore=vnoise(u*64,v*4,21,64,4),line=Math.pow(ring,7);const k=.93+.07*(1-line)-.05*pore*line-.03*vnoise(u*3,v*3,5,3,3);return [k,k*.985,k*.962];}),
 // Fine plain weave for upholstery and pillowcases.
 weave:()=>dataTexture('weave',128,(u,v)=>{const w=Math.sin(TAU*u*48)*Math.sin(TAU*v*48),slub=fbm(u,v,31,16,4,2);return gray(.955+.025*w+.04*(slub-.5));}),
 // Seersucker-like stripe bedding: soft blue-grey stripes on white, puckered.
 seersucker:()=>dataTexture('seersucker',256,(u,v)=>{const pos=fract(v*14),stripe=smooth(.10,.16,pos)*(1-smooth(.40,.46,pos)),pucker=fbm(u,v,41,24,14,2)-.5;const base=.985+.05*pucker;return [base-.24*stripe,base-.18*stripe,base-.11*stripe];}),
 // Chunky knit: V stitches in columns.
 knit:()=>dataTexture('knit',256,(u,v)=>{const cu=fract(u*18),cv=fract(v*12+Math.abs(cu-.5)*.9),rib=Math.pow(Math.sin(Math.PI*cv),.55)*(.75+.25*Math.sin(Math.PI*cu)),gap=smooth(.44,.5,Math.abs(cu-.5));return gray(.80+.20*rib-.08*gap+.04*(fbm(u,v,51,8,8,2)-.5));}),
 // Small gingham check for one accent cushion.
 check:()=>dataTexture('check',128,(u,v)=>{const a=fract(u*8)<.5,b=fract(v*8)<.5,k=a&&b?.62:a||b?.80:1;const w=.97+.03*Math.sin(TAU*u*64)*Math.sin(TAU*v*64);return gray(k*w);}),
 // Low tufted rug.
 rug:()=>dataTexture('rug',128,(u,v)=>gray(.86+.14*fbm(u,v,61,32,32,3))),
 // Light grey porcelain with faint veining (floor stays the confirmed grey tile).
 marble:()=>dataTexture('marble',256,(u,v)=>{const w=fbm(u,v,71,3,3,3),vein=Math.pow(1-Math.abs(Math.sin(TAU*(u*2+v+w*1.8))),18),cloud=fbm(u,v,81,6,6,2);const k=.99-.012*vein-.05*cloud;return [k,k*1.002,k*1.008];}),
 // Linen box / curtain slub.
 linen:()=>dataTexture('linen',128,(u,v)=>{const slub=fbm(u,v,91,4,48,3),w=Math.sin(TAU*u*56)*Math.sin(TAU*v*56);return gray(.94+.05*slub+.015*w);}),
 // Soft contact shadow (alpha in all channels; used as alphaMap).
 shadow:()=>dataTexture('shadow',64,(u,v)=>{const x=Math.abs(u*2-1),y=Math.abs(v*2-1),d=Math.pow(Math.pow(x,4)+Math.pow(y,4),.25);return gray(Math.pow(1-smooth(.35,1,d),1.6));},{srgb:false}),
 art:()=>artAtlas()
};
// One atlas for printed things: landscape print, clock dial and three postcards.
function artAtlas(){return dataTexture('art',512,(u,v)=>{
 if(u<.5&&v<.5){const x=u*2,y=v*2,border=x<.09||x>.91||y<.09||y>.91;if(border)return [.965,.958,.945];
  const sx=(x-.09)/.82,sy=(y-.09)/.82,h1=.42+.05*Math.sin(sx*5.2+1.3)+.03*Math.sin(sx*13),h2=.30+.04*Math.sin(sx*4.1+3.1)+.02*Math.sin(sx*17+1),h3=.18+.03*Math.sin(sx*3.3+.4);
  const g=fbm(sx,sy,101,6,6,2)*.03;let c=[.93-.06*sy,.90-.07*sy,.85-.08*sy];
  if(sy<h1)c=[.80+g,.74+g,.66+g];if(sy<h2)c=[.62+g,.55+g,.47+g];if(sy<h3)c=[.47+g,.41+g,.35+g];return c;}
 if(u>=.5&&v<.5){const x=u*4-3,y=v*4-1,r=Math.hypot(x,y);if(r>.97)return [.92,.92,.91];
  const a=Math.atan2(x,y),tick=Math.abs(fract(a/TAU*12+.5)-.5)<.012&&r>.80&&r<.92,hour=Math.abs(a-(-1.9))<.03&&r<.48,minute=Math.abs(a-.9)<.022&&r<.72;return gray(tick||hour||minute?.18:.97);}
 const card=Math.floor(u*4),x=fract(u*4),y=(v-.5)*2;if(x<.04||x>.96||y<.03||y>.97)return gray(.94);
 if(card===0){const fish=Math.pow((x-.5)/.10,2)+Math.pow((y-.52)/.30,2)<1,tail=y<.26&&y>.12&&Math.abs(x-.5)<(.26-y)*.8;return fish||tail?[.36,.46,.58]:gray(.985);}
 if(card===1){const whale=Math.pow((x-.48)/.32,2)+Math.pow((y-.52)/.12,2)<1,eye=Math.hypot(x-.68,y-.55)<.02;return eye?gray(.15):whale?[.55,.68,.80]:gray(.985);}
 if(card===2){const line=[.72,.62,.52,.42].some(t=>Math.abs(y-t)<.012&&x>.18&&x<.82-(t*.3)),box=Math.abs(y-.25)<.09&&Math.abs(x-.5)<.16&&(Math.abs(y-.25)>.075||Math.abs(x-.5)>.145);return line||box?gray(.30):gray(.985);}
 return [.96,.95,.93];
});}

// ---------------------------------------------------------------- materials
// color is sRGB; roughness separates painted wood, fabric, tile, metal and glass.
const MATERIALS={
 wall:{color:'#edece8',roughness:.95,map:['plaster',1.6]},
 white:{color:'#efeeea',roughness:.52},
 wood:{color:'#d9c9ae',roughness:.58,map:['oak',.9],bump:.6},
 gray:{color:'#a7acae',roughness:.95,map:['weave',.16],bump:.5},
 oat:{color:'#e3ddd2',roughness:.97,map:['weave',.14],bump:.6},
 tile:{color:'#b8bbbf',roughness:.26,map:['marble',1.3],env:.9},
 dark:{color:'#25282c',roughness:.42,metalness:.35},
 glass:{color:'#e3ecef',roughness:.04,opacity:.16,env:1.4},
 green:{color:'#5c7a53',roughness:.62,side:'double'},
 metal:{color:'#cfd2d5',roughness:.22,metalness:.92,env:1.2},
 grout:{color:'#b3b6ba',roughness:.85},
 stripe:{color:'#e0e2e4',roughness:.95},
 frosted:{color:'#cdd6d7',roughness:.3,opacity:.82},
 sheer:{color:'#f6f5f1',roughness:.95,opacity:.42,side:'double',map:['linen',.25]},
 linen:{color:'#f4f4f2',roughness:.96,map:['seersucker',.22],bump:.7,side:'double'},
 pillow:{color:'#f3f2ee',roughness:.95,map:['weave',.12],bump:.4},
 knit:{color:'#d9d2c7',roughness:1,map:['knit',.30],bump:1.2,side:'double'},
 check:{color:'#d2c8b9',roughness:.95,map:['check',.20]},
 curtain:{color:'#ebe5d9',roughness:.97,map:['linen',.35],bump:.5,side:'double'},
 rug:{color:'#e9e1d0',roughness:1,map:['rug',.35],bump:1.4},
 ceramic:{color:'#f3f2ee',roughness:.22,env:.8},
 art:{color:'#ffffff',roughness:.85,map:['art',0]},
 shadow:{shadow:true}
};
function makeTexture(name,size){const base=TEXTURES[name]();if(!size)return base;const t=base.clone();t.repeat.set(1/size,1/size);t.needsUpdate=true;return t;}
const mapCache=new Map();
function sharedMap(name,size){const k=name+':'+size;if(!mapCache.has(k))mapCache.set(k,makeTexture(name,size));return mapCache.get(k);}
export function createStyledMaterial(key){
 const m=MATERIALS[key]||{color:'#ff00ff',roughness:.5};
 if(m.shadow){const material=new THREE.MeshBasicMaterial({color:0x1d1f22,transparent:true,opacity:.62,alphaMap:sharedMap('shadow',0),depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2});material.forceSinglePass=true;return material;}
 const transparent=m.opacity!==undefined&&m.opacity<1;
 const material=new THREE.MeshStandardMaterial({color:m.color,roughness:m.roughness,metalness:m.metalness||0,transparent,opacity:m.opacity??1,side:m.side==='double'||transparent?THREE.DoubleSide:THREE.FrontSide,depthWrite:!transparent||key==='frosted',envMapIntensity:m.env??.55});
 if(m.map){material.map=sharedMap(...m.map);if(m.bump){material.bumpMap=material.map;material.bumpScale=m.bump;}}
 material.forceSinglePass=true;material.userData.styleKey=key;return material;
}

// ---------------------------------------------------------------- geometry helpers
function indexed(g){if(!g.index){const n=g.attributes.position.count,a=new (n>65535?Uint32Array:Uint16Array)(n);for(let i=0;i<n;i++)a[i]=i;g.setIndex(new THREE.BufferAttribute(a,1));}return g;}
function clean(g){indexed(g);for(const k of Object.keys(g.attributes))if(k!=='position'&&k!=='normal')g.deleteAttribute(k);if(!g.attributes.normal)g.computeVertexNormals();g.clearGroups();g.morphAttributes={};return g;}
function combine(list){const gs=list.flat().filter(Boolean).map(clean);if(!gs.length)return null;if(gs.length===1)return gs[0];const m=mergeGeometries(gs,false);gs.forEach(g=>g.dispose());return m;}
function place(g,x=0,y=0,z=0,rx=0,ry=0,rz=0,sx=1,sy=1,sz=1){g.applyMatrix4(new THREE.Matrix4().compose(V(x,y,z),new THREE.Quaternion().setFromEuler(new THREE.Euler(rx,ry,rz)),V(sx,sy,sz)));return g;}
function rbox(w,h,d,r=.01,seg=2){r=Math.min(r,w/2-1e-4,h/2-1e-4,d/2-1e-4);return r<.0012?new THREE.BoxGeometry(w,h,d):new RoundedBoxGeometry(w,h,d,seg,r);}
function smoothed(g){for(const k of Object.keys(g.attributes))if(k!=='position')g.deleteAttribute(k);const m=mergeVertices(g,1e-6);g.dispose();m.computeVertexNormals();return m;}
// Soft cushion: a rounded cube (uniform vertex spacing, no faceted corners) whose
// edges are pinched like a sewn seam. r = corner roundness 0..1 of the half-size.
function blob(w,h,d,{r=.5,pinch=.4,seg=14}={}){
 const g=new THREE.BoxGeometry(2,2,2,seg,Math.max(4,seg/2|0),seg),p=g.attributes.position,c=V(),inner=V();
 for(let i=0;i<p.count;i++){c.fromBufferAttribute(p,i);inner.set(...['x','y','z'].map(k=>Math.max(-(1-r),Math.min(1-r,c[k]))));const dir=c.clone().sub(inner);const q=inner.add(dir.lengthSq()>1e-12?dir.normalize().multiplyScalar(r):dir);
  const edge=Math.max(Math.abs(q.x),Math.abs(q.z));q.y*=1-pinch*Math.pow(edge,3);p.setXYZ(i,q.x*w/2,q.y*h/2,q.z*d/2);}
 return smoothed(g);
}
function lathe(points,seg=24){return new THREE.LatheGeometry(points.map(([r,y])=>new THREE.Vector2(Math.max(r,0),y)),seg);}
function cyl(r1,r2,h,seg=20){return new THREE.CylinderGeometry(r1,r2,h,seg);}
// Cylinder between two world points.
function bar(a,b,r,seg=10,r2=r){const d=b.clone().sub(a),g=cyl(r2,r,d.length(),seg);g.applyMatrix4(new THREE.Matrix4().compose(a.clone().add(b).multiplyScalar(.5),new THREE.Quaternion().setFromUnitVectors(V(0,1,0),d.normalize()),V(1,1,1)));return g;}
function ball(c,r,seg=12){return place(new THREE.SphereGeometry(r,seg,Math.max(6,seg/2|0)),c.x,c.y,c.z);}
// Grid surface from a function (i/nu, j/nv) -> Vector3.
function surface(nu,nv,fn){const pos=[],idx=[];for(let j=0;j<=nv;j++)for(let i=0;i<=nu;i++){const p=fn(i/nu,j/nv);pos.push(p.x,p.y,p.z);}
 for(let j=0;j<nv;j++)for(let i=0;i<nu;i++){const a=j*(nu+1)+i,b=a+1,c=a+nu+1,d=c+1;idx.push(a,c,b,b,c,d);}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();return g;}
// Fold an unfolded cloth coordinate over a rounded edge: returns [lateral, drop].
function fold(c,half,r){const a=Math.abs(c);if(a<=half)return [c,0];const e=a-half,arc=Math.PI*r/2,s=Math.sign(c);if(e<arc){const t=e/r;return [s*(half+r*Math.sin(t)),r*(1-Math.cos(t))];}return [s*(half+r+(e-arc)*.06),r+(e-arc)];}
function leaf(len,wid,curl=.25,seg=5){const s=new THREE.Shape();s.moveTo(0,0);s.quadraticCurveTo(len*.30,wid*.62,len,0);s.quadraticCurveTo(len*.30,-wid*.62,0,0);const g=new THREE.ShapeGeometry(s,seg),p=g.attributes.position;
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i);p.setZ(i,-curl*len*Math.pow(x/len,2)+.35*Math.abs(y)*(y/wid)*wid/len);}g.computeVertexNormals();return g;}
// Orient a leaf (+x = tip, +z = face normal) along dir with its face roughly up.
function orient(g,origin,dir,roll=0){const f=dir.clone().normalize();let up=V(0,1,0);if(Math.abs(f.dot(up))>.97)up=V(1,0,0);const n=up.clone().sub(f.clone().multiplyScalar(f.dot(up))).normalize().applyAxisAngle(f,roll),s=n.clone().cross(f);g.applyMatrix4(new THREE.Matrix4().makeBasis(f,s,n).setPosition(origin));return g;}
function rng(seed){let s=seed>>>0||1;return ()=>{s=Math.imul(s^(s>>>15),2246822507)+1013904223>>>0;s^=s>>>13;return (s>>>0)/4294967295;};}
const seedOf=name=>[...name].reduce((a,c)=>Math.imul(a^c.charCodeAt(0),16777619)>>>0,2166136261);

// Basic primitive exactly as the v1 viewer built it (walls, frames, grout ...).
function primitive(n,detail){const [a,b,c]=n.size;if(n.shape==='box')return n.bevel&&detail?rbox(a,c,b,n.bevel,2):new THREE.BoxGeometry(a,c,b);if(n.shape==='cylinder')return cyl(a,a,c,detail?20:12);const g=new THREE.SphereGeometry(1,detail?24:12,detail?14:6);g.scale(a,c,b);return g;}
export function nodeMatrix(n){const [rx,ry,rz]=n.rotation,rotation=new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(-rx,ry,-rz,'XYZ')),convert=new THREE.Matrix4().makeRotationX(-Math.PI/2);
 rotation.premultiply(convert).multiply(convert.clone().invert());rotation.setPosition(n.position[0],n.position[2],n.position[1]);return rotation;}

// ---------------------------------------------------------------- furniture styles
// Local frame: x = node size[0] (room width axis), y = height, z = node size[1] (depth axis).
// Each builder returns local geometry inside its envelope, or {world} for shapes that
// are simpler to author in room coordinates.
const S=(n)=>({x:n.size[0],y:n.size[2],z:n.size[1]});

// Duvet surface shared by the duvet and the throw so the throw always rests on it.
const BED={mattressTop:.46};
function duvetSurface(bed){const top=BED.mattressTop+.043;return (x,z)=>{const cz=(z-bed.z)/(bed.w/2),edge=Math.pow(Math.min(1,Math.abs(cz)),4),puff=.012*(1-edge),rumple=.016*wnoise(x*3.1,z*2.6,7)+.007*wnoise(x*9,z*7,9)+.005*Math.sin((x*1.6+z*4.2)*3.1);return top+puff+rumple*(1-.6*edge);};}
function bedInfo(frame){return {x:frame.position[0],z:frame.position[1],len:frame.size[0],w:frame.size[1]-.04,foot:frame.position[0]-frame.size[0]/2+.03,head:frame.position[0]+frame.size[0]/2};}
function duvetGeometry(bed){
 const heightAt=duvetSurface(bed),half=bed.w/2,r=.04,drop=.17,footDrop=.16,x0=bed.foot,x1=bed.head-.78,zSpan=half+Math.PI*r/2+drop,xSpan=x1-x0+Math.PI*r/2+footDrop;
 return surface(64,48,(i,j)=>{const a=-zSpan+i*2*zSpan,b=-xSpan+j*xSpan;
  const [zz,dropA]=fold(a,half,r);let xx=x1+b,dropB=0;if(xx<x0){const [f,dd]=fold(xx-x1+(x1-x0)/2,(x1-x0)/2,r);xx=f+(x0+x1)/2;dropB=dd;}
  // Turned-down cuff at the head end.
  const cuff=.010*smooth(x1-.30,x1-.25,xx)+.006*smooth(x1-.06,x1,xx);
  const y=heightAt(Math.max(x0,xx),Math.max(-half,Math.min(half,zz))+bed.z)-Math.max(dropA,dropB)-.3*Math.min(dropA,dropB)+cuff;
  const sway=(dropA+dropB)*(.05*wnoise(xx*6,zz*3,13));
  return V(xx+(dropB?-sway:0),y,bed.z+zz+(dropA?Math.sign(zz)*Math.abs(sway):0));});
}
function throwGeometry(bed,n){
 const heightAt=duvetSurface(bed),half=bed.w/2,r=.06,drop=.21,cx=n.position[0],len=n.size[0]*.92,zSpan=half+Math.PI*r/2+drop;
 return surface(18,52,(i,j)=>{const a=-zSpan+j*2*zSpan,xx=cx-len/2+i*len;const [zz,d]=fold(a,half,r);const lip=.004*Math.sin(i*Math.PI);
  return V(xx+d*.08*wnoise(xx*5,zz*2,17),heightAt(xx,Math.max(-half,Math.min(half,zz))+bed.z)+.021+lip-d,bed.z+zz);});
}
function curtainStrip(s,{spacing=.055,amp=.026,bottomFlare=.012,width=spacing,period=spacing,nu=8}={}){
 const h=s.y;return surface(nu,28,(i,j)=>{const x=-width/2+i*width,y=-h/2+.012+j*(h-.012),t=1-j;const a=(amp+bottomFlare*t*t)*(j>.96?.65:1);return V(x,y,a*Math.sin(TAU*(x+width/2)/period));});
}
function panelDoor(s,front){// Wardrobe-style door: slab plus raised frame mouldings on the front face.
 const sign=front==='-x'?-1:1,slab=place(rbox(.02,s.y,s.z,.004),-sign*.0075,0,0),parts=[slab],w=s.z-.12,mx=sign*.0085;
 const frame=(y0,y1)=>{const h=y1-y0,cy=(y0+y1)/2;parts.push(place(rbox(.016,.034,w,.005),mx,y1,0),place(rbox(.016,.034,w,.005),mx,y0,0),place(rbox(.016,h,.034,.005),mx,cy,w/2-.017),place(rbox(.016,h,.034,.005),mx,cy,-w/2+.017));};
 frame(-s.y/2+.08,-s.y/2+.58);frame(-s.y/2+.68,s.y/2-.08);return combine(parts);
}
function frontPanel(r){return (n,s)=>rbox(s.x,s.y,s.z,r,2);}
const rounded=r=>(n,s)=>rbox(s.x,s.y,s.z,r,2);
const carcass=r=>(n,s)=>n.carcass?panelCarcass(s,n.carcass):rbox(s.x,s.y,s.z,r,2);
// Open cabinet carcass built from real boards (back, top, bottom, two sides), open on `front`.
// Used when a body's doors/drawers are separate moving parts, so the opened cabinet has
// visible board thickness and an interior instead of a hollow shell.
function panelCarcass(s,front,inset=0,t=.016){const w=s.x-2*inset,h=s.y-2*inset,d=s.z-2*inset,sign=front[0]==='-'?-1:1,b=(x,y,z,dx,dy,dz)=>place(rbox(dx,dy,dz,.0025,1),x,y,z);
 if(front[1]==='x')return combine([b(-sign*(w/2-t/2),0,0,t,h,d),b(sign*t/2,h/2-t/2,0,w-t,t,d),b(sign*t/2,-h/2+t/2,0,w-t,t,d),b(sign*t/2,0,d/2-t/2,w-t,h-2*t,t),b(sign*t/2,0,-d/2+t/2,w-t,h-2*t,t)]);
 return combine([b(0,0,-sign*(d/2-t/2),w,h,t),b(0,h/2-t/2,sign*t/2,w,t,d-t),b(0,-h/2+t/2,sign*t/2,w,t,d-t),b(w/2-t/2,0,sign*t/2,t,h-2*t,d-t),b(-w/2+t/2,0,sign*t/2,t,h-2*t,d-t)]);}
// Drawer box: bottom, two sides and back; the moving front panel closes the fourth side.
function drawerBox(s,front,t=.012){const sign=front[0]==='-'?-1:1,b=(x,y,z,dx,dy,dz)=>place(rbox(dx,dy,dz,.002,1),x,y,z);
 return combine([b(0,-s.y/2+t/2,0,s.x,t,s.z),b(0,0,s.z/2-t/2,s.x,s.y,t),b(0,0,-s.z/2+t/2,s.x,s.y,t),b(-sign*(s.x/2-t/2),0,0,t,s.y,s.z-2*t),place(rbox(s.x-.02,.003,s.z-2*t-.004,.001),0,-s.y/2+t+.0015,0)]);}

const STYLES=[
 [/_box$/,(n,s)=>drawerBox(s,n.front||'+x')],
 // ------------------------------------------------ bed
 [/^Bed_frame$/,(n,s)=>combine([place(rbox(s.x,s.y-.07,s.z,.022,3),0,.035,0),place(new THREE.BoxGeometry(s.x-.14,.07,s.z-.14),0,-s.y/2+.035,0)])],
 [/^Bed_mattress$/,(n,s)=>rbox(s.x,s.y,s.z,.05,3),{material:'linen'}],
 [/^Bed_headboard$/,(n,s)=>{const hw=s.z/2-.065,shape=new THREE.Shape(),y0=-s.y/2+.24,ye=s.y/2-.15,yc=s.y/2-.07;shape.moveTo(-hw,y0);shape.lineTo(hw,y0);shape.lineTo(hw,ye);shape.quadraticCurveTo(0,yc+(yc-ye),-hw,ye);shape.lineTo(-hw,y0);
  const panel=new THREE.ExtrudeGeometry(shape,{depth:.026,bevelEnabled:true,bevelThickness:.005,bevelSize:.005,bevelSegments:2,curveSegments:24});panel.rotateY(-Math.PI/2);panel.translate(.013,0,0);
  const posts=[-1,1].flatMap(k=>[place(rbox(.056,s.y-.07,.062,.012,2),0,-.035,k*(s.z/2-.031)),place(new THREE.SphereGeometry(.031,14,8),0,s.y/2-.033,k*(s.z/2-.031)),place(rbox(.05,.05,.07,.01),0,s.y/2-.10,k*(s.z/2-.031))]);
  const rail=place(rbox(.045,.06,s.z-.12,.01),0,-s.y/2+.27,0);return combine([panel,rail,...posts]);}],
 [/^Pillow/,(n,s)=>blob(s.x*.97,s.y,s.z*.97,{r:.9,pinch:.28}),{material:'linen'}],
 [/^Bedding$/,(n,s,ctx)=>({world:duvetGeometry(ctx.bed)}),{material:'linen'}],
 [/^Bedding_stripe/,()=>null],
 [/^Cream_throw$/,(n,s,ctx)=>({world:throwGeometry(ctx.bed,n)}),{material:'knit'}],
 [/^(Bed_rug|Living_rug)$/,(n,s)=>rbox(s.x,s.y,s.z,.008,2),{material:'rug'}],
 // ------------------------------------------------ wardrobe
 [/^Wardrobe_body$/,(n,s)=>n.carcass?combine([panelCarcass({x:s.x,y:s.y-.05,z:s.z},n.carcass).translate(0,-.025,0),place(rbox(s.x+.006,.05,s.z+.012,.006),0,s.y/2-.025,0)]):combine([place(rbox(s.x,s.y-.05,s.z,.012,2),0,-.025,0),place(rbox(s.x+.006,.05,s.z+.012,.006),0,s.y/2-.025,0)])],
 [/^Wardrobe_door/,(n,s)=>panelDoor(s,'-x')],
 [/^Wardrobe_handle/,(n,s)=>combine([place(cyl(.0062,.0062,s.y*.95,14),-s.x/2+.0062,0,0),...[-1,1].map(k=>place(cyl(.0045,.0045,s.x-.004,10),0,k*s.y*.36,0,0,0,Math.PI/2))])],
 // ------------------------------------------------ desk + chair
 [/^Desk_top$/,(n,s)=>place(rbox(s.x,.036,s.z,.008,3),0,s.y/2-.018,0),{grain:'z'}],
 [/^Desk_drawers/,carcass(.006)],
 [/^Desk_drawer_front/,(n,s)=>combine([rbox(s.x,s.y,s.z,.0035,2),place(rbox(.012,.012,s.z*.42,.0055,2),s.x/2+.005,s.y/2-.028,0)])],
 [/^Desk_laptop_base$/,(n,s)=>combine([place(rbox(.221,.0125,.313,.0055,2),0,-.009,0),place(rbox(.07,.0012,.105,.0006),.055,-.0022,0)]),{material:'metal'}],
 [/^Desk_laptop_screen$/,(n,s)=>place(rbox(.008,.214,.313,.0035,2),0,-.04,0),{uv:'fit'}],
 [/^Chair_seat$/,(n,s)=>place(blob(s.x*.92,s.y*.78,s.z*.96,{r:0.38,pinch:.3}),-.01,.004,0)],
 [/^Chair_back$/,(n,s)=>{const g=blob(.034,s.y*.95,s.z*.93,{r:0.32,pinch:.05}),p=g.attributes.position;for(let i=0;i<p.count;i++)p.setX(i,p.getX(i)-.034*Math.pow(p.getZ(i)/(s.z*.465),2)+.017);g.computeVertexNormals();return g;}],
 [/^Chair_column$/,(n,s)=>{const h=s.y/2;return lathe([[0,-h],[.036,-h],[.036,-h+.02],[.029,-h+.05],[.029,.03],[.019,.05],[.019,h],[0,h]],22);}],
 [/^Chair_spoke/,(n,s)=>{const g=new THREE.BoxGeometry(s.x,.026,.034,10,1,1),p=g.attributes.position;for(let i=0;i<p.count;i++){const t=(p.getX(i)+s.x/2)/s.x;p.setY(i,p.getY(i)*(1-.25*t)+.016*(1-t)-.006);p.setZ(i,p.getZ(i)*(1-.40*t));}g.computeVertexNormals();return g;}],
 [/^Chair_wheel/,()=>combine([...[-1,1].map(k=>place(cyl(.028,.028,.011,18),0,k*.0075,0)),cyl(.012,.012,.028,10)])],
 // ------------------------------------------------ bedroom misc
 [/^Air_conditioner$/,(n,s)=>combine([rbox(s.x,s.y,s.z,.05,3),place(rbox(.004,.012,s.z-.12,.002),s.x/2,.07,0)])],
 [/^Nightstand$/,(n,s)=>n.carcass?panelCarcass(s,n.carcass,.008):combine([rbox(s.x-.016,s.y-.016,s.z-.016,.003),...[0,1].map(i=>place(rbox(.018,s.y/2-.016,s.z-.025,.003),-s.x/2+.009,(i-.5)*s.y/2,0))])],
 [/^Nightstand_interactive_front/,frontPanel(.003)],
 // ------------------------------------------------ sofa + table
 [/^Sofa_base$/,(n,s)=>rbox(s.x-.03,s.y,s.z-.01,.035,3)],
 [/^Sofa_back$/,(n,s)=>rbox(s.x,s.y,s.z,.07,3)],
 [/^Sofa_arm/,(n,s)=>rbox(s.x,s.y,s.z,.07,3)],
 [/^Sofa_cushion/,(n,s)=>blob(s.x*.985,s.y,s.z*.99,{r:0.30,pinch:.22})],
 [/^Coffee_top$/,rounded(.007)],
 [/^Coffee_leg/,(n,s)=>place(rbox(s.x,s.y-.03,s.z,.005),0,-.015,0)],
 [/^Coffee_cup$/,(n,s)=>{const h=s.y/2;return combine([lathe([[0,-h],[.033,-h],[.036,-h+.004],[.037,h],[.033,h],[.032,-h+.008],[0,-h+.008]],22),place(new THREE.TorusGeometry(.018,.0045,8,16,Math.PI),.036,0,0,0,0,-Math.PI/2)]);},{material:'ceramic'}],
 // ------------------------------------------------ kitchen / bath
 [/^Kitchen_cabinet$/,(n,s)=>n.carcass?panelCarcass({x:s.x,y:s.y,z:s.z-.02},n.carcass).translate(0,0,.01):combine([place(rbox(s.x,s.y,s.z-.02,.004),0,0,.01),...[0,1].map(i=>place(rbox(s.x/2-.014,s.y-.024,.018,.003),(i-.5)*s.x/2,0,-s.z/2+.009))])],
 [/^Kitchen_cabinet_interactive_front/,frontPanel(.003)],
 [/^Kitchen_counter$/,rounded(.004),{material:'ceramic'}],
 [/^Kitchen_sink$/,(n,s)=>combine([place(rbox(s.x,.006,s.z,.03,3),0,s.y/2-.003,0),place(rbox(s.x-.05,.012,s.z-.05,.025,3),0,-.002,0)])],
 [/^Kitchen_hob$/,rounded(.006)],
 [/^Burner/,(n,s)=>combine([place(new THREE.TorusGeometry(.052,.006,6,28),0,0,0,Math.PI/2),cyl(.024,.026,.008,16)])],
 [/^Range_hood$/,(n,s)=>{const sh=new THREE.Shape(),hz=s.z/2,hy=s.y/2;sh.moveTo(-hz,-hy);sh.lineTo(hz,-hy);sh.lineTo(hz,hy);sh.lineTo(-hz+.16,hy);sh.lineTo(-hz,-hy+.05);sh.lineTo(-hz,-hy);const g=new THREE.ExtrudeGeometry(sh,{depth:s.x-.01,bevelEnabled:true,bevelThickness:.005,bevelSize:.005,bevelSegments:1});g.rotateY(-Math.PI/2);g.translate((s.x-.01)/2,0,0);return g;}],
 [/^Vanity$/,(n,s)=>n.carcass?panelCarcass({x:s.x-.02,y:s.y,z:s.z},n.carcass).translate(.01,0,0):combine([place(rbox(s.x-.02,s.y,s.z,.004),.01,0,0),...[0,1].map(i=>place(rbox(.018,s.y-.024,s.z/2-.014,.003),-s.x/2+.009,0,(i-.5)*s.z/2))])],
 [/^Vanity_interactive_front/,frontPanel(.003)],
 [/^Vanity_basin$/,(n,s)=>place(blob(s.x*1.9,s.y*1.6,s.z*1.9,{r:0.85,pinch:0}),0,-.01,0),{material:'ceramic'}],
 [/^Vanity_mirror$/,rounded(.006)],
 // Pedestal bowl: foot on the floor, flared elliptical rim, hollow glazed interior.
 [/^Toilet_bowl$/,(n,s)=>{const g=lathe([[0,-.32],[.60,-.32],[.585,-.27],[.53,-.15],[.57,-.04],[.76,.07],[.92,.15],[.995,.19],[.99,.203],[.93,.207],[.82,.17],[.6,.09],[.36,.03],[.3,.026],[0,.026]],44);g.scale(s.x*.95,1,s.z*.92);return g;},{material:'ceramic'}],
 [/^Toilet_seat$/,(n,s)=>{const sh=new THREE.Shape();sh.absellipse(0,0,s.x/2,s.z/2,0,TAU);const hole=new THREE.Path();hole.absellipse(0,.015,s.x/2-.058,s.z/2-.075,0,TAU,true);sh.holes.push(hole);const g=new THREE.ExtrudeGeometry(sh,{depth:s.y-.008,bevelEnabled:true,bevelThickness:.004,bevelSize:.006,bevelSegments:2,curveSegments:36});g.rotateX(-Math.PI/2);g.translate(0,-s.y/2+.004,0);return g;}],
 [/^Toilet_lid$/,(n,s)=>{const sh=new THREE.Shape();sh.absellipse(0,0,s.x/2-.006,s.z/2-.006,0,TAU);const g=new THREE.ExtrudeGeometry(sh,{depth:s.y-.012,bevelEnabled:true,bevelThickness:.006,bevelSize:.006,bevelSegments:3,curveSegments:40});g.rotateX(-Math.PI/2);g.translate(0,-s.y/2+.006,0);return g;}],
 [/^Kitchen_knob\d$/,(n,s)=>combine([lathe([[0,-s.y/2],[s.x,-s.y/2],[s.x,-s.y/2+.004],[s.x*.9,s.y/2-.002],[s.x*.8,s.y/2],[0,s.y/2]],28),place(rbox(s.x*1.5,.009,.008,.003),0,s.y/2+.002,0),place(rbox(.004,.002,.006,.001),s.x*.62,s.y/2+.007,0)])],
 [/^Range_hood_(filter)$/,(n,s)=>combine([rbox(s.x,s.y,s.z,.001),...Array.from({length:9},(_,i)=>place(new THREE.BoxGeometry(.004,.002,s.z-.03),-s.x/2+.05+i*(s.x-.1)/8,-.0015,0))])],
 [/^Range_hood_(light|led|panel)$/,(n,s)=>rbox(s.x,s.y,s.z,Math.min(s.x,s.y,s.z)*.3,1)],
 [/^Extractor_pipe$/,(n,s)=>place(rbox(.26,s.y,.22,.006,2),0,0,.03),{material:'metal'}],
 [/^Toilet_tank$/,rounded(.04),{material:'ceramic'}],
 [/^Shower_tray$/,rounded(.03),{material:'ceramic'}],
 // ------------------------------------------------ soft furnishing
 [/^Curtain_fold/,(n,s)=>curtainStrip(s),{material:'curtain'}],
 [/^White_sheer_left$/,(n,s)=>curtainStrip({y:s.y},{width:s.x,period:.085,amp:.011,bottomFlare:.004,nu:110})],
 [/^Bed_lamp_base$/,(n,s)=>lathe([[0,-.0125],[.062,-.0125],[.064,-.008],[.05,.0],[.022,.008],[.012,.0125],[0,.0125]],28)],
 [/^Bed_lamp_stem$/,(n,s)=>place(cyl(.0085,.011,.28,14),0,-.01,0)],
 [/^Bed_lamp_shade$/,(n,s)=>lathe([[0,.042],[.045,.038],[.082,.022],[.106,.0],[.117,-.022],[.118,-.031],[.110,-.033],[.06,-.026],[0,-.022]],32)],
 [/^Floor_lamp_base$/,(n,s)=>lathe([[0,-.0125],[.09,-.0125],[.092,-.006],[.085,.008],[.012,.0125],[0,.0125]],28)],
 [/^Floor_lamp_stem$/,(n,s)=>place(cyl(.008,.008,.17,10),0,-.065,0)],
 [/^Floor_lamp_shade$/,(n,s)=>{const pts=[];for(let i=0;i<=36;i++){const a=-Math.PI/2+Math.PI*i/36,rib=1+.018*Math.cos(a*26);pts.push([.133*Math.cos(a)*rib,-.02+.133*Math.sin(a)]);}pts[0][0]=0.012;pts[pts.length-1][0]=.02;return lathe(pts,30);}],
 [/^Desk_lamp_base$/,(n,s,ctx)=>({world:place(lathe([[0,-.01],[.072,-.01],[.074,-.005],[.068,.008],[.02,.011],[0,.011]],28),ctx.deskLamp.base.x,.786,ctx.deskLamp.base.z)})],
 [/^Desk_lamp_stem$/,(n,s,ctx)=>{const L=ctx.deskLamp;return {world:combine([bar(L.base.clone().setY(.80),L.elbow,.0085),bar(L.elbow,L.joint,.0085),ball(L.elbow,.015),ball(L.joint,.014),place(cyl(.012,.012,.03,12),L.base.x,.81,L.base.z)])};}],
 [/^Desk_lamp_shade$/,(n,s,ctx)=>{const L=ctx.deskLamp,g=lathe([[.014,.072],[.022,.066],[.03,.04],[.048,-.012],[.066,-.058],[.067,-.064],[.061,-.062],[.043,-.012],[.024,.04],[0,.05]],26);g.applyMatrix4(new THREE.Matrix4().compose(L.joint.clone().add(L.dir.clone().multiplyScalar(.06)),new THREE.Quaternion().setFromUnitVectors(V(0,-1,0),L.dir),V(1,1,1)));return {world:g};}],
 [/_plant_pot$/,(n,s)=>{const h=s.y/2,k=n.name.startsWith('Coffee')?.78:n.name.startsWith('Desk')?.8:1;return place(lathe([[0,-h],[.052,-h],[.058,-h+.006],[.071,h-.02],[.074,h-.006],[.074,h],[.067,h],[.066,h-.02],[0,h-.03]],26),0,(1-k)*-h,0,0,0,0,k,k,k);},{material:'ceramic'}],
 [/_plant_leaf\d$/,(n,s,ctx)=>({world:leafCluster(n,ctx)}),{material:'green'}],
 [/^Cart_tray/,(n,s)=>combine([rbox(s.x,.012,s.z,.006),...[-1,1].flatMap(k=>[place(rbox(.008,s.y,s.z,.004),k*(s.x/2-.004),0,0),place(rbox(s.x,s.y,.008,.004),0,0,k*(s.z/2-.004))])])],
 [/^Entry_leaf_open$/,rounded(.006)],
 [/^Shower_head$/,(n,s)=>cyl(s.x,s.x*.92,s.y,24)]
];

function leafCluster(n,ctx){
 const pot=ctx.nodes.get(n.name.replace(/_leaf\d$/,'_pot')),[px,pz,ph]=pot.position,potScale=n.name.startsWith('Coffee')?.78:n.name.startsWith('Desk')?.8:1,top=ph-pot.size[2]/2+pot.size[2]*potScale-.025,rand=rng(seedOf(n.name)),parts=[];
 const index=+n.name.at(-1),kind=n.name.startsWith('Wardrobe')?'trail':n.name.startsWith('Coffee')?'euca':'upright';
 const base=V(px,top,pz),ang=index*1.4+rand()*.5,out=V(Math.cos(ang),0,Math.sin(ang));
 if(kind==='trail'){// Pothos trailing toward the room (-x) and slightly over the wardrobe edge.
  const toward=V(-1,0,(rand()-.5)*.8).normalize(),reach=.16+rand()*.16;let prev=base.clone();
  for(let k=1;k<=7;k++){const t=k/7,p=base.clone().addScaledVector(out,.04*t).addScaledVector(toward,reach*t);p.y=top+.05*Math.sin(t*Math.PI)-(index%2?.05:0)*t*t;parts.push(bar(prev,p,.002,5));prev=p;
   const dir=toward.clone().multiplyScalar(.3).add(V(rand()-.5,-.25+rand()*.3,rand()-.5)).normalize();parts.push(orient(leaf(.055+rand()*.02,.045,.35),p,dir,(rand()-.5)*.8));}
  return combine(parts);
 }
 const stems=kind==='euca'?2:2,height=kind==='euca'?.26:.16;
 for(let k=0;k<stems;k++){const lean=out.clone().applyAxisAngle(V(0,1,0),(k-.5)*.7).multiplyScalar(.25+rand()*.25).add(V(0,1,0)).normalize(),h=height*(.75+rand()*.45),tip=base.clone().addScaledVector(lean,h);parts.push(bar(base,tip,.0022,5));
  const count=kind==='euca'?7:4;for(let i=0;i<count;i++){const t=.25+.75*i/count,p=base.clone().lerp(tip,t),side=V(-lean.z,0,lean.x).normalize().multiplyScalar(i%2?1:-1),dir=side.clone().multiplyScalar(.9).add(V(0,.35+rand()*.3,0)).normalize();
   parts.push(kind==='euca'?orient(leaf(.034,.032,.1,6),p,dir,(rand()-.5)*.6):orient(leaf(.075+rand()*.02,.05,.3),p,dir.add(lean).normalize(),(rand()-.5)*.6));}}
 return combine(parts);
}

function styleFor(name){for(const [re,build,opts]of STYLES)if(re.test(name))return {build,opts:opts||{}};return null;}
export function effectiveMaterial(n){const s=styleFor(n.name);return s?.opts.material||n.material;}

// Context derived once per scene from existing nodes (bed, desk lamp, pot lookup).
const contexts=new WeakMap();
export function styleContext(nodes){
 const key=nodes instanceof Map?nodes:new Map(nodes.map(n=>[n.name,n]));
 const frame=key.get('Bed_frame'),lampBase=key.get('Desk_lamp_base'),lampShade=key.get('Desk_lamp_shade');
 const ctx={nodes:key,bed:frame?bedInfo(frame):null};
 if(lampBase&&lampShade){const base=V(lampBase.position[0]-.07,0,lampBase.position[1]),elbow=V(base.x-.09,lampShade.position[2]+.04,base.z+.03),joint=V(lampShade.position[0]+.05,lampShade.position[2]+.06,lampShade.position[1]+.02),dir=V(.55,-1,.08).normalize();ctx.deskLamp={base,elbow,joint,dir};}
 return ctx;
}
let defaultContext=null;
export function setStyleContext(ctx){defaultContext=ctx;}

// Per-node world UVs (metres) by box projection, so textures keep one real-world scale.
function projectUV(g,grain='x',mode){
 const p=g.attributes.position,nrm=g.attributes.normal,uv=new Float32Array(p.count*2);let box=null;if(mode==='fit'){g.computeBoundingBox();box=g.boundingBox;}
 for(let i=0;i<p.count;i++){const ax=Math.abs(nrm.getX(i)),ay=Math.abs(nrm.getY(i)),az=Math.abs(nrm.getZ(i)),x=p.getX(i),y=p.getY(i),z=p.getZ(i);let u,v;
  if(ay>=ax&&ay>=az){[u,v]=grain==='z'?[z,x]:[x,z];}else if(ax>=az){[u,v]=grain==='y'?[y,z]:[z,y];}else{[u,v]=grain==='y'?[y,x]:[x,y];}
  if(box){const size=box.getSize(V());if(ax>=ay&&ax>=az){u=(z-box.min.z)/Math.max(size.z,1e-6);v=(y-box.min.y)/Math.max(size.y,1e-6);}else{u=(x-box.min.x)/Math.max(size.x,1e-6);v=(y-box.min.y)/Math.max(size.y,1e-6);}}
  uv[i*2]=u;uv[i*2+1]=v;}
 g.setAttribute('uv',new THREE.BufferAttribute(uv,2));return g;
}
function finish(g,{grain,uv}={}){if(uv==='keep'){indexed(g);for(const k of Object.keys(g.attributes))if(!['position','normal','uv'].includes(k))g.deleteAttribute(k);if(!g.attributes.normal)g.computeVertexNormals();g.clearGroups();return g;}clean(g);return projectUV(g,grain,uv);}

const geometryCache=new Map();
// World-space geometry for one semantic node (indexed, position/normal/uv).
export function styledGeometry(n,ctx=defaultContext){
 const cacheKey=n.name+"|"+JSON.stringify([n.position,n.size,n.rotation,n.carcass||""]);
 const cached=geometryCache.get(cacheKey);if(cached!==undefined)return cached&&cached.clone();
 const style=styleFor(n.name),detail=['furniture','soft'].includes(n.layer);let local=null,world=null;
 if(style&&ctx){const r=style.build(n,S(n),ctx);if(r&&r.world)world=r.world;else local=r;if(r===null&&!world){geometryCache.set(cacheKey,null);return null;}}
 else local=primitive(n,detail);
 let g;if(world)g=clean(world);else{g=clean(local);g.applyMatrix4(nodeMatrix(n));}
 finish(g,{grain:style?.opts.grain||'x',uv:style?.opts.uv});
 geometryCache.set(cacheKey,g);return g.clone();
}

// ---------------------------------------------------------------- virtual parts
// Real moving/working parts that the v1 scene.json never had (drawer boxes, toilet seat and
// lid, hob knobs, hood light/controls). Same node format; marked virtual so scene.json,
// the Blender exports and the 244-part checks stay untouched.
export function virtualNodes(list){
 const nodes=list instanceof Map?list:new Map(list.map(n=>[n.name,n])),out=[],v=(name,shape,position,size,material,extra={})=>out.push({name,shape,position,size,material,layer:'furniture',rotation:[0,0,0],virtual:true,...extra});
 for(const n of nodes.values())if(/^Desk_drawer_front(_\d+)?$/.test(n.name)){const [x,y,z]=n.position,back=x-n.size[0]/2,depth=.47;v(n.name+'_box','box',[back-depth/2,y,z-.01],[depth,n.size[1]-.04,.13],'white',{front:'+x'});}
 const ns=nodes.get('Nightstand');if(ns){const [x,y,z]=ns.position,[w,d,h]=ns.size,face=x-w/2+.009,depth=.33;for(let i=0;i<2;i++){const fc=z+(i-.5)*h/2;v('Nightstand_interactive_front'+i+'_box','box',[face+depth/2,y,fc-.0195],[depth,d-.06,.17],'white',{front:'-x'});}}
 const bowl=nodes.get('Toilet_bowl');if(bowl){const [x,y,z]=bowl.position,top=z+.205,hinge=y+.16;v('Toilet_seat','box',[x,hinge-.205,top+.011],[.35,.41,.022],'ceramic');v('Toilet_lid','box',[x,hinge-.21,top+.035],[.36,.42,.026],'ceramic');}
 const hob=nodes.get('Kitchen_hob');if(hob){const [x,y,z]=hob.position,top=z+hob.size[2]/2;[-.148,.152].forEach((dx,i)=>v('Kitchen_knob'+i,'cylinder',[x+dx,y-hob.size[1]/2+.025,top+.008],[.021,.021,.016],'metal'));}
 const hood=nodes.get('Range_hood');if(hood){const [x,y,z]=hood.position,[w,d,h]=hood.size,bottom=z-h/2,front=y-d/2;
  v('Range_hood_filter','box',[x,y+.03,bottom-.002],[w-.07,d-.08,.003],'metal');v('Range_hood_light','box',[x,front+.05,bottom-.0035],[.26,.035,.003],'white');
  v('Range_hood_panel','box',[x+w/2-.10,front-.003,bottom+.026],[.12,.005,.028],'metal');v('Range_hood_led','box',[x+w/2-.052,front-.006,bottom+.026],[.007,.003,.007],'white');}
 return out;
}
export function withVirtualNodes(spec){if(spec.virtual)return spec;const extra=virtualNodes(spec.nodes);return {...spec,nodes:[...spec.nodes,...extra],virtual:true};}

// Low-cost gas flame: one merged ring of tapered tongues with a blue-to-dark vertex
// gradient, drawn additively (dark = transparent). Scaled per frame by burner level.
export function createFlameGeometry(radius=.052){const parts=[];const ring=(count,r,len,w,tilt,phase)=>{for(let i=0;i<count;i++){const a=phase+i/count*TAU,g=new THREE.ConeGeometry(w,len,5,1,true);g.translate(0,len/2,0);g.rotateX(tilt);g.rotateY(-a+Math.PI/2);g.translate(Math.cos(a)*r,0,Math.sin(a)*r);parts.push(g);}};
 ring(22,radius,.034,.0075,-.42,0);ring(12,radius*.55,.022,.0055,-.25,.3);
 const g=mergeGeometries(parts.map(p=>{p.deleteAttribute('uv');return p;}));parts.forEach(p=>p.dispose());const pos=g.attributes.position,col=new Float32Array(pos.count*3);
 for(let i=0;i<pos.count;i++){const t=Math.min(1,Math.max(0,pos.getY(i)/.034));col[i*3]=.22*(1-t)+.05*t;col[i*3+1]=.42*(1-t)+.10*t;col[i*3+2]=1.0*(1-t)+.30*t;}g.setAttribute('color',new THREE.BufferAttribute(col,3));return g;}

// ---------------------------------------------------------------- decor
// Small objects that do not exist as semantic parts. They are static, sit on or
// against existing furniture/walls, and never become colliders or interaction targets.
export function decorPieces(spec){
 const nodes=new Map(spec.nodes.map(n=>[n.name,n])),d=spec.derived,out=[],get=n=>nodes.get(n);
 const add=(name,layer,material,geometry,opts={})=>{if(geometry)out.push({name,layer,material,side:opts.side||'',geometry:finish(geometry,opts)});};
 const pos=n=>{const [x,z,y]=n.position;return {x,y,z};},size=n=>({x:n.size[0],y:n.size[2],z:n.size[1]});
 const ctx=styleContext(nodes);
 // Contact shadows: soft darkening where furniture meets the floor or rug.
 const shadowQuad=(cx,cz,w,dz,h=.004,pad=.06)=>place(new THREE.PlaneGeometry(w+pad*2,dz+pad*2),cx,h,cz,-Math.PI/2);
 const shadows=[],rugTop=n=>n?n.position[2]+n.size[2]/2+.002:.004,onRug=(rug,x,z)=>rug&&Math.abs(x-rug.position[0])<rug.size[0]/2&&Math.abs(z-rug.position[1])<rug.size[1]/2;
 const bedRug=get('Bed_rug'),livingRug=get('Living_rug');
 for(const [name,pad]of [['Bed_frame',.07],['Wardrobe_body',.06],['Desk_drawers',.05],['Desk_drawers_01',.05],['Nightstand',.05],['Sofa_base',.08],['Kitchen_cabinet',.05],['Vanity',.05],['Toilet_tank',.05],['Cart_tray',.04]]){const n=get(name);if(!n)continue;const p=pos(n),s=size(n),rug=onRug(bedRug,p.x,p.z)?bedRug:onRug(livingRug,p.x,p.z)?livingRug:null;shadows.push(shadowQuad(p.x,p.z,s.x,s.z,rug?rugTop(rug):.004,pad));}
 const chair=get('Chair_column');if(chair){const p=pos(chair);shadows.push(shadowQuad(p.x,p.z,.48,.48,.004,.05));}
 const ct=get('Coffee_top');if(ct){const p=pos(ct),s=size(ct);shadows.push(shadowQuad(p.x,p.z,s.x,s.z,rugTop(livingRug),.05));}
 add('Contact_shadows','furniture','shadow',combine(shadows),{uv:'keep'});
 // Rebuild planar uv for shadows (combine dropped it): one 0..1 square per quad.
 const sh=out.at(-1);if(sh){const p=sh.geometry.attributes.position,uv=new Float32Array(p.count*2);for(let i=0;i<p.count;i++){uv[i*2]=i%2;uv[i*2+1]=(i>>1)%2?0:1;}sh.geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));}

 // Bed: two upright euro pillows against the headboard and one checked lumbar cushion.
 const frame=get('Bed_frame'),head=get('Bed_headboard');
 if(frame&&head){const b=ctx.bed,hx=head.position[0]-head.size[0]/2,top=BED.mattressTop;
  for(const k of [-1,1])add('Bed_euro_pillow','soft','pillow',place(blob(.16,.56,.62,{r:.5,pinch:.5}),hx-.13,top+.27,b.z+k*.33,0,0,-.26));
  add('Bed_lumbar','soft','check',place(blob(.13,.29,.52,{r:0.65,pinch:.55}),hx-.25,top+.27,b.z-.06,0,.05,-.42));
 }
 // Nightstand: USM-like chrome tube frame, alarm clock and a book.
 const ns=get('Nightstand');
 if(ns){const p=pos(ns),s=size(ns),x0=p.x-s.x/2,x1=p.x+s.x/2,z0=p.z-s.z/2,z1=p.z+s.z/2,y0=.012,y1=s.y,ym=s.y/2,r=.0075,tubes=[];
  const corners=[[x0,z0],[x0,z1],[x1,z0],[x1,z1]];for(const [x,z]of corners){tubes.push(bar(V(x,y0,z),V(x,y1,z),r,8),ball(V(x,y1,z),.012,10),ball(V(x,ym,z),.012,10),ball(V(x,y0,z),.012,10),bar(V(x,0,z),V(x,y0,z),.006,8));}
  for(const y of [y0,ym,y1]){tubes.push(bar(V(x1,y,z0),V(x1,y,z1),r,8),bar(V(x0,y,z0),V(x1,y,z0),r,8),bar(V(x0,y,z1),V(x1,y,z1),r,8));if(y!==y0)tubes.push(bar(V(x0,y,z0),V(x0,y,z1),r,8));}
  add('Nightstand_frame','furniture','metal',combine(tubes));
  const clock=V(x0+.07,y1+.005,z1-.07);add('Nightstand_clock','soft','ceramic',combine([place(cyl(.034,.034,.026,24),clock.x,clock.y+.042,clock.z,0,0,Math.PI/2),place(cyl(.006,.006,.02,8),clock.x+.004,clock.y+.004,clock.z,0,0,Math.PI/2)]));
  add('Nightstand_clock_face','soft','art',place(new THREE.CircleGeometry(.029,24),clock.x-.0135,clock.y+.042,clock.z,0,-Math.PI/2),{uv:'keep'});
  const face=out.at(-1).geometry,fu=face.attributes.uv;for(let i=0;i<fu.count;i++)fu.setXY(i,.5+fu.getX(i)*.5,fu.getY(i)*.5);
  add('Nightstand_book','soft','oat',place(rbox(.15,.022,.20,.003),x0+.11,y1+.011,z0+.11,0,.18,0));
 }
 // Wall print above the bed.
 if(head){const wx=d.width,cz=head.position[1],cy=1.62,w=.50,h=.50,f=.022,t=.024,frameParts=[place(rbox(t,f,w,.003),wx-t/2,cy+h/2-f/2,cz),place(rbox(t,f,w,.003),wx-t/2,cy-h/2+f/2,cz),place(rbox(t,h-2*f,f,.003),wx-t/2,cy,cz+w/2-f/2),place(rbox(t,h-2*f,f,.003),wx-t/2,cy,cz-w/2+f/2)];
  add('Bed_print_frame','soft','wood',combine(frameParts),{grain:'y'});
  add('Bed_print','soft','art',place(new THREE.PlaneGeometry(w-2*f,h-2*f),wx-.006,cy,cz,0,-Math.PI/2),{uv:'keep'});
  const g=out.at(-1).geometry.attributes.uv;for(let i=0;i<g.count;i++)g.setXY(i,g.getX(i)*.5,g.getY(i)*.5);
 }
 // Desk: wall clock and postcards (as in the references), tray, books, mug, basket.
 const desk=get('Desk_top');
 if(desk){const p=pos(desk),s=size(desk),top=p.y+s.y/2,z0=p.z-s.z/2;
  const cz=z0+s.z*.40;add('Desk_wall_clock','soft','ceramic',place(cyl(.15,.15,.04,40),.02,1.98,cz,0,0,Math.PI/2));
  add('Desk_wall_clock_face','soft','art',place(new THREE.CircleGeometry(.137,40),.0405,1.98,cz,0,Math.PI/2),{uv:'keep'});
  let g=out.at(-1).geometry.attributes.uv;for(let i=0;i<g.count;i++)g.setXY(i,.5+g.getX(i)*.5,g.getY(i)*.5);
  const cards=[[z0+s.z*.20,1.50,.10,.135,0],[z0+s.z*.30,1.60,.12,.085,1],[z0+s.z*.52,1.46,.10,.13,2]];
  for(const [z,y,w,h,k]of cards){add('Desk_postcard','soft','art',place(new THREE.PlaneGeometry(w,h),.003,y,z,0,Math.PI/2),{uv:'keep'});g=out.at(-1).geometry.attributes.uv;for(let i=0;i<g.count;i++)g.setXY(i,(k+g.getX(i))*.25,.5+g.getY(i)*.5);}
  add('Desk_tray','soft','white',combine([place(rbox(.24,.008,.32,.003),.20,top+.004,z0+.17),...[-1,1].map(k=>place(rbox(.24,.03,.006,.002),.20,top+.019,z0+.17+k*.157)),place(rbox(.006,.03,.32,.002),.083,top+.019,z0+.17)]));
  add('Desk_papers','soft','pillow',place(rbox(.21,.012,.29,.001),.205,top+.014,z0+.17,0,.02,0));
  const bz=z0+s.z*.73;add('Desk_books_a','soft','gray',combine([place(rbox(.17,.026,.24,.003),.25,top+.013,bz,0,.06,0),place(rbox(.15,.02,.21,.003),.25,top+.049,bz,0,-.12,0)]));
  add('Desk_books_b','soft','oat',place(rbox(.16,.022,.22,.003),.255,top+.037,bz,0,.15,0));
  add('Desk_mug','soft','ceramic',combine([place(lathe([[0,0],[.038,0],[.04,.004],[.04,.09],[.036,.09],[.035,.008],[0,.008]],22),.45,top,z0+s.z*.62),place(new THREE.TorusGeometry(.022,.005,8,16,Math.PI),.45,top+.048,z0+s.z*.62+.04,0,Math.PI/2,-Math.PI/2)]));
  add('Desk_basket','furniture','knit',combine([lathe([[0,0],[.15,0],[.16,.01],[.17,.26],[.162,.262],[.152,.012],[0,.012]],24).scale(1,1,.8)]).translate(.29,0,p.z));
 }
 // Wardrobe top: two lidded linen storage boxes.
 const wb=get('Wardrobe_body');if(wb){const p=pos(wb),s=size(wb),top=p.y+s.y/2;for(const [dz,w]of [[.62,.30],[.93,.30]])add('Wardrobe_storage_box','soft','oat',combine([place(rbox(.36,.20,w,.012),p.x,top+.10,p.z-s.z/2+dz),place(rbox(.37,.03,w+.01,.008),p.x,top+.205,p.z-s.z/2+dz)]));}
 // Desk chair: white shell under the seat and behind the back, hub for the star base.
 const seat=get('Chair_seat'),back=get('Chair_back'),col=get('Chair_column');
 if(seat&&back&&col){const sp=pos(seat),bp=pos(back),bs=size(back),cp=pos(col);
  const shell=blob(.044,bs.y*.99,bs.z*.98,{r:0.32,pinch:.05}),q=shell.attributes.position;for(let i=0;i<q.count;i++)q.setX(i,q.getX(i)-.034*Math.pow(q.getZ(i)/(bs.z*.49),2));shell.computeVertexNormals();
  add('Chair_shell','furniture','white',combine([place(shell,bp.x+.026,bp.y,bp.z),place(blob(.50,.035,.46,{r:0.47,pinch:.2}),sp.x-.01,sp.y-.052,sp.z),bar(V(sp.x+.17,sp.y-.06,sp.z),V(bp.x+.035,bp.y-.20,bp.z),.016,10,.02),place(cyl(.05,.055,.035,20),cp.x,.125,cp.z),place(cyl(.045,.04,.03,16),cp.x,sp.y-.085,cp.z)]));
 }
 // Sofa: back cushions, two accent cushions at the left end, short oak legs.
 const base=get('Sofa_base'),sback=get('Sofa_back');
 if(base&&sback){const p=pos(base),s=size(base),bp=pos(sback),bs=size(sback),seatTop=.495,cz=bp.z+bs.z/2+.07;
  for(const k of [-1,1])add('Sofa_back_cushion','furniture','oat',place(blob(s.x*.42,.36,.17,{r:0.34,pinch:.35}),p.x+k*s.x*.22,seatTop+.165,cz,-.10,0,0));
  add('Sofa_pillow_knit','soft','knit',place(blob(.44,.44,.14,{r:0.61,pinch:.6}),p.x-s.x/2+.36,seatTop+.19,cz+.13,-.32,.10,.04));
  add('Sofa_pillow_check','soft','check',place(blob(.40,.40,.13,{r:0.61,pinch:.6}),p.x-s.x/2+.66,seatTop+.17,cz+.15,-.30,-.12,-.05));
  add('Sofa_legs','furniture','wood',combine([-1,1].flatMap(a=>[-1,1].map(b=>place(cyl(.02,.015,.058,12),p.x+a*(s.x/2-.07),.029,p.z+b*(s.z/2-.07))))),{grain:'y'});
 }
 // Coffee table: LACK-style lower shelf, water carafe, glass and a book.
 if(ct){const p=pos(ct),s=size(ct),top=p.y+s.y/2;
  add('Coffee_shelf','furniture','white',place(rbox(s.x-.11,.022,s.z-.11,.004),p.x,.15,p.z));
  add('Coffee_carafe','soft','glass',combine([lathe([[0,0],[.042,0],[.044,.006],[.044,.15],[.040,.16],[.028,.175],[.027,.19],[0,.19]],24).translate(p.x+.30,top,p.z-.13),lathe([[0,0],[.033,0],[.034,.004],[.036,.095],[0,.095]],20).translate(p.x+.19,top,p.z-.16)]));
  add('Coffee_book','soft','gray',place(rbox(.17,.022,.22,.003),p.x-.25,top+.011,p.z-.15,0,.08,0));
  add('Coffee_coaster','soft','oat',place(rbox(.10,.004,.10,.002),p.x+.19,top+.002,p.z-.16));
 }
 // Rug fringes on the short ends.
 for(const rug of [bedRug,livingRug]){if(!rug)continue;const p=pos(rug),s=size(rug),strands=[],rand=rng(seedOf(rug.name));const count=Math.floor(s.z/.022);
  for(const k of [-1,1])for(let i=0;i<count;i++){const z=p.z-s.z/2+.011+i*s.z/count,len=.055+rand()*.025,x=p.x+k*(s.x/2+len/2-.004);strands.push(place(new THREE.BoxGeometry(len,.004,.006),x,.004,z,0,(rand()-.5)*.35,0));}
  add(rug.name+'_fringe','soft','rug',combine(strands));}
 // Curtain rod and sheer track above the balcony door.
 const c0=get('Curtain_fold0_0'),c1=get('Curtain_fold1_6');
 if(c0&&c1){const y=c0.position[2]+c0.size[2]/2+.022,z=c0.position[1],xa=c0.position[0]-.12,xb=c1.position[0]+.12;
  add('Curtain_rod','soft','white',combine([bar(V(xa,y,z),V(xb,y,z),.012,14),ball(V(xa-.02,y,z),.022,14),ball(V(xb+.02,y,z),.022,14),...[xa+.06,xb-.06].map(x=>bar(V(x,y,0),V(x,y,z),.007,8)),bar(V(xa+.3,y+.005,0),V(xb-.3,y+.005,0),.001,4)]));
  const sh=get('White_sheer_left');if(sh)add('Sheer_track','soft','white',place(rbox(c1.position[0]-c0.position[0]+.2,.012,.02,.003),(c0.position[0]+c1.position[0])/2,sh.position[2]+sh.size[2]/2+.012,sh.position[1]));
 }
 // Skirting boards in bedroom and living room (skip door/opening gaps).
 const skirt=[],T=.012,H=.07,D=d.bedroom_depth,B=d.body_depth,W=d.width,ox=nodes.get('Bedroom_opening_frame0')?.position[0],ow=ox!==undefined?nodes.get('Bedroom_opening_frame1').position[0]-ox:0,bx=get('Balcony_sliding_jamb0')?.position[0],bw=bx!==undefined?get('Balcony_sliding_jamb1').position[0]-bx:0;
 const runX=(z,a,b,s)=>{if(b-a>.02)skirt.push(place(rbox(b-a,H,T,.002),(a+b)/2,H/2,z+s*T/2));},runZ=(x,a,b,s)=>{if(b-a>.02)skirt.push(place(rbox(T,H,b-a,.002),x+s*T/2,H/2,(a+b)/2));};
 runZ(0,0,D-.06,1);runZ(W,0,D-.06,-1);runX(0,0,bx??0,1);runX(0,(bx??0)+bw,W,1);runX(D-.06,0,ox-.03,-1);runX(D-.06,ox+ow+.03,W,-1);
 runX(D+.06,0,ox-.03,1);runX(D+.06,ox+ow+.03,W,1);runZ(W,D+.06,B-.06,-1);runZ(0,D+.06,B,1);const bathx=get('Bath_slider_head')?.position[0];if(bathx!==undefined)runX(B-.06,bathx+.06,W,-1);
 add('Skirting','structure','white',combine(skirt));
 // Flush ceiling lights.
 add('Ceiling_lights','ceiling','ceramic',combine([[W/2,D*.52],[W/2,(D+B)/2]].map(([x,z])=>lathe([[0,-.055],[.19,-.055],[.215,-.045],[.225,-.02],[.225,0],[0,0]],40).translate(x,d.height,z))));
 // Balcony: one potted olive-like tree, seen through the glass door.
 if(bx!==undefined){const px=bx+bw-.35,pz=-.38,rand=rng(77),leaves=[],stems=[];
  add('Balcony_pot','exterior','ceramic',lathe([[0,0],[.16,0],[.17,.01],[.20,.34],[.205,.36],[.19,.36],[.188,.33],[0,.33]],28).translate(px,0,pz),{side:'balcony'});
  const trunkTop=V(px+.02,1.05,pz-.02);stems.push(bar(V(px,.33,pz),trunkTop,.018,8,.012));
  for(let b=0;b<9;b++){const a=b*2.4+rand(),tip=trunkTop.clone().add(V(Math.cos(a)*(.22+rand()*.16),.10+rand()*.40,Math.sin(a)*(.18+rand()*.14)));stems.push(bar(trunkTop,tip,.006,5));
   for(let i=0;i<16;i++){const p=trunkTop.clone().lerp(tip,.3+.7*rand()).add(V((rand()-.5)*.12,(rand()-.5)*.10,(rand()-.5)*.12));leaves.push(orient(leaf(.07+rand()*.03,.022,.15,4),p,V(rand()-.5,rand()-.2,rand()-.5),rand()*3));}}
  add('Balcony_tree_trunk','exterior','wood',combine(stems),{side:'balcony',grain:'y'});add('Balcony_tree_leaves','exterior','green',combine(leaves),{side:'balcony'});
 }
 // Kitchen: tap, kettle and a wooden board leaning on the splashback.
 const sink=get('Kitchen_sink'),hob=get('Kitchen_hob'),counter=get('Kitchen_counter');
 if(sink&&counter){const s=pos(sink),top=counter.position[2]+counter.size[2]/2,back=counter.position[1]+counter.size[1]/2-.06;
  add('Kitchen_tap','furniture','metal',combine([bar(V(s.x,top,back),V(s.x,top+.26,back),.013,14),place(new THREE.TorusGeometry(.07,.011,8,16,Math.PI),s.x,top+.26,back-.07,0,Math.PI/2,0),bar(V(s.x,top+.26,back-.14),V(s.x,top+.20,back-.14),.011,12),bar(V(s.x+.04,top+.05,back),V(s.x+.09,top+.07,back),.006,8)]));
  add('Kitchen_board','soft','wood',place(rbox(.30,.42,.018,.03),s.x-.03,top+.215,back+.025,.10,0,0),{grain:'y'});
  if(hob){const h=pos(hob);add('Kitchen_kettle','soft','ceramic',combine([lathe([[0,0],[.075,0],[.08,.01],[.085,.08],[.072,.17],[.05,.19],[.05,.20],[0,.20]],24).translate(h.x+.12,top+.02,h.z+.06),place(new THREE.TorusGeometry(.06,.009,8,16,Math.PI),h.x+.12,top+.22,h.z+.06,0,0,0)]));}
 }
 // Cabinet interiors, seen once doors open: wardrobe shelf, rail and hanging clothes;
 // a shelf in the kitchen and vanity cabinets; water in the toilet bowl.
 if(wb){const p=pos(wb),s=size(wb),x0=p.x-s.x/2,z0=p.z-s.z/2,z1=p.z+s.z/2,cx=p.x+.02;
  add('Wardrobe_shelf','furniture','white',place(rbox(s.x-.05,.018,s.z-.04,.003),cx,1.80,p.z));
  add('Wardrobe_rail','furniture','metal',bar(V(cx,1.70,z0+.03),V(cx,1.70,z1-.03),.011,12));
  const rand=rng(9),mats=['gray','oat','pillow','linen','gray','oat'];
  for(let i=0;i<6;i++){const z=z0+.16+i*.165+(rand()-.5)*.02,len=.72+rand()*.32;add('Wardrobe_garment_'+i,'soft',mats[i],place(blob(.42,len,.035,{r:.35,pinch:.1}),cx,1.66-len/2,z));add('Wardrobe_hanger_'+i,'soft','wood',combine([place(new THREE.TorusGeometry(.20,.006,6,20,Math.PI*.8),cx,1.62,z,0,0,Math.PI*.1),place(new THREE.TorusGeometry(.016,.003,6,12,Math.PI*1.4),cx,1.715,z)]));}
  for(const [dz,m]of [[.25,'oat'],[.62,'gray']])add('Wardrobe_folded','soft',m,combine([0,1,2].map(k=>place(rbox(.30,.045,.26,.012),cx,1.835+k*.047,z0+dz+(k%2)*.01))));}
 const kc=get('Kitchen_cabinet');if(kc){const p=pos(kc),s=size(kc);add('Kitchen_cabinet_shelf','furniture','white',place(rbox(s.x-.04,.016,s.z-.07,.003),p.x,.44,p.z+.03));}
 const va=get('Vanity');if(va){const p=pos(va),s=size(va);add('Vanity_shelf','furniture','white',place(rbox(s.x-.07,.016,s.z-.04,.003),p.x+.02,.40,p.z));}
 const tb=get('Toilet_bowl');if(tb){const p=pos(tb);add('Toilet_water','furniture','glass',place(new THREE.CircleGeometry(1,28),p.x,p.y+.03,p.z-.01,-Math.PI/2,0,0,.085,.12,1));}
 return out;
}

// Equirect environment so metal, glass and tile pick up soft room reflections.
export function createEnvironmentTexture(){
 const w=64,h=32,data=new Uint8Array(w*h*4);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const v=y/(h-1),lon=x/w*TAU,i=(y*w+x)*4;let c=v>.62?[.95,.94,.92]:v>.40?[.86,.85,.82]:[.52,.53,.55];
  const win=Math.exp(-Math.pow((lon-Math.PI*1.5)/.45,2)-Math.pow((v-.55)/.12,2));c=c.map((k,j)=>Math.min(1,k+win*[.10,.12,.14][j]));for(let k=0;k<3;k++)data[i+k]=Math.round(c[k]*255);data[i+3]=255;}
 const t=new THREE.DataTexture(data,w,h);t.mapping=THREE.EquirectangularReflectionMapping;t.colorSpace=THREE.SRGBColorSpace;t.magFilter=THREE.LinearFilter;t.needsUpdate=true;return t;
}
