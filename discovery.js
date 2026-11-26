/* Shared, deterministic matching rules. No API key or external search service needed. */
(function (root) {
  const vocabulary = {
    'ქართული': ['georgian', 'ქართულ', 'ქართულის'],
    'ევროპული': ['european', 'ევროპულ'],
    'გერმანული': ['german', 'გერმანულ'],
    'იტალიური': ['italian', 'იტალიურ'],
    'იაპონური': ['japanese', 'იაპონურ'],
    'აზიური': ['asian', 'აზიურ'],
    'ავსტრიული': ['austrian', 'ავსტრიულ'],
    'საკონდიტრო': ['bakery', 'confectionery', 'საკონდიტრო'],
    'სწრაფი კვება': ['fast food', 'street food', 'სწრაფი კვება'],
    'ხინკალი': ['khinkali', 'khinkal', 'ხინკალ'],
    'ხაჭაპური': ['khachapuri', 'khachapuri', 'ხაჭაპურ'],
    'მწვადი': ['mtsvadi', 'barbecue', 'bbq', 'მწვად'],
    'ქაბაბი': ['kebab', 'ქაბაბ'],
    'შაურმა': ['shawarma', 'შაურმ'],
    'თევზი': ['fish', 'თევზ', 'კალმახ', 'ზუთხ'],
    'პიცა': ['pizza', 'პიცა'],
    'სუში': ['sushi', 'სუში', 'ფილადელფია'],
    'დესერტი': ['dessert', 'დესერტ', 'დონატ', 'donut', 'cheesecake', 'ჩიზქეიქ'],
    'სენდვიჩი': ['sandwich', 'სენდვიჩ'],
    'ბურგერი': ['burger', 'ბურგერ', 'big tasty', 'big taste', 'ბიგ თეისთ'],
    'ნიოკი': ['gnocchi', 'ნიოკი'],
    'ღვინო': ['wine', 'ღვინო', 'ღვინის', 'მეღვინეობა'],
    'ბადრიჯანი': ['eggplant', 'aubergine', 'ბადრიჯან'],
    'პილმენი': ['pelmeni', 'პილმენი', 'პელმენი'],
    'კანჭი': ['pork knuckle', 'კანჭ'],
    'შნიცელი': ['schnitzel', 'შნიცელ'],
    'სტეიკი': ['steak', 'სტეიკ'],
    'თბილისი': ['tbilisi', 'თბილის'],
    'ბათუმი': ['batumi', 'ბათუმ'],
    'ქუთაისი': ['kutaisi', 'ქუთაის'],
    'გორი': ['gori', 'გორში', 'გორი'],
    'ზუგდიდი': ['zugdidi', 'ზუგდიდ'],
    'სიღნაღი': ['sighnaghi', 'signagi', 'სიღნაღ'],
    'კაჭრეთი': ['kachreti', 'კაჭრეთ'],
    'მანავი': ['manavi', 'მანავ'],
    'ბორჯომის გზა': ['borjomi', 'akhaldaba', 'kvishkheti', 'ბორჯომ', 'ახალდაბ', 'ქვიშხეთ', 'ტაშისკარ']
  };

  const russianVocabulary={"ქართული": ["грузинск"], "ევროპული": ["европейск"], "გერმანული": ["немецк"], "იტალიური": ["итальянск"], "იაპონური": ["японск"], "აზიური": ["азиатск"], "ავსტრიული": ["австрийск"], "საკონდიტრო": ["кондитерск", "пекарня", "выпечка"], "სწრაფი კვება": ["фастфуд", "быстрое питание"], "ხინკალი": ["хинкали"], "ხაჭაპური": ["хачапури"], "მწვადი": ["шашлык", "мцвади"], "ქაბაბი": ["кебаб", "люля"], "შაურმა": ["шаурм"], "თევზი": ["рыб"], "პიცა": ["пицц"], "სუში": ["суши", "филадельфия"], "დესერტი": ["десерт", "пончик", "чизкейк"], "სენდვიჩი": ["сэндвич", "сандвич"], "ბურგერი": ["бургер", "биг тейсти"], "ნიოკი": ["ньокки"], "ღვინო": ["вино", "вина", "винодельня"], "ბადრიჯანი": ["баклажан"], "პილმენი": ["пельмен"], "კანჭი": ["рульк"], "შნიცელი": ["шницел"], "სტეიკი": ["стейк"], "თბილისი": ["тбилиси"], "ბათუმი": ["батуми"], "ქუთაისი": ["кутаиси"], "გორი": ["гори"], "ზუგდიდი": ["зугдиди"], "სიღნაღი": ["сигнахи", "сигнаги"], "კაჭრეთი": ["качрети"], "მანავი": ["манави"], "ბორჯომის გზა": ["боржоми", "ахалдаба", "квишхети"]};
  for(const [key,words] of Object.entries(russianVocabulary))vocabulary[key].push(...words);
  function normalize(value) {
    return String(value || '').normalize('NFKC').toLocaleLowerCase('ka-GE')
      .replace(/[\u2018-\u201f„“"'«»]/g, '').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
  }
  function infer(location) {
    const text = normalize([location.dish, ...(location.dishes || []), location.name, location.aliases].join(' '));
    const cuisines = location.cuisines || (
      /შაურმა|გირო|პიტა/.test(text) ? ['სწრაფი კვება'] :
      /სადგური|bahnhof/.test(text) ? ['ქართული', 'გერმანული'] : ['ქართული']
    );
    const foods = Object.keys(vocabulary).filter(key =>
      ['ხინკალი','ხაჭაპური','მწვადი','ქაბაბი','შაურმა','თევზი','პიცა','სუში','დესერტი','სენდვიჩი','ბურგერი','ნიოკი','ღვინო','ბადრიჯანი','პილმენი','კანჭი','შნიცელი','სტეიკი'].includes(key) && vocabulary[key].some(word => text.includes(word)));
    const city = location.city.split(' (')[0];
    const area = location.route || city;
    return {...location, cuisines, foods, area};
  }
  function priceSummary(location) {
    const entries = location.branches?.length ? location.branches : [location];
    const prices = entries.map(entry => entry.googlePrice).filter(Boolean);
    if (!prices.length) return null;
    const averages = prices.map(price => price.average).filter(value => Number.isFinite(value));
    const incomplete = prices.length !== entries.length;
    const openEnded = prices.some(price => price.max === null);
    const minAverage = averages.length ? Math.min(...averages) : null;
    const maxAverage = averages.length ? Math.max(...averages) : null;
    return {min:Math.min(...prices.map(price=>price.min)),max:openEnded?null:Math.max(...prices.map(price=>price.max)),minAverage,maxAverage,openEnded,incomplete,branchCount:entries.length,knownCount:prices.length};
  }
  function budgetTier(summary) {
    if (!summary || summary.incomplete) return undefined;
    const estimate = summary.openEnded ? summary.min : summary.maxAverage;
    return estimate <= 30 ? 1 : estimate <= 60 ? 2 : 3;
  }
  const number = value => new Intl.NumberFormat('ka-GE',{maximumFractionDigits:1}).format(value);
  function priceLabel(location) {
    const summary = priceSummary(location);
    if(location.menuPrices?.primary){const item=location.menuPrices.items[0];return number(item.amount)+' ₾ / ცალი';}
    if (!summary) return 'ბიუჯეტი დასაზუსტებელია';
    if (summary.openEnded) return '≈ '+number(summary.min) + ' ₾-დან / ადამიანი';
    return '≈ '+number(summary.min) + (summary.max !== summary.min ? '–' + number(summary.max) : '') + ' ₾ / ადამიანი';
  }
  const noise = new Set(['i','want','would','like','food','please','and','in','a','an','the','to','eat','me','some','with','friendly','მინდა','საჭმელი','საკვები','და','მომიძებნე','მაჩვენე','ვეძებ','მსურს','რაღაც','хочу','хочется','найди','найти','покажи','мне','я','еда','еду','кухня','кухню','поесть','пожалуйста','и','в','на','с','для','где','есть']);
  function parseQuery(query) {
    let remaining = normalize(query);
    const facets = [];
    const terms = Object.entries(vocabulary).flatMap(([key, values]) => values.map(word => ({key, word}))).sort((a,b) => b.word.length - a.word.length);
    // Match whole English words, Georgian stems may have grammatical endings.
    for (const {key,word} of terms) {
      const pattern = new RegExp('(^|\\s)' + word + (/^[a-z ]+$/.test(word) ? '(?=\\s|$)' : '[\\p{L}]*'), 'gu');
      if (pattern.test(remaining)) { facets.push(key); remaining = remaining.replace(pattern, ' '); }
    }
    let budget = null;
    for (const [tier, pattern] of [[1, /\b(budget|cheap|affordable|inexpensive)\b|(?:недорог|дешев|дёшев|бюджетн)[\p{L}]*|ბიუჯეტურ[\p{L}]*|იაფ[\p{L}]*|ეკონომიურ[\p{L}]*/gu], [2, /\b(midrange|moderate)\b|средн[\p{L}]*|საშუალო/gu], [3, /\b(premium|expensive|upscale)\b|(?:дорог|премиум)[\p{L}]*|პრემიუმ[\p{L}]*|ძვირ[\p{L}]*/gu]]) {
      if (pattern.test(remaining)) {budget=tier; remaining=remaining.replace(pattern,' ');}
    }
    return {facets:[...new Set(facets)], budget, words:remaining.split(/\s+/).filter(word => word && !noise.has(word))};
  }
  function searchText(location) {
    return normalize([location.name,location.city,location.category,location.dish,location.teaser,location.address,location.aliases,location.route,...location.cuisines,...location.foods,...location.dishes,...(location.branches || []).flatMap(b => [b.district,b.address,b.pin])].join(' '));
  }
  function find(locations, state) {
    const query = parseQuery(state.query || '');
    return locations.map((location,index) => {
      const text = searchText(location);
      const category = state.category || 'ყველა';
      if (category !== 'ყველა' && (category === 'თბილისი' ? location.city !== 'თბილისი' : location.category !== category)) return null;
      if (state.area && state.area !== location.area) return null;
      if (state.cuisine && !location.cuisines.includes(state.cuisine)) return null;
      if (state.food && !location.foods.includes(state.food)) return null;
      const budget = state.budget ? Number(state.budget) : query.budget;
      if (budget && location.budget !== budget) return null;
      // Every requested facet must match. Unknown budgets never pass a budget filter.
      if (!query.facets.every(facet => location.cuisines.includes(facet) || location.foods.includes(facet) || location.area === facet || vocabulary[facet].some(word => text.includes(word)))) return null;
      if (!query.words.every(word => text.includes(word))) return null;
      const name = normalize(location.name);
      const score = query.words.reduce((sum,word) => sum + (name.includes(word) ? 10 : 1),0) + (location.highlight && (state.food === 'ხინკალი' || query.facets.includes('ხინკალი')) ? 3 : 0);
      return {location,index,score};
    }).filter(Boolean).sort((a,b) => state.sort === 'name' ? a.location.name.localeCompare(b.location.name,'ka') : state.sort === 'budget' ? priceSortValue(a.location) - priceSortValue(b.location) || b.score-a.score || a.index-b.index : b.score-a.score || a.index-b.index).map(item => item.location);
  }
  function priceSortValue(location) {
    const summary=priceSummary(location);
    return summary ? summary.minAverage ?? summary.min : Infinity;
  }
  function phoneLabel(phone) {
    const digits=String(phone).replace(/^\+995/,'');
    if(digits.startsWith('32'))return '032 '+digits.slice(2,5)+' '+digits.slice(5,7)+' '+digits.slice(7);
    const prefix=digits.startsWith('5')?digits.slice(0,3):'0'+digits.slice(0,3);
    return prefix+' '+digits.slice(3,5)+' '+digits.slice(5,7)+' '+digits.slice(7);
  }
  const api = {normalize,infer,parseQuery,find,priceSummary,budgetTier,priceLabel,priceSortValue,phoneLabel};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.TasteFinder = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
