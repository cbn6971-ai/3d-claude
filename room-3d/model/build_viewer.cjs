// Rebuild the mobile-compatible viewer after editing parameters or viewer.js.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
const extra=(process.env.ROOM_BUILD_DEPENDENCIES||'').split(path.delimiter).filter(Boolean);
const esbuild=require(require.resolve('esbuild',{paths:[root,...extra]}));
(async()=>{
 const result=await esbuild.build({entryPoints:[path.join(dist,'viewer.js')],bundle:true,minify:true,format:'iife',target:['safari14','chrome90'],write:false,nodePaths:extra.map(p=>path.join(p,'node_modules')),legalComments:'eof'});
 const content=result.outputFiles[0].contents,hash=crypto.createHash('sha256').update(content).digest('hex').slice(0,12),name='viewer.'+hash+'.js';
 for(const f of fs.readdirSync(dist))if(/^viewer\.[a-f0-9]{12}\.js$/.test(f))fs.unlinkSync(path.join(dist,f));
 fs.writeFileSync(path.join(dist,name),content);
 const seed={document:JSON.parse(fs.readFileSync(path.join(dist,'parameters.json'))),scene:JSON.parse(fs.readFileSync(path.join(dist,'scene.json'))),interactions:JSON.parse(fs.readFileSync(path.join(dist,'interaction_config.json')))};
 let html=fs.readFileSync(path.join(dist,'index.html'),'utf8');
 html=html.replace(/<script\s+type="importmap">[\s\S]*?<\/script>/,'');
 html=html.replace(/<script id="room-seed" type="application\/json">[\s\S]*?<\/script>/,'');
 html=html.replace(/<script id="room-boot"[\s\S]*?<\/script>/,'');
 html=html.replace(/<script id="room-engine"[\s\S]*?<\/script>/,'');
 html=html.replace(/<style id="room-style">[\s\S]*?<\/style>/,'').replace(/<link rel="stylesheet" href="style.css">/,'');
 html=html.replace('</head>',()=>'<style id="room-style">'+fs.readFileSync(path.join(dist,'style.css'),'utf8')+'</style></head>');
 html=html.replace(/<script[^>]*src="(?:viewer(?:\.[a-f0-9]{12})?\.js|boot\.js(?:\?[^"]*)?)"[^>]*><\/script>/g,'');
 const boot=fs.readFileSync(path.join(dist,'boot.js'),'utf8');
 html=html.replace('</body>',()=>'<script id="room-seed" type="application/json">'+JSON.stringify(seed).replace(/</g,'\\u003c')+'</script><script id="room-boot">'+boot+'</script><script id="room-engine">'+Buffer.from(content).toString('utf8').replace(/<\/script/gi,'<\\/script')+'</script></body>');
 fs.writeFileSync(path.join(dist,'index.html'),html);
 console.log(JSON.stringify({bundle:name,bytes:content.length,inlineSeedBytes:JSON.stringify(seed).length}));
})().catch(e=>{console.error(e);process.exitCode=1;});
