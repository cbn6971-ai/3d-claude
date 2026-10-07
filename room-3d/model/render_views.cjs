// Headless QA renders of the four round-two inspection viewpoints (software WebGL).
// Usage: node model/render_views.cjs [outDir]   (needs Playwright + Chromium on the machine)
const path=require('node:path'),fs=require('node:fs'),http=require('node:http');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist'),out=path.resolve(process.argv[2]||path.join(dist,'checks'));
let chromium;try{({chromium}=require('playwright'));}catch{({chromium}=require(require.resolve('playwright',{paths:[process.execPath.replace(/bin\/node$/,'lib/node_modules')]})));}
// [file, eye position, look target, vertical fov] in viewer world metres (x, height, z).
const views=[
 ['view_bedroom_entry_to_balcony',[1.25,1.58,4.62],[2.05,1.05,0.0],68],
 ['view_bedfoot_to_headboard',[1.30,1.45,3.19],[3.95,0.78,3.19],66],
 ['view_desk_area',[1.85,1.45,3.15],[0.25,0.72,1.75],66],
 ['view_living_to_kitchen',[1.45,1.58,5.20],[1.62,0.90,9.70],68],
 ['qa_sofa',[2.30,1.35,7.10],[2.95,0.45,5.30],60],
 ['qa_bed_side',[2.40,1.30,4.75],[3.20,0.50,3.10],62],
 ['qa_nightstand',[3.05,1.10,4.85],[3.75,0.55,4.15],55],
 ['qa_chair',[1.75,1.25,1.55],[0.95,0.55,2.15],58],
 ['qa_wardrobe',[1.9,1.6,2.2],[3.5,1.2,0.7],62],
 ['view_aerial',[-5.5,9.5,13.5],[2.0,0.4,4.6],40]
];
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png'};
const server=http.createServer((q,r)=>{const f=path.join(dist,decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/,'/index.html'));if(!f.startsWith(dist)||!fs.existsSync(f)){r.writeHead(404);return r.end();}r.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r);});
(async()=>{
 await new Promise(ok=>server.listen(0,ok));fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
 const page=await browser.newPage({viewport:{width:900,height:1100},deviceScaleFactor:1});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(`http://127.0.0.1:${server.address().port}/index.html`);await page.waitForFunction(()=>window.roomBoot?.getState().ready,null,{timeout:90000});
 await page.addStyleTag({content:'#stage>*:not(#canvas),.toolbar,header,nav,#hint{visibility:hidden!important}'});
 for(const [name,pos,target,fov]of views){
  if(name==='view_aerial')await page.setViewportSize({width:1400,height:1000});
  await page.evaluate(([p,t,f,aerial])=>{if(aerial){window.roomViewer.setLayers({cutaway:true,ceiling:false});window.roomViewer.setMode('decoration');window.roomViewer.setView('all');}else window.roomViewer.setCameraPose(p,t,f);},[pos,target,fov,name==='view_aerial']);
  await page.waitForTimeout(name==='view_aerial'?900:400);await page.locator('#canvas').screenshot({path:path.join(out,name+'.png')});console.log('rendered',name);
 }
 // First-person roam (interactive scene with split doors/drawers) from the living-room spawn.
 await page.setViewportSize({width:900,height:1100});await page.evaluate(()=>window.roomViewer.setRoam(true));await page.waitForTimeout(900);await page.locator('#canvas').screenshot({path:path.join(out,'view_roam_spawn.png')});console.log('rendered view_roam_spawn');await page.evaluate(()=>window.roomViewer.setRoam(false));
 await browser.close();server.close();if(errors.length){console.error(errors);process.exitCode=1;}
})().catch(e=>{console.error(e);process.exitCode=1;server.close();});
