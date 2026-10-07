// World coordinates: [x, height, z], metres. Only the existing scene is consulted.
// Add an object here: no object-specific branches are needed in InteractionSystem.
export function createInteractionConfig(spec){
 const nodes=new Map(spec.nodes.map(n=>[n.name,n]));const configs=[];
 const node=name=>{const n=nodes.get(name);if(!n)throw Error('缺少现有部件 '+name);return n;};
 const names=prefix=>spec.nodes.filter(n=>n.name.startsWith(prefix)).map(n=>n.name);
 const point=(position,approach,range=1.15)=>({position,approach,range});
 const pose=(position,yaw,pitch=-.12,waypoints=[])=>({position,yaw,pitch,waypoints,yawLimit:1.3,pitchLimits:[-.78,.95]});
 const posture=(id,label,cameraPose,available=['standing'])=>({id,label,kind:'pose',cameraPose,available});
 const release=label=>({id:'stand',label,kind:'release',available:['occupied']});
 const add=(id,label,object,interactionPoints,actions,cameraPose={},animation=[],state={})=>{configs.push({id,label,object,interactionPoints,actions,cameraPose,animation,state:actions.some(a=>a.kind==='pose')?{posture:'standing',...state}:state});};
 const toggle=(id,label,object,points,animation,channel='open',initial=false,labels=['打开','关闭'])=>add(id,label,object,points,[{id:'toggle',kind:'toggle',channel,labels}],{},animation,{[channel]:initial});
 const chair=node('Chair_seat'),[cx,cz,cy]=chair.position,chairPose=pose([cx,cy+.73,cz],Math.PI/2,-.17),chairPoint=point([cx,1.05,cz],[1.52,cz],1.35);
 add('chair','椅子',names('Chair_'),[chairPoint],[release('起身'),posture('sit','坐下','sit')],{sit:chairPose});
 const desk=node('Desk_top'),[dx,dz]=desk.position;
 add('desk','书桌',names('Desk_').filter(n=>!n.startsWith('Desk_drawer')),[point([dx+.2,.98,dz],[1.52,dz],1.55)],[release('起身'),posture('use','坐下使用','use')],{use:chairPose});
 const sofa=node('Sofa_cushion'),[sx,sz,sy]=sofa.position;
 add('sofa','沙发',names('Sofa_'),[point([sx,1.03,sz],[sx-.93,sz+.12])],[release('起身'),posture('sit','坐下','sit',['standing','lie']),posture('lie','躺下','lie',['standing','sit'])],{sit:pose([sx,sy+.075+.675,sz],Math.PI,-.12),lie:{...pose([node('Sofa_cushion_01').position[0]+.06,sy+.30,sz+.04],Math.PI/2,.42,[[sx,1.25,sz+.04]]),pitchLimits:[-.45,1.38]}});
 const bed=node('Bed_mattress'),[bx,bz,by]=bed.position,pillow=node('Pillow_01');const bedPoint=point([bx,1.0,bz+.57],[bx,bz+1.05],1.60);
 const lying={...pose([pillow.position[0],pillow.position[2]+.21,pillow.position[1]],Math.PI/2,.62,[[bx,1.18,bz+.57]]),pitchLimits:[-.40,1.38]};
 add('bed','床',names('Bed_').concat(names('Pillow'),names('Bedding'),['Cream_throw']),[bedPoint],[release('起床'),posture('sit','坐床边','sit',['standing','lie','sleep']),posture('lie','躺下','lie',['standing','sit','sleep']),{...posture('sleep','睡觉','sleep',['standing','sit','lie']),sleep:true}],{sit:pose([bx,by+.10+.75,bz+.61],Math.PI,-.12),lie:lying,sleep:lying});
 const toilet=node('Toilet_bowl'),[tx,tz]=toilet.position;
 add('toilet','马桶',names('Toilet_'),[point([tx,.98,tz-.12],[tx-.48,tz-.12],1.3)],[release('起身'),posture('use','坐下使用','use')],{use:pose([tx,1.14,tz-.10],0,-.08)});
 const wardrobe=node('Wardrobe_body');const wp=point([3.34,1.15,wardrobe.position[1]],[2.65,wardrobe.position[1]],1.4);
 const wardrobeTracks=[[-1,-1.20],[1,1.20]].map(([side,angle])=>{const n=node('Wardrobe_door'+side);return {type:'rotate',parts:[n.name,'Wardrobe_handle'+side],pivot:[n.position[0],n.position[2],n.position[1]+side*n.size[1]/2],axis:'y',amount:angle,collision:true};});
 toggle('wardrobe','衣柜',names('Wardrobe_').filter(n=>!n.includes('plant')),[wp],wardrobeTracks);configs.at(-1).openBodies=[{body:'Wardrobe_body',front:'-x',count:0}];
 for(const n of spec.nodes.filter(n=>n.name.startsWith('Desk_drawer_front'))){toggle(n.name,'书桌抽屉',[n.name,n.position[1]<2?'Desk_drawers':'Desk_drawers_01'],[point([n.position[0],n.position[2],n.position[1]],[1.3,n.position[1]],1.2)],[{type:'translate',parts:[n.name],offset:[.30,0,0],collision:true}]);configs.at(-1).openBodies=[{body:n.position[1]<2?'Desk_drawers':'Desk_drawers_01',front:'+x',count:0}];}
 // Solid cabinets have no separate front in the old model. Runtime face partitions
 // use their existing envelope; they never change the saved house or dimensions.
 for(const [body,front,kind,count]of [['Nightstand','-x','drawer',2],['Kitchen_cabinet','-z','door',2],['Vanity','-x','door',2]]){
  const n=node(body),[x,z,y]=n.position,[w,d,h]=n.size;
  for(let i=0;i<count;i++){const name=body+'_interactive_front'+i;let center,pivot,track,approach;
   if(front==='-x'){center=[x-w/2,y+(kind==='drawer'?(i-.5)*h/2:0),z+(kind==='drawer'?0:(i-.5)*d/2)];approach=[x-w/2-.48,center[2]];pivot=[center[0],center[1],center[2]+(i===0?-1:1)*d/4];track=kind==='drawer'?{type:'translate',parts:[name],offset:[-.22,0,0],collision:true}:{type:'rotate',parts:[name],pivot,axis:'y',amount:i===0?-1.20:1.20,collision:true};}
   else{center=[x+(i-.5)*w/2,y,z-d/2];approach=[center[0],z-d/2-.82];pivot=[center[0]+(i===0?-1:1)*w/4,y,center[2]];track={type:'rotate',parts:[name],pivot,axis:'y',amount:i===0?1.2:-1.2,collision:true};}
   toggle(name,body==='Nightstand'?'床头柜抽屉':body==='Vanity'?'洗手台柜门':'厨房柜门',[body,name],[point(center,approach,1.30)],[track]);configs.at(-1).frontPartition={body,front,kind,count,index:i,name};
  }
 }
 toggle('bath_door','卫生间移门',['Bath_slider_glass','Bath_slider_pull'],[point([2.30,1.10,8.0],[1.75,7.95],1.4),point([2.30,1.10,8.0],[2.78,7.95],1.4)],[{type:'translate',parts:['Bath_slider_glass','Bath_slider_pull'],offset:[0,0,.351],initial:1,collision:true}],'open',true,['开门','关门']);
 toggle('entry_door','入户门',['Entry_leaf_open','Entry_handle'],[point([.30,1.05,8.90],[.45,8.12],1.5)],[{type:'rotate',parts:['Entry_leaf_open','Entry_handle'],pivot:[.01,1.06,9.25],axis:'y',amount:-1.2566370614359172,initial:1,collision:true}],'open',true,['开门','关门']);
 toggle('curtains','米白窗帘',names('Curtain_fold'),[point([1.0,1.35,.11],[1.30,.65],1.7),point([3.0,1.35,.11],[2.65,.65],1.7)],[{type:'transform',parts:names('Curtain_fold0'),pivot:[.57,1.275,.11],closedOffset:[.71,0,0],closedScale:[3.5,1,1]},{type:'transform',parts:names('Curtain_fold1'),pivot:[3.43,1.275,.11],closedOffset:[-.71,0,0],closedScale:[3.5,1,1]}],'open',true,['打开窗帘','关闭窗帘']);
 toggle('sheer','白纱',['White_sheer_left'],[point([2.0,1.35,.06],[2.0,.70],1.6)],[{type:'transform',parts:['White_sheer_left'],pivot:[1.244,1.3,.06],closedOffset:[.756,0,0],closedScale:[2.30,1,1]}],'open',true,['打开白纱','关闭白纱']);
 for(const prefix of ['Desk_lamp','Bed_lamp','Floor_lamp']){const n=node(prefix+'_shade'),[x,z,y]=n.position;toggle(prefix,prefix==='Desk_lamp'?'书桌灯':prefix==='Bed_lamp'?'床头灯':'落地灯',names(prefix),[point([x,y,z],prefix==='Desk_lamp'?[1.0,z]:[x-.5,z],1.6)],[{type:'light',parts:[n.name],position:[x,y+.10,z],color:0xfff5e8,intensity:.85,distance:3.2}],'on',false,['开灯','关灯']);}
 toggle('laptop','笔记本电脑',['Desk_laptop_base','Desk_laptop_screen'],[point([.31,.95,dz],[1.50,dz],1.55)],[{type:'screen',parts:['Desk_laptop_screen']}],'on',false,['打开电脑','关闭电脑']);
 toggle('aircon','空调',names('Air_conditioner'),[point([.29,2.30,.43],[1.0,.75],2.0)],[{type:'emissive',parts:['Air_conditioner_slot'],color:0x719cb5,intensity:.8}],'on',false,['开启空调','关闭空调']);
 toggle('hob','灶具',names('Kitchen_hob').concat(names('Burner')),[point([1.908,.95,9.41],[1.91,8.62],1.3)],[{type:'emissive',parts:names('Burner'),color:0xe48244,intensity:.8}],'on',false,['打开灶具','关闭灶具']);
 toggle('shower','淋浴',names('Shower_'),[point([2.54,1.75,9.195],[2.92,8.80],1.6)],[{type:'water',parts:['Shower_head'],position:[2.54,2.03,9.195],length:1.80}],'on',false,['打开淋浴','关闭淋浴']);
 for(const [id,label,glass,axis]of [['living_window','客厅窗','Living_window_glass','z'],['bath_window','卫生间窗','Bath_window_glass','x'],['balcony_window','阳台玻璃门','Balcony_sliding_glass','x']]){const n=node(glass),[x,z,y]=n.position,w=axis==='x'?n.size[0]:n.size[1];const a=glass+'_interactive_pane';const b=glass+'_interactive_fixed';toggle(id,label,[a,b],[point([x,y,z],axis==='x'?[x,z+(z>spec.derived.total_depth/2?-.5:.5)]:[x-.5,z],1.7)],[{type:'translate',parts:[a],offset:axis==='x'?[w/2-.04,0,0]:[0,0,w/2-.04]}],'open',false,['打开','关闭']);configs.at(-1).glassPartition={body:glass,axis,names:[a,b]};}
 for(const c of configs){
  for(const point of c.interactionPoints)point.range=Math.min(point.range,c.id==='aircon'?1.35:c.id==='laptop'?1.25:1.15);
  if(c.animation.length){const types=c.animation.map(a=>a.type);c.duration=types.includes('transform')?1.15:types.includes('rotate')?.88:types.includes('translate')?.66:.38;}
  for(const [key,p]of Object.entries(c.cameraPose)){const lying=['lie','sleep'].includes(key);p.duration=lying?1.55:1.15;p.releaseDuration=lying?1.35:1.10;p.yawLimit=lying?1.50:1.30;p.pitchLimits=lying?[-.55,1.30]:[-.78,.95];}
 }
 return configs;
}
