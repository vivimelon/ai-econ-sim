const {test}=require('node:test');
const assert=require('node:assert/strict');
const {referenceLaborValues,basketLaborCost}=require('./dist/labor-value');
const recipes={
 tool:{inputs:{timber:2,ore:1},time:4},
 cloth:{inputs:{fibre:2},time:3},
 coat:{inputs:{cloth:1,fibre:1},time:4},
 battery:{inputs:{ore:1,water:1},time:4},
 lamp:{inputs:{ore:1,energy:1},time:3}
};
const resources={food:2,fibre:1.5,timber:2,ore:3,water:.5,energy:2};

test('reference labor includes standard production time and the labor embodied in inputs',()=>{
 const v=referenceLaborValues(recipes,resources);
 assert.equal(v.tool,11);
 assert.equal(v.cloth,6);
 assert.equal(v.coat,11.5);
 assert.equal(v.battery,7.5);
 assert.equal(v.lamp,8);
});

test('productivity improvements lower reference labor without changing past goods',()=>{
 const before=referenceLaborValues(recipes,resources);
 const after=referenceLaborValues(recipes,resources,{tool:.5});
 assert.equal(before.tool,11);
 assert.equal(after.tool,9);
 assert.equal(before.coat,11.5);
 assert.equal(after.coat,11.5);
});

test('batch output divides total socially necessary labor per unit',()=>{
 const v=referenceLaborValues({nails:{inputs:{ore:2},time:3,output:10}},resources);
 assert.equal(v.nails,.9);
});

test('basket labor cost gives a stable comparison yardstick',()=>{
 const v=referenceLaborValues(recipes,resources);
 assert.equal(basketLaborCost(v,{food:2,coat:1}),15.5);
});

test('invalid and circular recipe data are rejected clearly',()=>{
 assert.throws(()=>referenceLaborValues({a:{inputs:{b:1},time:1},b:{inputs:{a:1},time:1}},{}),/Circular recipe/);
 assert.throws(()=>referenceLaborValues({a:{inputs:{missing:1},time:1}},{}),/No recipe or resource labour/);
 assert.throws(()=>referenceLaborValues({a:{inputs:{},time:1}}, {}, {a:0}),/Invalid recipe/);
});
