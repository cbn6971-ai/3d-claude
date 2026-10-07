// Round three: extend dist/interaction_config.json (the runtime source) in place.
// Idempotent: run `node model/upgrade_interactions_r3.mjs` again and nothing changes.
// Adds per object: handPose, handTarget, movableParts, collisionProxy; splits wardrobe doors
// and curtain panels into separately operated objects; toilet lid + seat channels; one
// config per hob burner with low/medium/high; range hood; drawer boxes move with fronts.
// World coordinates [x, height, z] in metres.
import fs from 'node:fs';
const file=new URL('../dist/interaction_config.json',import.meta.url),configs=JSON.parse(fs.readFileSync(file));
const scene=JSON.parse(fs.readFileSync(new URL('../dist/scene.json',import.meta.url))),node=n=>{const v=scene.nodes.find(x=>x.name===n);if(!v)throw Error('missing '+n);return v;},W=p=>[p[0],p[2],p[1]];
const byId=id=>configs.find(c=>c.id===id),r=v=>+v.toFixed(4),R=a=>a.map(r);
const box=(min,max,name,objects)=>({min:R(min),max:R(max),...(name?{name}:{}),...(objects?{objects}:{})});
const norm=v=>{const l=Math.hypot(...v);return v.map(x=>r(x/l));},cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
// Hand orientation presets from the face normal n (pointing toward the player).
const pose={
 pull:(n,grip='hook')=>({gesture:'pull',grip,palm:norm(n.map(x=>-x)),fingers:norm([-n[0]*.25,-1,-n[2]*.25])}),
 swing:n=>{const palm=n.map(x=>-x);return {gesture:'swing',grip:'grip',palm:norm(palm),fingers:norm(cross(palm,[0,1,0])),follow:true};},
 slide:n=>{const palm=n.map(x=>-x);return {gesture:'slide',grip:'grip',palm:norm(palm),fingers:norm(cross(palm,[0,1,0]))};},
 turn:(fingers,follow=true)=>({gesture:'turn',grip:'pinch',palm:[0,-1,0],fingers:norm(fingers),follow}),
 lift:()=>({gesture:'lift',grip:'hook',palm:[0,1,0],fingers:[0,0,1],follow:false}),
 press:()=>({gesture:'press',grip:'point'}),
 remote:()=>({gesture:'remote',grip:'point'})
};
const target=(point,extra={})=>({point:R(point),...extra});
function movable(c){c.movableParts=c.animation.filter(a=>['rotate','translate','transform'].includes(a.type)).flatMap(a=>a.parts.map(part=>({part,channel:a.channel||c.actions.find(x=>x.channel)?.channel||'open',type:a.type,...(a.pivot?{pivot:a.pivot}:{}),...(a.axis?{axis:a.axis,range:[0,a.amount]}:{}),...(a.offset?{range:[0,a.offset]}:{}),...(a.closedScale?{range:[a.closedScale,[1,1,1]]}:{})})));}
const body=(id,label,object,proxies)=>{if(!byId(id))configs.push({id,label,object,interactionPoints:[],actions:[],cameraPose:{},animation:[],state:{}});byId(id).collisionProxy=proxies;};

// ---- collision proxies (simplified footprints, independent from visual bounds)
byId('chair').collisionProxy=[box([.705,0,1.875],[1.255,1.1,2.375])];
byId('desk').collisionProxy=[box([.02,0,.95],[.60,.80,3.30],null,[...byId('desk').object,'Desk_drawers','Desk_drawers_01'])];
byId('sofa').collisionProxy=[box([1.90,0,5.018],[3.80,.85,5.818])];
byId('bed').collisionProxy=[box([1.85,0,2.41],[3.90,.62,3.975],'base'),box([3.84,0,2.398],[3.93,1.10,3.988],'headboard')];
byId('toilet').collisionProxy=[box([3.45,0,8.394],[3.81,.78,9.02])];
body('nightstand','床头柜',['Nightstand'],[box([3.552,0,3.975],[3.968,.56,4.421])]);
body('kitchen_cabinet','厨房地柜',['Kitchen_cabinet','Kitchen_counter','Kitchen_sink','Kitchen_hob'],[box([1.02,0,9.105],[2.23,.92,9.70])]);
body('vanity','洗手台',['Vanity','Vanity_basin'],[box([3.35,0,7.71],[4.0,.92,8.13])]);
body('coffee_table','茶几',['Coffee_top','Coffee_leg','Coffee_leg_01','Coffee_leg_02','Coffee_leg_03'],[box([2.425,0,6.178],[3.275,.46,6.728])]);
body('cart','小推车',['Cart_tray','Cart_tray_01','Cart_tray_02','Cart_column','Cart_column_01'],[box([3.58,0,6.975],[3.94,.80,7.405])]);

