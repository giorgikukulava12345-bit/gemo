/* Local translations: switching language never sends a visitor's search elsewhere. */
(function(root){
  const phrases = {};
  const rows = `ყველა|All|Все
თბილისი|Tbilisi|Тбилиси
ასურეთი|Asureti|Асурети
ფასანაური|Pasanauri|Пасанаури
შარახევი / ჩარგლის გზა|Sharakhevi / Chargali road|Шарахеви / дорога в Чаргали
ბათუმი|Batumi|Батуми
ქუთაისი|Kutaisi|Кутаиси
გორი|Gori|Гори
ზუგდიდი|Zugdidi|Зугдиди
სიღნაღი|Sighnaghi|Сигнахи
კაჭრეთი|Kachreti|Качрети
მანავი|Manavi|Манави
ბორჯომის გზა|Road to Borjomi|Дорога в Боржоми
რეგიონები|Regions|Регионы
ლეგენდარული ადგილები|Legendary places|Легендарные места
ცომეული|Bakeries|Выпечка
დუქანი / ტრადიციული|Taverns / Traditional|Духаны / Традиционная кухня
ქართული|Georgian|Грузинская
ევროპული|European|Европейская
გერმანული|German|Немецкая
იტალიური|Italian|Итальянская
იაპონური|Japanese|Японская
აზიური|Asian|Азиатская
ავსტრიული|Austrian|Австрийская
საკონდიტრო|Confectionery|Кондитерская
სწრაფი კვება|Fast food|Быстрое питание
ხინკალი|Khinkali|Хинкали
ხაჭაპური|Khachapuri|Хачапури
მწვადი|Mtsvadi|Шашлык
ქაბაბი|Kebab|Кебаб
შაურმა|Shawarma|Шаурма
თევზი|Fish|Рыба
პიცა|Pizza|Пицца
სუში|Sushi|Суши
დესერტი|Dessert|Десерт
სენდვიჩი|Sandwich|Сэндвич
ბურგერი|Burger|Бургер
ნიოკი|Gnocchi|Ньокки
ღვინო|Wine|Вино
ბადრიჯანი|Eggplant|Баклажаны
პილმენი|Pelmeni|Пельмени
კანჭი|Pork knuckle|Рулька
შნიცელი|Schnitzel|Шницель
სტეიკი|Steak|Стейк
ადგილობრივი შემწვარი ხორცი|Local grilled meat|Местное жареное мясо
აჭარული ხაჭაპური|Adjarian khachapuri|Аджарские хачапури
გირო ქათმის ხორცით|Chicken gyro|Гирос с курицей
დონატი|Donut|Пончик
ვენური შნიცელი|Wiener schnitzel|Венский шницель
ზუთხი|Sturgeon|Осётр
ზღვის პროდუქტების ასორტი|Seafood platter|Ассорти морепродуктов
თავადური ხაჭაპური|Tavaduri khachapuri|Хачапури Тавадури
თეისთ სეტი|Taste Set|Тейст сет
თელავური ხინკალი|Telavi-style khinkali|Хинкали по-телавски
იმერული ხაჭაპური|Imeretian khachapuri|Имеретинские хачапури
კალმახი|Trout|Форель
კორპუსული დესერტი|Moulded dessert|Корпусный десерт
ლობიანი საქონლის სალათით|Lobiani with beef salad|Лобиани с салатом из говядины
ლობიო პურითა და მწნილით|Lobio with bread and pickles|Лобио с хлебом и соленьями
ლუდთან მისაყოლებელი|Beer snacks|Закуски к пиву
მენიუს არჩევანი ადგილზე გადაამოწმე|Check the current menu at the venue|Уточните актуальное меню на месте
ნიგვზიანი ბადრიჯანი|Eggplant with walnuts|Баклажаны с орехами
ოსტრი|Ostri (spicy beef stew)|Остри (острое рагу из говядины)
პილმენი ქოთანში|Pelmeni baked in a pot|Пельмени в горшочке
პონჩიკი|Ponchik|Пончик
საქონლის ნეკნები|Beef ribs|Говяжьи рёбрышки
ფენოვანი ხაჭაპური|Flaky khachapuri|Слоёные хачапури
ფშაური ხინკალი|Pshavian khinkali|Пшавские хинкали
ფხალის ასორტი|Pkhali platter|Ассорти пхали
ქალაქური ხინკალი|City-style khinkali|Городские хинкали
ქართული კერძები|Georgian dishes|Грузинские блюда
ღომი ნიგვზიანი ხარჩოთი|Ghomi with walnut kharcho|Гоми с ореховым харчо
ღორის მწვადი|Pork mtsvadi|Шашлык из свинины
შებოლილი ფილადელფია სეტი|Smoked Philadelphia Set|Сет с копчёной Филадельфией
შემწვარი სუშის როლები|Fried sushi rolls|Жареные суши-роллы
შქმერული|Shkmeruli|Шкмерули
ჩამოსასხმელი ლუდი|Draft beer|Разливное пиво
ჩაშუშული|Chashushuli|Чашушули
ჩებურეკი ყველითა და სოკოთი|Chebureki with cheese and mushrooms|Чебуреки с сыром и грибами
ჩებურეკი შერეული ხორცით|Chebureki with mixed meat|Чебуреки со смешанным мясом
ცეზარის პიტა|Caesar pita|Пита Цезарь
ხაბიზგინა|Khabizgina|Хабизгина
ხარჩო|Kharcho|Харчо
ხაში|Khashi|Хаши
ხაჭაპური ქათმის სალათით|Khachapuri with chicken salad|Хачапури с куриным салатом
ხაჭაპური შამფურზე|Khachapuri on a skewer|Хачапури на шампуре
ხევსურული ხინკალი|Khevsurian khinkali|Хевсурские хинкали
ხინკალი „ელ დეპო“|El Depo khinkali|Хинкали Эль Депо
Big Tasty|Big Tasty|Биг Тейсти
შემწვარი ხორცი და ჩამოსასხმელი ლუდი|Grilled meat and draft beer|Жареное мясо и разливное пиво
აჭარული ხაჭაპური და პონჩიკი|Adjarian khachapuri and ponchik|Аджарские хачапури и пончики
ადგილზე მომზადებული კალმახი და ზუთხი|Freshly prepared trout and sturgeon|Форель и осётр, приготовленные на месте
შინაურული კერძები|Homestyle dishes|Домашние блюда
იმერული ხაჭაპური და ფხალის ასორტი|Imeretian khachapuri and pkhali platter|Имеретинские хачапури и ассорти пхали
ჩებურეკი|Chebureki|Чебуреки
ხინკალი და კრაფტ ლუდი|Khinkali and craft beer|Хинкали и крафтовое пиво
ხინკალი და ქართული სუფრა|Khinkali and Georgian dishes|Хинкали и грузинские блюда
ქაბაბი და ქართული სუფრა|Kebab and Georgian dishes|Кебаб и грузинские блюда
ქართული სუფრა|Georgian table|Грузинское застолье
ქართული ტრადიციული სამზარეულო|Traditional Georgian cuisine|Традиционная грузинская кухня
ქართული და ევროპული კერძები|Georgian and European dishes|Грузинские и европейские блюда
ცეზარის პიტა და ქათმის გირო|Caesar pita and chicken gyro|Пита Цезарь и гирос с курицей
ხინკალი და საქონლის ნეკნები|Khinkali and beef ribs|Хинкали и говяжьи рёбрышки
ხაჭაპური და მწვადი|Khachapuri and mtsvadi|Хачапури и шашлык
ხინკალი და ხაჭაპური|Khinkali and khachapuri|Хинкали и хачапури
ხინკალი და აჭარული ხაჭაპური|Khinkali and Adjarian khachapuri|Хинкали и аджарские хачапури
ხაში, ხარჩო და მწვადი|Khashi, kharcho and mtsvadi|Хаши, харчо и шашлык
ავტორის რჩევა: ხინკალი|Author's pick: khinkali|Совет автора: хинкали
ასურეთი (ქვემო ქართლი)|Asureti (Kvemo Kartli)|Асурети (Квемо-Картли)
ახალდაბა (ბორჯომის გზა)|Akhaldaba (Road to Borjomi)|Ахалдаба (дорога в Боржоми)
ბათუმი (აჭარა)|Batumi (Adjara)|Батуми (Аджария)
გორი (შიდა ქართლი)|Gori (Shida Kartli)|Гори (Шида-Картли)
ფასანაური (მცხეთა-მთიანეთი)|Pasanauri (Mtskheta-Mtianeti)|Пасанаури (Мцхета-Мтианети)
ქუთაისი (იმერეთი)|Kutaisi (Imereti)|Кутаиси (Имерети)
შარახევი / ჩარგლის გზა (მცხეთა-მთიანეთი)|Sharakhevi / Chargali road (Mtskheta-Mtianeti)|Шарахеви / дорога в Чаргали (Мцхета-Мтианети)
გლდანი|Gldani|Глдани
ვარკეთილი|Varketili|Варкетили
საბურთალო|Saburtalo|Сабуртало
სოლოლაკი|Sololaki|Сололаки
მუხიანი|Mukhiani|Мухиани
თელავი|Telavi|Телави
ბელიაშვილი|Beliashvili|Белиашвили
რას მიირთმევდი?|What would you like to eat?|Что бы вы хотели попробовать?
აირჩიე გემო, ადგილი და ბიუჯეტი — იპოვე შენი შემდეგი გაჩერება.|Choose a flavour, place and budget — find your next stop.|Выберите вкус, место и бюджет — найдите, куда отправиться.
მოძებნე ადგილი ან კერძი|Search for a place or dish|Найти место или блюдо
მაგ.: ხინკალი|e.g. khinkali|Например: хинкали
ძიება მუშაობს ქართულად, ინგლისურად და რუსულად. შეგიძლია უბრალოდ ქვემოთ აირჩიო.|Search in Georgian, English or Russian, or use the filters below.|Ищите на грузинском, английском или русском — или выберите фильтры ниже.
სწრაფი არჩევანი|Quick picks|Быстрый выбор
ქართული და ბიუჯეტური|Georgian on a budget|Грузинская кухня недорого
ხინკალი მინდა|I want khinkali|Хочу хинкали
ბორჯომის გზაზე|On the road to Borjomi|По дороге в Боржоми
სად?|Where?|Где?
ყველა ადგილი|All places|Все места
სამზარეულო|Cuisine|Кухня
ყველა სამზარეულო|All cuisines|Все кухни
რა გინდა?|What would you like?|Что хотите?
ყველა კერძი|All dishes|Все блюда
ერთ ადამიანზე|Per person|На человека
ნებისმიერი|Any budget|Любой бюджет
გასუფთავება|Clear filters|Сбросить фильтры
დალაგება|Sort by|Сортировка
შესაბამისობით|Relevance|По соответствию
ბიუჯეტით|Budget|По бюджету
ანბანით|Name|По названию
ამ არჩევანით ადგილი ვერ მოიძებნა. სცადე სხვა ქალაქი, ბიუჯეტი ან ნაკლები ფილტრი.|No places match. Try another city, budget or fewer filters.|Ничего не найдено. Попробуйте другой город, бюджет или меньше фильтров.
ყველა ადგილის ნახვა|See all places|Показать все места
გზამკვლევის სანახავად ჩართე JavaScript.|Enable JavaScript to view the guide.|Включите JavaScript для просмотра путеводителя.
დახურვა|Close|Закрыть
რის გასინჯვას გირჩევთ|What to try|Что попробовать
ფილიალების მისამართები|Branch addresses|Адреса филиалов
Google Maps-ზე ნახვა|View on Google Maps|Открыть в Google Maps
მენიუს ნახვა|View menu|Посмотреть меню
ადგილების გზამკვლევი|Places guide|Путеводитель по заведениям
ადგილის კატეგორია|Place category|Категория места
აირჩიე კონკრეტული ფილიალი ქვემოთ.|Choose a branch below.|Выберите филиал ниже.
დარეკვა|Call|Позвонить
რუკა|Map|Карта
რუკაზე ნახვა: |View map: |Посмотреть на карте: 
 — ამბის წაკითხვა| — Read more| — Подробнее
შენი არჩევანი: |Your selection: |Ваш выбор: 
ბიუჯეტი დასაზუსტებელია|Budget to be confirmed|Бюджет уточняется
ბიუჯეტური · ≤30 ₾|Budget · ≤30 ₾|Недорого · ≤30 ₾
საშუალო · 30–60 ₾|Mid-range · 30–60 ₾|Средний · 30–60 ₾
მაღალი · 60+ ₾|Premium · 60+ ₾|Высокий · 60+ ₾
საქართველო|Georgia|Грузия
საიტის ენა|Site language|Язык сайта
გემოს რუკა|Taste Map|Карта вкусов`;
  for(const row of rows.split('\n')){const [ka,en,ru]=row.split('|');phrases[ka]={en,ru};}
  const characters='აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ';
  const latin=['a','b','g','d','e','v','z','t','i','k','l','m','n','o','p','zh','r','s','t','u','p','k','gh','q','sh','ch','ts','dz','ts','ch','kh','j','h'];
  const cyrillic=['а','б','г','д','е','в','з','т','и','к','л','м','н','о','п','ж','р','с','т','у','п','к','г','к','ш','ч','ц','дз','ц','ч','х','дж','х'];
  function transliterate(value,language='en'){
    return String(value||'').replace(/[ა-ჰ]/g,ch=>(language==='ru'?cyrillic:latin)[characters.indexOf(ch)]||ch);
  }
  let language='ka';
  try{const requested=new URLSearchParams(root.location?.search).get('lang');const stored=root.localStorage?.getItem('gemotaste-language');language=['ka','en','ru'].includes(requested)?requested:['ka','en','ru'].includes(stored)?stored:'ka';}catch{}
  function t(text,lang=language){
    if(lang==='ka'||!text)return text||'';
    if(phrases[text])return phrases[text][lang];
    if(text.includes(' · '))return text.split(' · ').map(part=>t(part,lang)).join(' · ');
    return transliterate(text,lang);
  }
  function address(text,lang=language){
    if(lang==='ka')return text||'';
    return transliterate(String(text||'').replace(/ქ\./g,lang==='en'?'St.':'ул.').replace(/გამზ\./g,lang==='en'?'Ave.':'пр.').replace(/ქუჩა/g,lang==='en'?'Street':'улица').replace(/ჩიხი/g,lang==='en'?'Lane':'переулок').replace(/ხეივანი/g,lang==='en'?'Alley':'аллея'),lang);
  }
  function place(original,lang=language){
    if(lang==='ka')return original;
    const translated=root.placeTranslations[original.name][lang];
    const result={...original,...translated,city:t(original.city,lang),category:t(original.category,lang),address:address(original.address,lang),verifiedAddress:address(original.verifiedAddress,lang),dish:t(original.dish,lang),dishes:original.dishes.map(d=>t(d,lang)),highlight:t(original.highlight,lang),branchNote:t(original.branchNote,lang)};
    result.story=translated.story||[translated.teaser];
    result.branchNote=translated.branchNote||result.branchNote;
    result.branches=original.branches?.map(b=>({...b,district:t(b.district,lang),verifiedAddress:address(b.verifiedAddress,lang)}));
    return result;
  }
  function priceLabel(location,lang=language){
    const value=root.TasteFinder.priceLabel(location);
    if(lang==='ka')return value;
    return value.replace('ბიუჯეტი დასაზუსტებელია',t('ბიუჯეტი დასაზუსტებელია',lang)).replace('₾-დან / ადამიანი',lang==='en'?'₾+ / person':'₾+ / человек').replace('₾ / ადამიანი',lang==='en'?'₾ / person':'₾ / человек');
  }
  const api={t,place,address,priceLabel,transliterate,phrases,get language(){return language;},setLanguage(value){if(['ka','en','ru'].includes(value)){language=value;try{root.localStorage?.setItem('gemotaste-language',value);}catch{}}}};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.TasteI18n=api;
})(typeof globalThis!=='undefined'?globalThis:this);
