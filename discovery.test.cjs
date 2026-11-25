const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const finder = require('./discovery.js');
const context = vm.createContext({TasteFinder:finder});
vm.runInContext(fs.readFileSync('places.js','utf8'),context);
vm.runInContext(fs.readFileSync('map-data.js','utf8'),context);
const html=fs.readFileSync('index.html','utf8');
const inline=html.slice(html.indexOf('const locationsData = ['),html.indexOf('const byId ='));
vm.runInContext(inline,context);
const places=vm.runInContext('places',context);
const find=state=>finder.find(places,state);

test('all 77 places retain details and distinct branches',()=>{
  assert.equal(places.length,77);
  assert.equal(new Set(places.map(p=>p.name)).size,77);
  assert.equal(places.filter(p=>p.name.includes('ჭაშნაგირი')).length,2);
  for(const place of places){assert.ok(Array.isArray(place.story));assert.ok(place.dishes.length);assert.ok(place.maps || place.mapsUrl || place.branches?.length);}
});
test('Georgian natural request combines city and dish',()=>{
  const matches=find({query:'მინდა ხინკალი ქუთაისში'});
  assert.ok(matches.length);
  assert.ok(matches.every(p=>p.city.startsWith('ქუთაისი') && p.foods.includes('ხინკალი')));
  assert.ok(matches[0].name.includes('ელ დეპო'));
});
test('English natural request combines cuisine and budget',()=>{
  const matches=find({query:'I want Georgian food; budget friendly'});
  assert.ok(matches.length);
  assert.ok(matches.every(p=>p.budget===1 && p.cuisines.includes('ქართული')));
});
test('all selected filters intersect and unknown budgets never pass',()=>{
  const matches=find({area:'თბილისი',cuisine:'ქართული',food:'ხინკალი',budget:'1'});
  assert.ok(matches.length);
  assert.ok(matches.every(p=>p.city==='თბილისი' && p.budget===1 && p.foods.includes('ხინკალი')));
  assert.ok(find({budget:'1'}).every(p=>p.googlePrice || p.branches?.every(b=>b.googlePrice)));
});
test('road preset contains all four requested stops',()=>{
  const matches=find({area:'ბორჯომის გზა'});
  assert.equal(matches.length,4);
  for(const name of ['ლოქო','ფორია','ნიავი','კევრი']) assert.ok(matches.some(p=>p.name.includes(name)));
});
test('restaurant names, aliases and branch addresses are searchable',()=>{
  assert.equal(find({query:'Pirosmani'})[0].name,'რესტორანი „ფიროსმანი“');
  assert.equal(find({query:'100 khinkali'}).length,1);
  assert.equal(find({query:'ჭაშნაგირი ბელიაშვილი'}).length,1);
  assert.equal(find({query:'გობრონიძის'}).length,1);
  assert.equal(find({query:'ორი ტონა'}).length,1);
});
test('budget sort puts unknown tiers last and clear state returns everything',()=>{
  const sorted=find({sort:'budget'});
  assert.equal(sorted[0].budget,1);
  assert.equal(sorted.at(-1).budget,undefined);
  assert.equal(find({query:'',category:'ყველა'}).length,77);
  assert.equal(find({query:'no-such-restaurant-abc'}).length,0);
});

test('all 77 cards and all 84 branch pins use exact audited identifiers',()=>{
  const pins=places.flatMap(p=>p.branches?.length?p.branches:[p]);
  assert.equal(pins.length,84);
  assert.equal(new Set(pins.map(p=>p.mapsUrl)).size,84);
  for(const pin of pins){
    const url=new URL(pin.mapsUrl);
    assert.equal(url.hostname,'www.google.com');
    assert.ok(url.searchParams.has('cid') || url.searchParams.has('query_place_id'));
    assert.ok(pin.verifiedAddress);
    assert.equal(pin.mapCheckedAt,'2026-11-25');
  }
});
test('per-person means are calculated solely from the exact Google range',()=>{
  const pins=places.flatMap(p=>p.branches?.length?p.branches:[p]);
  assert.equal(pins.filter(p=>p.googlePrice).length,68);
  for(const pin of pins){
    const price=pin.googlePrice;
    if(!price)continue;
    assert.equal(price.sourceUrl,pin.mapsUrl);
    assert.ok(price.sampleCount>0);
    if(price.max===null)assert.equal(price.average,null);
    else assert.equal(price.average,(price.min+price.max)/2);
  }
  assert.equal(find({query:'El Depo'})[0].googlePrice.average,15);
  assert.equal(find({query:'Niavi'})[0].googlePrice.average,30);
});
test('an open upper bound stays open and a missing Google price never uses a menu tier',()=>{
  const mill=find({query:'წისქვილი ბელიაშვილი'})[0];
  assert.equal(mill.googlePrice.max,null);
  assert.equal(mill.googlePrice.average,null);
  assert.equal(finder.priceLabel(mill),'100 ₾-დან / ადამიანი');
  const house=find({query:'ქართული სახლი'})[0];
  assert.equal(house.googlePrice,null);
  assert.equal(house.budget,undefined);
  assert.ok(!find({budget:'2'}).some(p=>p.name===house.name));
});
test('different branches retain individual maps and individual price estimates',()=>{
  const tona=find({query:'ორი ტონა'})[0];
  assert.equal(tona.branches.length,4);
  assert.equal(tona.branches[0].googlePrice.average,50);
  assert.equal(tona.branches[1].googlePrice.average,60);
  assert.equal(finder.priceLabel(tona),'50–60 ₾ / ადამიანი');
});

test('new dishes and cuisines are discoverable in Georgian and English',()=>{
  assert.ok(find({query:'pizza'}).some(p=>p.name==='ნაპოლი'));
  assert.ok(find({cuisine:'იაპონური',food:'სუში'}).some(p=>p.name.includes('ოიში')));
  assert.ok(find({query:'gnocchi'}).some(p=>p.name==='ლოლიტა'));
  assert.ok(find({query:'დონატი'}).some(p=>p.name==='დოდონატი'));
  assert.ok(find({query:'სენდვიჩი'}).some(p=>p.name.includes('წიწილა')));
  assert.ok(find({area:'ზუგდიდი',food:'ქაბაბი'}).some(p=>p.name==='დიარონი'));
});
test('requested corrections retain one Cecilia and omit L Bakery',()=>{
  assert.equal(places.filter(p=>p.aliases?.includes('Cecilia')).length,1);
  assert.ok(!places.some(p=>/^l\s*bakery$/i.test(p.name)));
  assert.equal(find({query:'Cin Cin'})[0].googlePrice.average,55);
  assert.equal(find({query:'Chveni'})[0].phone,'593 76 77 13');
  assert.ok(find({query:'წისქვილი',food:'ქაბაბი'}).length);
});
test('every card has a restaurant photo and local photo files exist',()=>{
  for(const place of places){
    const src=place.photos?.[0]?.src||place.imageSrc;
    assert.ok(src,'No restaurant photo: '+place.name);
    if(!/^(https?:|data:)/.test(src))assert.ok(fs.statSync(src).size>1000,'Missing photo: '+src);
  }
});
