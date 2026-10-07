// Headless QA renders of first-person hand gestures in the real page (software WebGL).
// Usage: node model/render_interactions.cjs [outDir]
const path=require('node:path'),fs=require('node:fs'),http=require('node:http');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist'),out=path.resolve(process.argv[2]||path.join(dist,'checks','round3'));
let chromium;try{({chromium}=require('playwright'));}catch{({chromium}=require(require.resolve('playwright',{paths:[process.execPath.replace(/bin\/node$/,'lib/node_modules')]})));}
const configs=JSON.parse(fs.readFileSync(path.join(dist,'interaction_config.json')));
// [file, object id, action id, phase to capture, extra wait ms, approach override]
const shots=[
 ['idle_hands',null,null,null,0,[1.2,6.6]],
 ['drawer_reach','Desk_drawer_front_02','toggle','reach',260],
 ['drawer_pull','Desk_drawer_front_02','toggle','drive',350],
 ['drawer_open',null,null,null,900],
 ['wardrobe_swing','wardrobe','toggle','drive',300],
 ['toilet_lid','toilet','lid','drive',150],
 ['hob_turn','hob_front','ignite','drive',60],
 ['hob_flame_high','hob_front','high','retract',300],
 ['hood_press','range_hood','toggle','contact',0],
 ['lamp_press','Bed_lamp','toggle','contact',0],
 ['nightstand_drawer','Nightstand_interactive_front1','toggle','drive',350]
];
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png'};
const server=http.createServer((q,r)=>{const f=path.join(dist,decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/,'/index.html'));if(!f.startsWith(dist)||!fs.existsSync(f)){r.writeHead(404);return r.end();}r.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r);});
(async()=>{
 await new Promise(ok=>server.listen(0,ok));fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const page=await browser.newPage({viewport:{width:430,height:860},deviceScaleFactor:1});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 // Freeze the game clock once the wanted gesture phase has run for `wait` ms, so a slow
 // software renderer captures exactly that moment.
 await page.addInitScript(()=>{const raf=window.requestAnimationFrame.bind(window);let frozen=null,start=null;window.__qa={phase:null,wait:0,reset(){frozen=null;start=null;this.phase=null;}};
  window.requestAnimationFrame=cb=>raf(t=>{const q=window.__qa,g=window.roomViewer?.getState().roam.hands?.gesture;if(q.phase&&frozen===null&&g?.phase===q.phase){if(start===null)start=t;if(t-start>=q.wait)frozen=t;}cb(frozen??t);});});
 await page.goto(`http://127.0.0.1:${server.address().port}/index.html`);await page.waitForFunction(()=>window.roomBoot?.getState().ready,null,{timeout:90000});
 await page.addStyleTag({content:'#roam-joystick,#roam-exit,.toolbar,header,nav,#hint,#interaction-prompt{visibility:hidden!important}'});
 for(const [name,id,action,phase,wait,place]of shots){
  if(id||place){const c=id&&configs.find(c=>c.id===id),p=c?c.interactionPoints[0]:null,a=place||p.approach,target=p?p.position:[a[0],1.4,a[1]-1];
   const dx=target[0]-a[0],dy=target[1]-1.62,dz=target[2]-a[1];await page.evaluate(([x,z,yaw,pitch])=>window.roomViewer.roamPlace(x,z,yaw,pitch),[a[0],a[1],Math.atan2(-dx,-dz),Math.atan2(dy,Math.hypot(dx,dz))]);await page.waitForTimeout(250);
   if(action){await page.evaluate(([ph,w])=>{window.__qa.reset();window.__qa.phase=ph;window.__qa.wait=w;},[phase,wait]);const ok=await page.evaluate(([act,obj])=>window.roomViewer.interact(act,obj),[action,id]);if(!ok)console.log('not executed',name);
    await page.waitForFunction(()=>{const g=window.roomViewer.getState().roam.hands?.gesture;return g&&g.phase===window.__qa.phase;},null,{timeout:30000}).catch(()=>console.log('phase timeout',name));await page.waitForTimeout(Math.max(500,wait*5));}}
  else await page.waitForTimeout(wait);
  await page.locator('#canvas').screenshot({path:path.join(out,name+'.png')});await page.evaluate(()=>window.__qa.reset());console.log('rendered',name);
 }
 await browser.close();server.close();if(errors.length){console.error(errors);process.exitCode=1;}
})().catch(e=>{console.error(e);process.exitCode=1;server.close();});