// ---- wardrobe: each door is its own object (left keeps the id 'wardrobe')
{const w=byId('wardrobe');if(w.animation.length===2){const right=JSON.parse(JSON.stringify(w));right.id='wardrobe_right';right.label='衣柜右门';right.object=['Wardrobe_door1','Wardrobe_handle1'];right.animation=[w.animation[1]];delete right.openBodies;right.interactionPoints=[{position:[3.34,1.15,1.005],approach:[2.65,1.005],range:1.15}];
  w.label='衣柜左门';w.animation=[w.animation[0]];w.interactionPoints=[{position:[3.34,1.15,.455],approach:[2.65,.455],range:1.15}];configs.splice(configs.indexOf(w)+1,0,right);}
 byId('wardrobe').collisionProxy=[box([3.34,0,.18],[3.97,2.1,1.28])];
 for(const [id,z]of [['wardrobe',.665],['wardrobe_right',.795]]){const c=byId(id);c.handPose=pose.swing([-1,0,0]);c.handTarget=target([3.342,1.03,z]);}}
// ---- curtains: left and right panels are pulled separately
{const c=byId('curtains');if(c.animation.length===2){const right=JSON.parse(JSON.stringify(c));right.id='curtains_right';right.label='米白窗帘（右）';right.animation=[c.animation[1]];right.object=c.object.filter(n=>n.startsWith('Curtain_fold1'));right.interactionPoints=[c.interactionPoints[1]];
  c.label='米白窗帘（左）';c.animation=[c.animation[0]];c.object=c.object.filter(n=>n.startsWith('Curtain_fold0'));c.interactionPoints=[c.interactionPoints[0]];configs.splice(configs.indexOf(c)+1,0,right);}
 byId('curtains').handPose=pose.slide([0,0,1]);byId('curtains').handTarget=target([.76,1.25,.13]);byId('curtains_right').handPose=pose.slide([0,0,1]);byId('curtains_right').handTarget=target([3.24,1.25,.13]);
 byId('sheer').handPose=pose.slide([0,0,1]);byId('sheer').handTarget=target([1.83,1.25,.075]);}

