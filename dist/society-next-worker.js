importScripts('society-next.js','society-experiments.js');
onmessage=event=>{try{postMessage({type:'complete',result:SocietyExperiments.run(event.data,p=>postMessage({type:'progress',...p}))})}catch(error){postMessage({type:'error',message:error.message})}};
