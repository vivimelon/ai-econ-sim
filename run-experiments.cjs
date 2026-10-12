const fs=require('fs');const {World}=require('./dist/society');
const seeds=[11,42,73,104,135,166,197,228],count=12,minutes=1440;
const cases=[{name:'Mixed village',scenario:'balanced'},{name:'Food shortage',scenario:'scarcity'},{name:'Shortage without gossip',scenario:'scarcity',gossip:false},{name:'Shortage without institutions',scenario:'scarcity',institutions:false},{name:'Shortage, all OCEAN = 50',scenario:'scarcity',traits:{O:50,C:50,E:50,A:50,N:50}}];
const runs=[],start=performance.now();
for(const config of cases){for(const seed of seeds){const w=new World({...config,count,seed});for(let m=0;m<minutes;m+=60){w.advance(60);w.validate()}runs.push({case:config.name,seed,...w.metrics(),snapshotBytes:Buffer.byteLength(JSON.stringify(w.snapshot()))})}console.log(config.name,'complete')}
const result={engineVersion:1,count,minutes,seeds,runs,durationMs:Math.round(performance.now()-start)};fs.writeFileSync('dist/experiments.json',JSON.stringify(result,null,2));
for(const {name}of cases){const group=runs.filter(r=>r.case===name);console.log(name,JSON.stringify(Object.fromEntries(['trades','meanHunger','gossip','breached','thefts','mediations','repeatMediators','associations','discoveries','foodGini'].map(k=>[k,+(group.reduce((v,r)=>v+r[k],0)/group.length).toFixed(2)]))))}