// ---- drawers: the box (bottom, sides, back) slides with each front
for(const c of configs.filter(c=>/^Desk_drawer_front(_\d+)?$/.test(c.id))){const a=c.animation[0];if(!a.parts.includes(c.id+'_box'))a.parts.push(c.id+'_box');const f=node(c.id);c.handPose=pose.pull([1,0,0]);c.handTarget=target([.612,f.position[2]+.067,f.position[1]]);c.object=[...new Set([...c.object,c.id+'_box'])];}
for(const i of [0,1]){const c=byId('Nightstand_interactive_front'+i),a=c.animation[0],name=c.id+'_box';if(!a.parts.includes(name))a.parts.push(name);c.object=[...new Set([...c.object,name])];const fc=.265+(i-.5)*.265;c.handPose=pose.pull([-1,0,0]);c.handTarget=target([3.548,fc+.10,4.198]);}
// ---- cabinet doors: grip the free edge, the hand turns with the door
byId('Kitchen_cabinet_interactive_front0').handPose=pose.swing([0,0,-1]);byId('Kitchen_cabinet_interactive_front0').handTarget=target([1.60,.78,9.104]);
byId('Kitchen_cabinet_interactive_front1').handPose=pose.swing([0,0,-1]);byId('Kitchen_cabinet_interactive_front1').handTarget=target([1.65,.78,9.104]);
byId('Vanity_interactive_front0').handPose=pose.swing([-1,0,0]);byId('Vanity_interactive_front0').handTarget=target([3.343,.70,7.90]);
byId('Vanity_interactive_front1').handPose=pose.swing([-1,0,0]);byId('Vanity_interactive_front1').handTarget=target([3.343,.70,7.94]);
// ---- doors and windows
byId('entry_door').handPose=pose.swing(norm([-.309,0,-.951]));byId('entry_door').handTarget=target(W(node('Entry_handle').position));
byId('bath_door').handPose=pose.slide([-1,0,0]);byId('bath_door').handTarget=target([2.252,1.05,8.284]);
{const g=node('Living_window_glass'),[x,z,y]=g.position;byId('living_window').handPose=pose.slide([-1,0,0]);byId('living_window').handTarget=target([x-.015,1.25,z-g.size[1]/4]);}
{const g=node('Bath_window_glass'),[x,z,y]=g.position;byId('bath_window').handPose=pose.slide([0,0,-1]);byId('bath_window').handTarget=target([x-g.size[0]/4,1.45,z-.015]);}
{const g=node('Balcony_sliding_glass'),[x,z,y]=g.position;byId('balcony_window').handPose=pose.slide([0,0,1]);byId('balcony_window').handTarget=target([x-g.size[0]/4,1.15,z+.015]);}
// A window gesture may touch its own frame and glass.
for(const [id,prefix]of [['living_window','Living_window_'],['bath_window','Bath_window_'],['balcony_window','Balcony_sliding_']]){const c=byId(id);c.object=[...new Set([...c.object,...scene.nodes.filter(n=>n.name.startsWith(prefix)&&!n.name.includes('guard')).map(n=>n.name)])];}
// ---- lights and devices
const press=(id,p)=>{byId(id).handPose=pose.press();byId(id).handTarget=target(p,{follow:false});};
press('Desk_lamp',[.37,1.16,1.44]);press('Bed_lamp',[3.76,.895,4.198]);press('Floor_lamp',[3.70,.44,6.838]);press('laptop',[.33,.80,2.18]);
byId('aircon').handPose=pose.remote();byId('aircon').handTarget=target([.29,2.28,.43],{follow:false});
byId('shower').handPose=pose.turn([-1,0,0],false);byId('shower').handTarget=target([2.44,1.05,9.195],{follow:false});
// Floor lamp now has a collider; approach from the free side.
byId('Floor_lamp').interactionPoints[0].approach=[3.30,7.05];byId('Floor_lamp').collisionProxy=[box([3.565,0,6.703],[3.835,.45,6.973])];

// ---- toilet: lid and seat are separate hinged parts (hinge at the tank)
{const t=byId('toilet'),bowl=node('Toilet_bowl'),[x,z]=bowl.position,hinge=[x,.55,z+.16];
 t.object=[...new Set([...t.object,'Toilet_seat','Toilet_lid'])];t.state={posture:'standing',lid:false,seat:false,...Object.fromEntries(Object.entries(t.state).filter(([k])=>k==='posture'))};
 const sit=t.actions.filter(a=>a.kind==='pose'||a.kind==='release');
 t.actions=[sit.find(a=>a.kind==='release'),{id:'lid',kind:'toggle',channel:'lid',labels:['掀起马桶盖','放下马桶盖'],requires:{seat:false}},...sit.filter(a=>a.kind==='pose'),{id:'seat',kind:'toggle',channel:'seat',labels:['掀起坐圈','放下坐圈'],requires:{lid:true}}];
 t.animation=[{type:'rotate',channel:'lid',parts:['Toilet_lid'],pivot:R(hinge),axis:'x',amount:1.62},{type:'rotate',channel:'seat',parts:['Toilet_seat'],pivot:R(hinge),axis:'x',amount:1.50}];
 t.durations={lid:.9,seat:.8};t.handPose=pose.lift();t.handTarget=[target([x,.575,z-.255],{channel:'lid'}),target([x,.549,z-.25],{channel:'seat'})];}

