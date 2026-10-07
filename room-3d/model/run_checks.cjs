const path=require('node:path'),fs=require('node:fs'),{spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),extra=(process.env.ROOM_BUILD_DEPENDENCIES||'').split(path.delimiter).filter(Boolean),esbuild=require(require.resolve('esbuild',{paths:[root,...extra]}));
fs.mkdirSync(path.join(root,'.sites-runtime'),{recursive:true});
for(const name of ['mobile','life','furnishing']){const out=path.join(root,'.sites-runtime',name+'_checks.cjs');esbuild.buildSync({entryPoints:[path.join(root,'model',name+'_checks.js')],outfile:out,bundle:true,platform:'node',format:'cjs',nodePaths:extra.map(p=>path.join(p,'node_modules'))});const r=spawnSync(process.execPath,[out],{cwd:root,stdio:'inherit'});if(r.status!==0)process.exit(r.status||1);}
fs.copyFileSync(path.join(root,'dist/life_checks.json'),path.join(root,'dist/roam_checks.json'));
const integration=spawnSync(process.execPath,[path.join(root,'model/viewer_integration_checks.cjs')],{cwd:root,stdio:'inherit'});if(integration.status!==0)process.exit(integration.status||1);
