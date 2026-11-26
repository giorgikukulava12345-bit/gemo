const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const context=vm.createContext({TasteFinder:require('./discovery.js')});
context.window=context;
for(const file of ['places.js','map-data.js','contacts.js','price-data.js','place-translations.js','i18n.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
const html=fs.readFileSync('index.html','utf8');
vm.runInContext(html.slice(html.indexOf('const locationsData = ['),html.indexOf('const byId =')),context);
const places=vm.runInContext('places',context);
const i18n=context.TasteI18n;
test('all 73 restaurants have readable English and Russian names, descriptions and dishes',()=>{
  for(const lang of ['en','ru'])for(const original of places){
    const p=i18n.place(original,lang);
    for(const value of [p.name,p.teaser,p.city,p.category,p.dish,...p.story,...p.dishes]){
      assert.ok(value,original.name);
      assert.doesNotMatch(value,/[ა-ჰ]/u,original.name+' '+lang);
    }
    for(const dish of original.dishes)assert.ok(i18n.phrases[dish]||!/[ა-ჰ]/u.test(dish),dish);
    assert.equal(p.mapsUrl,original.mapsUrl);
    assert.equal(p.phone,original.phone);
    assert.deepEqual(p.googlePrice,original.googlePrice);
    if(original.branches)for(let n=0;n<original.branches.length;n++){
      assert.equal(p.branches[n].mapsUrl,original.branches[n].mapsUrl);
      assert.equal(p.branches[n].phone,original.branches[n].phone);
    }
  }
});
test('localization leaves the Georgian restaurant data intact',()=>{
  const before=JSON.stringify(places);
  for(const place of places){i18n.place(place,'en');i18n.place(place,'ru');assert.equal(i18n.place(place,'ka'),place);}
  assert.equal(JSON.stringify(places),before);
});
test('Russian natural requests combine city, dish and budget',()=>{
  const finder=context.TasteFinder;
  const matches=finder.find(places,{query:'хочу хинкали недорого в Тбилиси'});
  assert.ok(matches.length);
  assert.ok(matches.every(p=>p.city==='თბილისი'&&p.foods.includes('ხინკალი')&&p.budget===1));
  const cuisine=finder.find(places,{query:'грузинская кухня недорого'});
  assert.ok(cuisine.length);
  assert.ok(cuisine.every(p=>p.cuisines.includes('ქართული')&&p.budget===1));
});
test('prices keep the same amounts and unknown status in all languages',()=>{
  const known=places.find(p=>p.name==='ლოქო');
  assert.equal(i18n.priceLabel(known,'ka'),'≈ 10–50 ₾ / ადამიანი');
  assert.equal(i18n.priceLabel(known,'en'),'≈ 10–50 ₾ / person');
  assert.equal(i18n.priceLabel(known,'ru'),'≈ 10–50 ₾ / человек');
  const unknown=places.find(p=>p.name==='სტეიკჰაუსი N1');
  assert.equal(i18n.priceLabel(unknown,'ru'),'Бюджет уточняется');
});
