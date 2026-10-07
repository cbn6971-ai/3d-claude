import * as THREE from 'three';

// Touch Events avoid depending on pointer capture in iOS embedded browsers.
export function bindTouchNavigation(element,controls,getCamera,wake){
 let previous=null;
 const read=touches=>{const points=Array.from(touches).slice(0,2);return {count:points.length,x:points.reduce((a,p)=>a+p.clientX,0)/points.length,y:points.reduce((a,p)=>a+p.clientY,0)/points.length,distance:points.length===2?Math.hypot(points[1].clientX-points[0].clientX,points[1].clientY-points[0].clientY):0};};
 const prevent=e=>{if(e.cancelable)e.preventDefault();e.stopPropagation();};
 function start(e){prevent(e);previous=read(e.touches);wake();}
 function move(e){prevent(e);const next=read(e.touches);if(!previous||next.count!==previous.count||!next.count){previous=next;return;}
  const camera=getCamera(),height=Math.max(element.clientHeight,1),dx=next.x-previous.x,dy=next.y-previous.y;
  const offset=camera.position.clone().sub(controls.target);
  if(next.count===1){const spherical=new THREE.Spherical().setFromVector3(offset);spherical.theta-=2*Math.PI*dx/height;spherical.phi=THREE.MathUtils.clamp(spherical.phi-2*Math.PI*dy/height,Math.max(.01,controls.minPolarAngle),Math.min(Math.PI-.01,controls.maxPolarAngle));camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(spherical));}
  else {
   const ratio=previous.distance>1?THREE.MathUtils.clamp(next.distance/previous.distance,.5,2):1;
   if(camera.isOrthographicCamera){camera.zoom=THREE.MathUtils.clamp(camera.zoom*ratio,.25,12);camera.updateProjectionMatrix();}
   else {offset.setLength(THREE.MathUtils.clamp(offset.length()/ratio,controls.minDistance,controls.maxDistance));camera.position.copy(controls.target).add(offset);}
   camera.updateMatrixWorld();const scale=camera.isOrthographicCamera?(camera.top-camera.bottom)/camera.zoom/height:2*offset.length()*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))/height;
   const pan=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0).multiplyScalar(-dx*scale).add(new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1).multiplyScalar(dy*scale));camera.position.add(pan);controls.target.add(pan);
  }
  camera.lookAt(controls.target);controls.update();previous=next;wake();
 }
 function end(e){prevent(e);previous=e.touches.length?read(e.touches):null;wake();}
 function cancel(e){prevent(e);previous=null;wake();}
 const handlers={touchstart:start,touchmove:move,touchend:end,touchcancel:cancel,gesturestart:prevent,gesturechange:prevent};
 element.style.touchAction='none';for(const [name,fn]of Object.entries(handlers))element.addEventListener(name,fn,{passive:false});
 return ()=>{for(const [name,fn]of Object.entries(handlers))element.removeEventListener(name,fn);};
}
