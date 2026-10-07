import * as THREE from 'three';
import {isWalkable,Walker} from './roam_physics.js';
import {createInteractionConfig} from './interaction_config.js';
import {buildInteractiveScene} from './interactive_scene.js';
import {InteractionSystem} from './interaction_system.js';
import {HandRig} from './first_person_hands.js';

// One lazy, first-person controller. Viewer input is managed by its existing owner.
export class RoamController {
 constructor({scene,camera,spec,interactionConfigs,modelDoc,wallClip,originalModel,hud,joystick,knob,lookZone,onWake,document:doc=document}){
  Object.assign(this,{scene,camera,spec,originalModel,hud,joystick,knob,lookZone,onWake,doc});this.configs=interactionConfigs||createInteractionConfig(spec);this.adapter=buildInteractiveScene(modelDoc,spec,wallClip,this.configs);scene.add(this.adapter.root);this.world=this.adapter.world;
  const candidates=[{x:1.2,z:spec.derived.bedroom_depth+1.1},{x:.65,z:spec.derived.bedroom_depth+1.4}],spawn=candidates.find(p=>isWalkable(this.world,p.x,p.z));if(!spawn)throw Error('客厅出生点没有足够空间');
  this.walker=new Walker(this.world,spawn);this.hands=new HandRig({adapter:this.adapter,camera});this.interactions=new InteractionSystem({configs:this.configs,adapter:this.adapter,camera,walker:this.walker,onWake,hands:this.hands});this.active=false;this.input={x:0,y:0};this.keys=new Set();this.listeners=[];this.joystickId=null;this.lookId=null;this.lastTime=null;this.menuOpen=false;this.uiSignature='';
  this.prompt=hud.querySelector('#interaction-prompt');this.button=hud.querySelector('#interaction-button');this.more=hud.querySelector('#interaction-more');this.choices=hud.querySelector('#interaction-choices');this.caption=hud.querySelector('#interaction-caption');this.sleepOverlay=hud.querySelector('#sleep-overlay');this.notice=hud.querySelector('#interaction-notice');this.promptAlpha=0;this.displayFocus=null;
 }
 get yaw(){return this.interactions.look.yaw;}get pitch(){return this.interactions.look.pitch;}
 listen(target,name,fn,options){target.addEventListener(name,fn,options);this.listeners.push(()=>target.removeEventListener(name,fn,options));}
 prevent(e){if(e.cancelable)e.preventDefault();e.stopPropagation();}
 enter(){if(this.active)return;this.active=true;this.walker.reset();this.input={x:0,y:0};this.lastTime=null;this.menuOpen=false;this.uiSignature='';this.promptAlpha=0;this.displayFocus=null;this.prompt.style.opacity='0';this.hud.hidden=false;this.originalModel.visible=false;this.adapter.root.visible=true;this.interactions.start();
  const joyUpdate=e=>{const b=this.joystick.getBoundingClientRect(),x=e.clientX-b.left-b.width/2,y=e.clientY-b.top-b.height/2,length=Math.hypot(x,y),scale=Math.max(36,length);this.input={x:x/scale,y:y/scale};this.knob.style.transform=`translate(${this.input.x*36}px,${this.input.y*36}px)`;this.menuOpen=false;this.onWake();};
  const joyDown=e=>{this.prevent(e);if(this.joystickId!==null)return;this.joystickId=e.pointerId;this.joystick.setPointerCapture?.(e.pointerId);joyUpdate(e);};
  const joyMove=e=>{if(e.pointerId!==this.joystickId)return;this.prevent(e);joyUpdate(e);};
  const joyUp=e=>{if(e.pointerId!==this.joystickId)return;this.prevent(e);this.joystickId=null;this.input={x:0,y:0};this.knob.style.transform='translate(0px,0px)';this.onWake();};
  const lookDown=e=>{this.prevent(e);if(this.lookId!==null)return;this.lookId=e.pointerId;this.lookZone.setPointerCapture?.(e.pointerId);this.lookPrevious={x:e.clientX,y:e.clientY};this.menuOpen=false;this.onWake();};
  const lookMove=e=>{if(e.pointerId!==this.lookId)return;this.prevent(e);this.interactions.turn(e.clientX-this.lookPrevious.x,e.clientY-this.lookPrevious.y);this.lookPrevious={x:e.clientX,y:e.clientY};};
  const lookUp=e=>{if(e.pointerId!==this.lookId)return;this.prevent(e);this.lookId=null;this.onWake();};
  for(const [target,down,move,up]of [[this.joystick,joyDown,joyMove,joyUp],[this.lookZone,lookDown,lookMove,lookUp]]){this.listen(target,'pointerdown',down,{passive:false});this.listen(target,'pointermove',move,{passive:false});for(const n of ['pointerup','pointercancel','lostpointercapture'])this.listen(target,n,up,{passive:false});this.listen(target,'touchmove',e=>this.prevent(e),{passive:false});this.listen(target,'gesturestart',e=>this.prevent(e),{passive:false});}
  this.listen(this.button,'click',e=>{this.prevent(e);if(this.button.disabled||this.displayFocus?.config.id!==this.interactions.focus?.config.id)return;const action=this.interactions.available(this.interactions.focus?.config)[0];if(action)this.perform(action.id);});
  this.listen(this.more,'click',e=>{this.prevent(e);this.menuOpen=!this.menuOpen;this.uiSignature='';this.onWake();});
  const allowed=['w','a','s','d','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];this.listen(this.doc,'keydown',e=>{if(allowed.includes(e.key)){e.preventDefault();this.keys.add(e.key);this.menuOpen=false;this.onWake();}else if(e.key==='e'||e.key==='E'){if(e.repeat)return;const a=this.interactions.available(this.interactions.focus?.config)[0];if(a)this.perform(a.id);}});this.listen(this.doc,'keyup',e=>{this.keys.delete(e.key);this.onWake();});this.listen(this.doc,'visibilitychange',()=>this.resetInput());this.listen(this.doc.defaultView||this.doc,'blur',()=>this.resetInput());
  this.update(0);this.onWake();
 }
 perform(actionId,objectId){const success=this.interactions.execute(actionId,objectId);if(success){this.resetInput();this.menuOpen=false;this.uiSignature='';this.onWake();}return success;}
 resetInput(){for(const [target,id]of [[this.joystick,this.joystickId],[this.lookZone,this.lookId]]){try{if(id!==null&&target.hasPointerCapture?.(id))target.releasePointerCapture(id);}catch{}}this.joystickId=this.lookId=null;this.input={x:0,y:0};this.keys.clear();this.knob.style.transform='translate(0px,0px)';this.lastTime=null;}
 exit(){if(!this.active)return;this.active=false;this.resetInput();this.listeners.splice(0).forEach(remove=>remove());this.walker.velocity={x:0,z:0};this.interactions.stop();this.adapter.root.visible=false;this.originalModel.visible=true;this.hud.hidden=true;this.choices.replaceChildren();this.menuOpen=false;}
 renderUI(dt){const system=this.interactions,current=system.focus,changed=this.displayFocus?.config.id!==current?.config.id;
  const target=current&&!changed?1:0,step=dt/(target ? .18 : .12);this.promptAlpha=THREE.MathUtils.clamp(this.promptAlpha+(target?step:-step),0,1);
  if(changed&&this.promptAlpha===0){this.displayFocus=current;this.menuOpen=false;}
  const focus=this.displayFocus,actions=system.available(focus?.config),busy=!!system.motion||system.animations.size>0,disabled=!!system.motion||changed||this.promptAlpha<.6||(system.animations.size>0&&!['toggle','set'].includes(actions[0]?.kind)),sig=JSON.stringify([focus?.config.id,actions.map(a=>[a.id,a.label]),busy,disabled,this.menuOpen,system.message]);
  this.prompt.style.opacity=String(this.promptAlpha);this.prompt.style.transform=`translateX(-50%) translateY(${(1-this.promptAlpha)*3}px)`;this.prompt.hidden=!focus||!actions.length;this.button.disabled=disabled;
  this.sleepOverlay.style.opacity=String(system.sleepAmount*.97);this.notice.textContent=system.message;this.notice.hidden=!system.message;if(sig!==this.uiSignature){this.uiSignature=sig;
  if(focus){this.caption.textContent=focus.config.label+(system.occupied?' · '+system.occupied.action.label:'');this.button.textContent=actions[0]?.label||'交互';this.more.hidden=actions.length<2||busy;this.choices.hidden=!this.menuOpen||busy;this.choices.replaceChildren();
  if(this.menuOpen&&!busy)for(const action of actions){const b=this.doc.createElement('button');b.type='button';b.textContent=action.label;b.onclick=e=>{this.prevent(e);this.perform(action.id);};this.choices.append(b);}
  }}return changed||Math.abs(this.promptAlpha-target)>.001;
 }
 update(t){if(!this.active)return false;const dt=this.lastTime===null?1/60:Math.min(.05,Math.max(.001,(t-this.lastTime)/1000));this.lastTime=t;const input={...this.input};if(this.keys.has('w')||this.keys.has('ArrowUp'))input.y-=1;if(this.keys.has('s')||this.keys.has('ArrowDown'))input.y+=1;if(this.keys.has('a')||this.keys.has('ArrowLeft'))input.x-=1;if(this.keys.has('d')||this.keys.has('ArrowRight'))input.x+=1;const moving=Math.hypot(input.x,input.y)>.08;
  if(!this.interactions.locked)this.walker.update(dt,input,this.yaw);else{this.walker.velocity={x:0,z:0};this.walker.speed=0;}const active=this.interactions.update(dt,t/1000,moving),uiActive=this.renderUI(dt);return active||uiActive||moving||Math.hypot(this.walker.velocity.x,this.walker.velocity.z)>.002||this.lookId!==null;
 }
 getState(){return {active:this.active,position:{...this.walker.position},velocity:{...this.walker.velocity},yaw:this.yaw,pitch:this.pitch,joystickPointer:this.joystickId,lookPointer:this.lookId,listeners:this.listeners.length,colliders:this.world.boxes.length,...this.interactions.getState()};}
 dispose(){this.exit();this.adapter.dispose();}
}