// ---- hob: one object per burner with its own knob, low / medium / high and a flame
{const old=byId('hob');if(old)configs.splice(configs.indexOf(old),1);const hob=node('Kitchen_hob'),[hx,hz,hy]=hob.position,top=hy+hob.size[2]/2,kz=hz-hob.size[1]/2+.025;
 [['hob_front','前灶','Burner',-.148],['hob_back','后灶','Burner_01',.152]].forEach(([id,label,burner,dx],i)=>{const b=node(burner),knob='Kitchen_knob'+i,kx=r(hx+dx);
  const c={id,label,object:[knob,burner,'Kitchen_hob'],interactionPoints:[{position:[kx,top+.02,r(kz)],approach:[kx,8.62],range:1.15}],
   actions:[{id:'ignite',kind:'set',channel:'level',value:.55,label:'点火',requires:{level:0}},{id:'off',kind:'set',channel:'level',value:0,label:'关火',requires:{level:{gt:0}}},{id:'low',kind:'set',channel:'level',value:.25,label:'小火',requires:{level:{gt:0}}},{id:'medium',kind:'set',channel:'level',value:.55,label:'中火',requires:{level:{gt:0}}},{id:'high',kind:'set',channel:'level',value:1,label:'大火',requires:{level:{gt:0}}}],
   cameraPose:{},state:{level:0},duration:.55,
   animation:[{type:'rotate',parts:[knob],pivot:[kx,r(top+.008),r(kz)],axis:'y',amount:-4.0},{type:'flame',parts:[burner],position:R([b.position[0],b.position[2]+.008,b.position[1]]),radius:.052},{type:'emissive',parts:[burner],color:0xd8743a,intensity:.35}],
   handPose:pose.turn([0,0,1]),handTarget:target([kx,r(top+.022),r(kz)])};
  const at=configs.findIndex(x=>x.id===id);if(at>=0)configs[at]=c;else configs.splice(configs.findIndex(x=>x.id==='shower'),0,c);});
 const hood=node('Range_hood'),[x,z,y]=hood.position,front=z-hood.size[1]/2,bottom=y-hood.size[2]/2;
 const c={id:'range_hood',label:'油烟机',object:['Range_hood','Extractor_pipe','Range_hood_panel','Range_hood_light','Range_hood_led','Range_hood_filter'],interactionPoints:[{position:R([x+hood.size[0]/2-.10,bottom+.026,front]),approach:[2.0,8.62],range:1.15}],
  actions:[{id:'toggle',kind:'toggle',channel:'on',labels:['打开油烟机','关闭油烟机']}],cameraPose:{},state:{on:false},duration:.38,
  animation:[{type:'light',parts:['Range_hood_light'],position:R([x,bottom-.10,front+.08]),color:0xfff1e0,intensity:.9,distance:1.6},{type:'emissive',parts:['Range_hood_led'],color:0x55e07a,intensity:1.6}],
  handPose:pose.press(),handTarget:target([x+hood.size[0]/2-.10,bottom+.026,front-.004],{follow:false})};
 const at=configs.findIndex(x=>x.id==='range_hood');if(at>=0)configs[at]=c;else configs.splice(configs.findIndex(x=>x.id==='shower'),0,c);}

for(const c of configs){movable(c);for(const k of ['handPose','handTarget','collisionProxy'])if(!(k in c))c[k]=null;}
fs.writeFileSync(file,JSON.stringify(configs,null,1)+'\n');
console.log(JSON.stringify({objects:configs.length,withHands:configs.filter(c=>c.handPose).length,proxies:configs.filter(c=>c.collisionProxy).length}));
