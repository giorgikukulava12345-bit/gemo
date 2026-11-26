const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const finder = require('./discovery.js');
const context = vm.createContext({TasteFinder:finder});
vm.runInContext(fs.readFileSync('places.js','utf8'),context);
vm.runInContext(fs.readFileSync('map-data.js','utf8'),context);
vm.runInContext(fs.readFileSync('contacts.js','utf8'),context);
vm.runInContext(fs.readFileSync('price-data.js','utf8'),context);
const html=fs.readFileSync('index.html','utf8');
const inline=html.slice(html.indexOf('const locationsData = ['),html.indexOf('const byId ='));
vm.runInContext(inline,context);
const places=vm.runInContext('places',context);
const find=state=>finder.find(places,state);

test('Argo uses the visitor-paid item price, never the Google range midpoint',()=>{
  const argo=find({query:'Argo'})[0];
  assert.equal(argo.menuPrices.items[0].amount,6.5);
  assert.equal(argo.menuPrices.kind,'visit');
  assert.equal(argo.googlePrice.average,5.5);
  assert.match(finder.priceLabel(argo),/6[.,]5 ₾ \/ ცალი/);
});

test('delivery prices remain scoped to the observed MacShaurma branch',()=>{
  const p=find({query:'MacShaurma'})[0];
  assert.equal(p.menuPrices,undefined);
  assert.equal(p.branches.filter(b=>b.menuPrices).length,1);
  assert.equal(p.branches[2].menuPrices.items[0].amount,14.9);
  assert.equal(p.branches[0].menuPrices,undefined);
});

test('all venue prices have an honest status and estimates show the range',()=>{
  for(const p of places){
    assert.ok(p.priceCheck);
    if(p.menuPrices)assert.ok(p.menuPrices.sourceUrl || p.menuPrices.reportedBy==='user');
    const label=finder.priceLabel(p);
    if(p.googlePrice&&!p.menuPrices?.primary)assert.ok(label.startsWith('≈ '));
  }
});

test('initial page has no embedded raster images or runtime Tailwind dependency',()=>{
  assert.ok(Buffer.byteLength(html)<100000);
  assert.doesNotMatch(html,/data:image\/(jpeg|png);base64/);
  assert.doesNotMatch(html,/@tailwindcss\/browser/);
});

test('all 73 places retain details and distinct branches',()=>{
  assert.equal(places.length,73);
  assert.equal(new Set(places.map(p=>p.name)).size,73);
  assert.equal(places.filter(p=>p.name.includes('ჭაშნაგირი')).length,1);
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
test('road preset retains Loqo and Niavi without the misidentified Foria record',()=>{
  const matches=find({area:'ბორჯომის გზა'});
  assert.equal(matches.length,2);
  for(const name of ['ლოქო','ნიავი']) assert.ok(matches.some(p=>p.name.includes(name)));
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
  assert.equal(find({query:'',category:'ყველა'}).length,73);
  assert.equal(find({query:'no-such-restaurant-abc'}).length,0);
});

test('all 73 cards and all 80 branch pins use exact audited identifiers',()=>{
  const pins=places.flatMap(p=>p.branches?.length?p.branches:[p]);
  assert.equal(pins.length,80);
  assert.equal(new Set(pins.map(p=>p.mapsUrl)).size,80);
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
  assert.equal(pins.filter(p=>p.googlePrice).length,64);
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
  assert.equal(finder.priceLabel(mill),'≈ 100 ₾-დან / ადამიანი');
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
  assert.equal(finder.priceLabel(tona),'≈ 20–90 ₾ / ადამიანი');
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
  assert.equal(find({query:'Chveni'})[0].phone,'+995593767713');
  assert.ok(find({query:'წისქვილი',food:'ქაბაბი'}).length);
});
test('every card has a restaurant photo and local photo files exist',()=>{
  for(const place of places){
    const src=place.photos?.[0]?.src||place.imageSrc;
    assert.ok(src,'No restaurant photo: '+place.name);
    if(!/^(https?:|data:)/.test(src))assert.ok(fs.statSync(src).size>1000,'Missing photo: '+src);
  }
});
test('all 80 exact branch listings have sourced international dialing numbers',()=>{
  const pins=places.flatMap(p=>p.branches?.length?p.branches:[p]);
  assert.equal(pins.length,80);
  for(const pin of pins){assert.match(pin.phone,/^\+995\d{9}$/);assert.ok(pin.phoneSource.startsWith('https://'));assert.equal(pin.phoneCheckedAt,'2026-11-25');}
  assert.equal(find({query:'Chveni'})[0].phone,'+995593767713');
  const zodiac=find({query:'Zodiaqo'})[0];
  assert.equal(zodiac.branches[0].phone,'+995599580077');
  assert.equal(zodiac.branches[1].phone,'+995551272241');
  assert.equal(finder.phoneLabel('+995593767713'),'593 76 77 13');
  assert.equal(finder.phoneLabel('+995322185253'),'032 218 52 53');
});
test('the four removed restaurants no longer appear in search',()=>{
  for(const query of ['ბიკენტიას','ლაბაძის ძმის','კევრი','ჭაშნაგირი სანაპირო'])assert.equal(find({query}).length,0,query);
});
test('Loqo is unique, correctly mapped, and recommended for khachapuri and mtsvadi',()=>{
  const loqo=find({query:'Loqo'});
  assert.equal(loqo.length,1);assert.equal(loqo[0].name,'ლოქო');
  assert.equal(new URL(loqo[0].mapsUrl).searchParams.get('cid'),'13873767494031647076');
  assert.ok(loqo[0].foods.includes('ხაჭაპური'));assert.ok(loqo[0].foods.includes('მწვადი'));
  assert.equal(find({query:'Foria'}).length,0);
});
test('N1 Steakhouse is searchable by steak with the requested address and phone',()=>{
  const steak=find({query:'N1 Steakhouse'})[0];
  assert.equal(steak.name,'სტეიკჰაუსი N1');assert.equal(steak.phone,'+995592000050');
  assert.equal(steak.address,'ირაკლი აბაშიძის ქ. 35');
  assert.ok(find({food:'სტეიკი'}).some(p=>p.name===steak.name));
  assert.equal(steak.googlePrice,null);
});
