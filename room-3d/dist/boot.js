// This small classic script runs independently of the 3D engine and import maps.
(function(){
 var overlay=document.getElementById('loading'),text=document.getElementById('loading-text'),spinner=document.querySelector('.spinner');
 var actions=document.getElementById('loading-actions'),preview=document.getElementById('fallback-preview'),panel=document.getElementById('sidebar');
 var state={phase:'engine',ready:false,failed:false},timer;
 function setPanel(open){panel.classList.toggle('open',open);if(open)panel.querySelectorAll('img[data-src]').forEach(function(img){if(!img.getAttribute('src'))img.src=img.dataset.src;});document.getElementById('panel-toggle').setAttribute('aria-expanded',String(open));}
 function progress(message){if(state.failed)return;text.textContent=message;state.phase=message;}
 function fail(message){if(state.failed)return;clearTimeout(timer);state.failed=true;state.ready=false;overlay.style.display='flex';overlay.style.pointerEvents='auto';overlay.classList.add('load-error');spinner.hidden=true;text.textContent=message;actions.hidden=false;preview.hidden=false;if(!preview.getAttribute('src'))preview.src=preview.dataset.src;document.querySelectorAll('[data-view],[data-mode],[data-move],#roam-toggle').forEach(function(b){b.disabled=true;});}
 function ready(){clearTimeout(timer);state.ready=true;state.failed=false;state.phase='ready';overlay.style.display='none';overlay.style.pointerEvents='none';preview.hidden=true;document.querySelectorAll('[data-view],[data-mode],[data-move],#roam-toggle').forEach(function(b){b.disabled=false;});}
 document.getElementById('panel-toggle').onclick=function(){setPanel(!panel.classList.contains('open'));};
 document.getElementById('panel-close').onclick=function(){setPanel(false);};
 document.getElementById('retry-loading').onclick=function(){var next=new URL(location.href);next.searchParams.set('reload',String(Date.now()));location.replace(next.href);};
 window.roomBoot={progress:progress,fail:fail,ready:ready,setPanel:setPanel,getState:function(){return Object.assign({},state);}};
 window.addEventListener('error',function(e){if(!state.ready)fail('3D显示未能启动，可重新加载或先查看校验图。');});
 window.addEventListener('unhandledrejection',function(){if(!state.ready)fail('3D显示未能启动，可重新加载或先查看校验图。');});
 document.querySelectorAll('[data-view],[data-mode],[data-move],#roam-toggle').forEach(function(b){b.disabled=true;});
 timer=setTimeout(function(){if(!state.ready)fail('加载时间较长，可重新加载或先查看校验图。');},25000);
 // The engine follows inline; no script download can hold the page load event.
})();
