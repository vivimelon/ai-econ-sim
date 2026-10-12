const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {World}=require('./dist/society');

test('browser worker imports its dependencies and completes batches with real trades',()=>{
 const messages=[],imports=[],root=path.join(__dirname,'dist');
 const context=vm.createContext({postMessage:message=>messages.push(message)});
 context.importScripts=(...names)=>{for(const name of names){imports.push(name);vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),context,{filename:name})}};
 vm.runInContext(fs.readFileSync(path.join(root,'lab-worker.js'),'utf8'),context,{filename:'lab-worker.js'});
 context.onmessage({data:{count:12,minutes:120,seeds:[11]}});
 assert.equal(messages.find(m=>m.type==='error'),undefined);
 const complete=messages.find(m=>m.type==='complete');assert(complete);
 assert.deepEqual(imports,['labor-value.js','society.js']);
 assert.equal(complete.result.runs.length,5);
 assert.equal(messages.filter(m=>m.type==='progress').length,5);
 const mixed=complete.result.runs.find(r=>r.case==='Mixed village');
 assert(mixed.trades>0,'Exercise the labor accounting path, not just idle ticks');
 const direct=new World({count:12,seed:11,scenario:'balanced'});direct.advance(120);
 assert.deepEqual(JSON.parse(JSON.stringify(mixed)),{case:'Mixed village',seed:11,...direct.metrics()});
});
