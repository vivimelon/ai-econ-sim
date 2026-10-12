/* Socially necessary labour-time benchmark. This is an accounting reference,
   not a price or a currency; it deliberately has no dependency on an agent's skill. */
(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.LaborValue=api})(typeof globalThis!=='undefined'?globalThis:this,()=>{
'use strict';
function referenceLaborValues(recipes,resourceMinutes,productivity={}){
 const values={};
 for(const [name,minutes] of Object.entries(resourceMinutes)){
  if(!Number.isFinite(minutes)||minutes<0)throw Error(`Invalid resource labour for ${name}`);
  values[name]=minutes;
 }
 const visiting=new Set();
 function value(name){
  if(Object.hasOwn(values,name))return values[name];
  const recipe=recipes[name];if(!recipe)throw Error(`No recipe or resource labour for ${name}`);
  if(visiting.has(name))throw Error(`Circular recipe dependency at ${name}`);
  const direct=recipe.time,output=recipe.output??1,factor=productivity[name]??1;
  if(!Number.isFinite(direct)||direct<0||!Number.isFinite(output)||output<=0||!Number.isFinite(factor)||factor<=0)throw Error(`Invalid recipe values for ${name}`);
  visiting.add(name);
  const inputs=Object.entries(recipe.inputs||{}).reduce((sum,[item,amount])=>{
   if(!Number.isFinite(amount)||amount<0)throw Error(`Invalid recipe input ${name}.${item}`);
   return sum+amount*value(item);
  },0);
  visiting.delete(name);
  values[name]=(direct*factor+inputs)/output;
  return values[name];
 }
 for(const name of Object.keys(recipes))value(name);
 return values;
}
function basketLaborCost(values,basket){
 return Object.entries(basket).reduce((sum,[good,amount])=>{
  if(!Number.isFinite(amount)||amount<0||!Number.isFinite(values[good]))throw Error(`Invalid basket item ${good}`);
  return sum+amount*values[good];
 },0);
}
return{referenceLaborValues,basketLaborCost};
});
