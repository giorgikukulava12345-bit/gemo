/* Curated additions. Map searches are scoped to the requested branch/locality.
 * Audited exact map identifiers and Google per-person ranges live in map-data.js.
 */
const addedLocations = [
  {
    name: 'რესტორანი „ლოქო“', city: 'ახალდაბა (ბორჯომის გზა)', category: 'რეგიონები',
    imageSrc: 'loqo-exterior.png',
    dish: 'ქართული სამზარეულო', teaser: 'გაჩერება ახალდაბაში, ბორჯომისკენ მიმავალ გზაზე.',
    story: ['„ლოქო“ დაბა ახალდაბაშია, ბორჯომის მიმართულებით მგზავრობისას. ქართული კერძებისთვის გზად შესაჩერებელი ადგილია.'],
    dishes: ['ქართული კერძები — არჩევანი ადგილზე გადაამოწმე'], maps: 'რესტორანი ლოქო ახალდაბა ბორჯომი',
    aliases: 'Loqo Loko Akhaldaba Borjomi ბორჯომისკენ', route: 'ბორჯომის გზა',
    source: 'https://www.08.ge/index.php/organizations/view/341098/ლოქო'
  },
  {
    name: '„ფორია“', city: 'ახალდაბა (ბორჯომის გზა)', category: 'ცომეული',
    dish: 'ხაჭაპური', teaser: 'სახაჭაპურე ახალდაბაში, ხაშური–ბორჯომის გზაზე.',
    story: ['„ფორია“ ახალდაბაში, ბორჯომისკენ მიმავალ გზაზე მდებარეობს. გზად ხაჭაპურისთვის შესაჩერებელი ადგილია.'],
    dishes: ['ხაჭაპური'], maps: 'ფორია Foria ახალდაბა', aliases: 'Foria Poria Phoria Akhaldaba Borjomi ბორჯომისკენ',
    route: 'ბორჯომის გზა', source: 'https://untappd.com/v/poria-foria/10713737'
  },
  {
    name: 'რესტორანი „ნიავი“', city: 'ახალდაბა (ბორჯომის გზა)', category: 'რეგიონები',
    dish: 'მწვადი', teaser: 'ბორჯომის ხეობის გაჩერება ახალდაბასთან, გზის პირას.',
    story: ['„ნიავი“ ახალდაბასთან, ბორჯომის გზაზეა. გზამკვლევის რეკომენდაციაა გაჩერება ახალდაბიდან გასვლამდე, ბორჯომისკენ მგზავრობისას. ადგილს მწვადისთვისაც სტუმრობენ.'],
    dishes: ['მწვადი'], maps: 'რესტორანი ნიავი ახალდაბა', aliases: 'Niavi Akhaldaba Borjomi ბორჯომისკენ',
    route: 'ბორჯომის გზა', source: 'https://georgiangourmetguide.blogspot.com/2017/08/blog-post_11.html'
  },
  {
    name: 'რესტორანი „ფიროსმანი“', city: 'ბათუმი (აჭარა)', category: 'რეგიონები',
    dish: 'ხინკალი და აჭარული ხაჭაპური', teaser: 'ქართული სუფრა ბათუმში, ჰაიდარ აბაშიძის 36 ნომერში.',
    story: ['„ფიროსმანი“ ბათუმში, ჰაიდარ აბაშიძის ქუჩის 36 ნომერში მდებარეობს. მენიუში შეხვდები ხინკალს, ხაჭაპურსა და სხვა ქართულ კერძებს.'],
    dishes: ['ხინკალი', 'აჭარული ხაჭაპური', 'მწვადი'], maps: 'Pirosmani 36 Haidar Abashidze Batumi',
    address: 'ჰაიდარ აბაშიძის ქ. 36', cuisines: ['ქართული', 'ევროპული'],
    aliases: 'Pirosmani Firosmani Batumi', menuUrl: 'https://pirosmani.ofoodo.com',
    source: 'https://visitajara.com/public/en/restaurants/27'
  },
  {
    name: '„ბერნი“ — Bern', city: 'ბათუმი (აჭარა)', category: 'რეგიონები',
    dish: 'ქართული და ევროპული კერძები', teaser: 'რესტორანი და პაბი ბათუმის ცენტრში, რუსთაველის 17-ში.',
    story: ['„ბერნი“ ბათუმში, შოთა რუსთაველის გამზირის 17 ნომერშია. ქართულ და ევროპულ სამზარეულოს აერთიანებს — მოსახერხებელი არჩევანია, როცა სუფრის წევრებს განსხვავებული კერძები უნდათ.'],
    dishes: ['ხინკალი', 'აჭარული ხაჭაპური', 'შქმერული'], maps: 'Bern Rustaveli 17 Batumi',
    address: 'შოთა რუსთაველის გამზ. 17', cuisines: ['ქართული', 'ევროპული'],
    aliases: 'Bern Batumi ბერნ', menuUrl: 'https://bern.serviso.app/',
    source: 'https://visitajara.com/public/en/restaurants/23'
  },
  {
    name: 'რესტორანი „კევრი“', city: 'ქვიშხეთი / ტაშისკარი (შიდა ქართლი)', category: 'რეგიონები',
    dish: 'ქართული სამზარეულო', teaser: 'ბორჯომის მიმართულებით, ქვიშხეთისა და ტაშისკარის მონაკვეთზე.',
    story: ['„კევრი“ ხაშურის მუნიციპალიტეტში, ქვიშხეთისა და ტაშისკარის მიმართულებითაა. რესტორნის შეფის საჯარო აღწერაში სოფელი ტაშისკარია მითითებული. მგზავრობისას გახსენი რუკა და გადაამოწმე შესახვევი.'],
    dishes: ['ქართული კერძები — სეზონური არჩევანი ადგილზე გადაამოწმე'], maps: 'Restaurant Kevri Tashiskari Khashuri',
    aliases: 'Kevri Kvishkheti Tashiskari ბორჯომისკენ', route: 'ბორჯომის გზა',
    source: 'https://www.youtube.com/watch?v=PZgkIGdrap0'
  },
  {
    name: '„ელ დეპო“', city: 'ქუთაისი (იმერეთი)', category: 'რეგიონები',
    dish: 'ხინკალი', teaser: 'ხინკლისთვის გამორჩეული გაჩერება ქუთაისში, გრიშაშვილის ქუჩაზე.',
    story: ['„ელ დეპო“ ქუთაისში, იოსებ გრიშაშვილის ქუჩის 10 ნომერშია. გზამკვლევის ავტორის განსაკუთრებული რეკომენდაცია აქ ხინკალია. მენიუში ქალაქური ხინკლის გარდა ყველის, სოკოსა და კარტოფილის ვარიანტებიცაა.'],
    dishes: ['ქალაქური ხინკალი', 'ხინკალი „ელ დეპო“', 'იმერული ხაჭაპური'], maps: 'El Depo 10 Ioseb Grishashvili Kutaisi',
    address: 'იოსებ გრიშაშვილის ქ. 10', aliases: 'El Depo Eldepo Kutaisi ელდეპო ელ დეპოს',
    highlight: 'ავტორის რჩევა: ხინკალი', menuUrl: 'https://wolt.com/ka/geo/kutaisi/restaurant/el-depo',
    source: 'https://wolt.com/ka/geo/kutaisi/restaurant/el-depo'
  },
  {
    name: '„პიქტოგრამა“', city: 'თბილისი', category: 'დუქანი / ტრადიციული',
    dish: 'ხევსურული ხინკალი', teaser: 'ხევსურული გემოები მშრალ ხიდთან, ათონელის ქუჩაზე.',
    story: ['„პიქტოგრამა“ მშრალ ხიდთან, ათონელის ქუჩის 31 ნომერშია. რესტორნის მიმართულება ხევსურული სამზარეულო და ხინკალია.'],
    dishes: ['ხევსურული ხინკალი'], maps: 'Pictograma 31 Atoneli Tbilisi', address: 'ათონელის ქ. 31',
    aliases: 'Pictograma Piktograma Khevsurian', source: 'https://rezto.ge/reservation/pictograma'
  },
  {
    name: '„ორი ტონა“', city: 'თბილისი', category: 'თბილისი',
    dish: 'ხინკალი და კრაფტ ლუდი', teaser: 'ქართული კერძები და საკუთარი ლუდი — აირჩიე შენთან ახლო ფილიალი.',
    story: ['„ორი ტონა“ ქართულ კერძებსა და საკუთარ ლუდს აერთიანებს. თბილისური ფილიალები სოლოლაკში, საბურთალოზე, მუხიანსა და ვარკეთილშია.'],
    dishes: ['ხინკალი', 'ლუდთან მისაყოლებელი'], maps: '2 Tona Tbilisi', aliases: '2 Tona Ori Tona Two Tons craft beer',
    branches: [
      {district:'სოლოლაკი',address:'გალაკტიონ ტაბიძის ქ. 10',pin:'2 Tona Tabidze 10 Tbilisi'},
      {district:'საბურთალო',address:'ვაჟა-ფშაველას გამზ. 2',pin:'2 Tona Vazha Pshavela 2 Tbilisi'},
      {district:'მუხიანი',address:'ალეკო გობრონიძის ქ. 10',pin:'2 Tona Gobronidze 10 Tbilisi'},
      {district:'ვარკეთილი',address:'ვიქტორ კუპრაძის ქ. 35',pin:'2 Tona Kupradze 35 Tbilisi'}
    ], menuUrl: 'https://2tona.ge/', source: 'https://2tona.ge/'
  },
  {
    name: '„ჭაშნაგირი“ — ბელიაშვილი', city: 'თბილისი', category: 'დუქანი / ტრადიციული',
    dish: 'ხინკალი და ქართული სუფრა', teaser: 'ბელიაშვილის ფილიალი — ქართული კერძებისთვის და მეგობრებთან სუფრისთვის.',
    story: ['„ჭაშნაგირის“ ბელიაშვილის ფილიალი აკაკი ბელიაშვილის ქუჩის 2/6 ნომერშია. გზამკვლევში ბელიაშვილისა და სანაპიროს ფილიალები ცალ-ცალკეა, რომ სწორი ლოკაცია მარტივად აირჩიო.'],
    dishes: ['ხინკალი', 'ხაჭაპური', 'მწვადი'], maps: 'Chashnagiri Beliashvili 2/6 Tbilisi',
    address: 'აკაკი ბელიაშვილის ქ. 2/6', aliases: 'Chashnagiri Beliashvili ჭაშნაგირი ბელიაშვილზე',
    menuUrl: 'https://chashnagiri.ge/', source: 'https://dmo.ge/company/ChashnagiriRestaurants/'
  },
  {
    name: '„ჭაშნაგირი“ — სანაპირო', city: 'თბილისი', category: 'დუქანი / ტრადიციული',
    dish: 'ხინკალი და ქართული სუფრა', teaser: 'სანაპიროს ფილიალი — ქართული კერძების ფართო არჩევანი მტკვართან.',
    story: ['„ჭაშნაგირის“ სანაპიროს ფილიალი ქართული სუფრისთვის კიდევ ერთი არჩევანია. ოფიციალურ მენიუში ხაჭაპური, მწვადი, ლობიო და სხვა ტრადიციული კერძებია. რუკის ბმული სწორედ სანაპიროს ფილიალს ეძებს.'],
    dishes: ['ხინკალი', 'აჭარული ხაჭაპური', 'ლობიო'], maps: 'Chashnagiri Sanapiro Tbilisi',
    address: 'ნიკოლოზ ბარათაშვილის მარცხენა სანაპირო', aliases: 'Chashnagiri Sanapiro სანაპიროზე',
    menuUrl: 'https://chashnagiri.ge/en/menu/sanapiro', source: 'https://chashnagiri.ge/en/sanapiro'
  },
  {
    name: '„წისქვილი“ — ბელიაშვილი', city: 'თბილისი', category: 'დუქანი / ტრადიციული',
    dish: 'ქართული ტრადიციული სამზარეულო', teaser: 'ბელიაშვილის ქუჩის კომპლექსი ქართული სუფრითა და ეთნო გარემოთი.',
    story: ['„წისქვილის“ ბელიაშვილის კომპლექსი აკაკი ბელიაშვილის ქუჩის 99 ნომერშია. აქ ქართული სამზარეულო ეთნო გარემოს ერწყმის; ღონისძიების ან მუსიკალური პროგრამის დეტალები ვიზიტამდე გადაამოწმე.'],
    dishes: ['ქართული კერძები', 'ხაჭაპური'], maps: 'Ethno Tsiskvili Beliashvili 99 Tbilisi',
    address: 'აკაკი ბელიაშვილის ქ. 99', aliases: 'Tsiskvili Beliashvili წისქვილში ბელიაშვილზე',
    menuUrl: 'https://tsiskvili.ge/', source: 'https://tsiskvili.ge/contacts/en'
  },
  {
    name: '„ქართული სახლი“', city: 'თბილისი', category: 'დუქანი / ტრადიციული',
    dish: 'ქართული სუფრა', teaser: 'ქართული კერძები და ფოლკლორული გარემო, ცაბაძის ქუჩაზე, სანაპიროსთან.',
    story: ['„ქართული სახლი“ გიორგი ცაბაძის ქუჩის 2 ნომერშია, მტკვრის მარცხენა სანაპიროსა და მუშტაიდის ბაღის მიმდებარედ. ქართული სამზარეულოს გასაცნობად და საერთო სუფრისთვის შესაფერისი ადგილია.'],
    dishes: ['ხინკალი', 'ხაჭაპური'], maps: 'Georgian House Tsabadze 2 Tbilisi',
    address: 'გიორგი ცაბაძის ქ. 2', aliases: 'Georgian House Kartuli Sakhli სანაპირო სანაპიროზე',
    source: 'https://www.yell.ge/company.php?id=116815&lan=eng'
  },
  {
    name: '„თავადური“', city: 'თბილისი', category: 'დუქანი / ტრადიციული',
    dish: 'ქართული ტრადიციული სამზარეულო', teaser: 'მუშტაიდთან, სანაპიროს მიმდებარედ — ოთხი სივრცე ქართული სუფრისთვის.',
    story: ['„თავადური“ ვლადიმერ მაიაკოვსკის ქუჩის 2/4 ნომერშია, მუშტაიდის ბაღთან. რესტორანი რამდენიმე განსხვავებულ სივრცეს აერთიანებს. კონკრეტული დარბაზის განრიგი და ხელმისაწვდომობა წინასწარ გადაამოწმე.'],
    dishes: ['თავადური ხაჭაპური', 'ქაბაბი'], maps: 'Tavaduri Mayakovsky 2/4 Tbilisi',
    address: 'ვლადიმერ მაიაკოვსკის ქ. 2/4', aliases: 'Tavaduri სანაპირო სანაპიროზე',
    menuUrl: 'https://tavaduri.com/', source: 'https://tavaduri.com/'
  },
  {
    name: '„100 ხინკალი“ — ბახტრიონი', city: 'თბილისი', category: 'დუქანი / ტრადიციული',
    dish: 'ხინკალი', teaser: 'ხინკლისთვის საბურთალოზე, ბახტრიონის 9ა ნომერში.',
    story: ['„ასი ხინკლის“ ბახტრიონის ფილიალი საბურთალოზე, ბახტრიონის ქუჩის 9ა ნომერში მდებარეობს. ეს ჩანაწერი კონკრეტულად ბახტრიონის ფილიალს ეხება.'],
    dishes: ['ხინკალი', 'ხაჭაპური'], maps: 'Asi Khinkali Bakhtrioni 9a Tbilisi',
    address: 'ბახტრიონის ქ. 9ა', aliases: '100 Khinkali Asi Khinkali ასი ხინკალი ბახტრიონზე',
    source: 'https://georgiantravelguide.com/en/asi-khinkali-bakhtrioni-tbilisi'
  }
];

// Photos published by the restaurants, their booking partners, or local guides.
const addedPhotos = {
  '„ელ დეპო“':'https://imageproxy.wolt.com/assets/67335f1ef89eb96f4520d9c2',
  'რესტორანი „ფიროსმანი“':'https://intranet.infoajara.com/storage/images/KHTnOBGZmTSUBTG9BlxLbLidVlWd8lFU5I4azcIr.jpg',
  '„პიქტოგრამა“':'https://firebasestorage.googleapis.com/v0/b/resto-827b6.appspot.com/o/backgrounds%2Fce41114c-4f40-44b2-8364-672dcb44e1e0_483837255_630018333128910_4492707724571076016_n.jpg?alt=media&token=38ed9653-7ca8-454a-b692-c9f06ba45d98',
  '„წისქვილი“ — ბელიაშვილი':'https://tsiskvili.ge/images/fb-home.jpg',
  '„თავადური“':'https://tavaduri.com/wp-content/uploads/2026/02/hero2.jpg',
  '„ქართული სახლი“':'https://restaurants-s3-bucket-aws.s3.eu-north-1.amazonaws.com/restaurants/restaurant/cmwkgm2ce0006psginflpngh4/8f73c0c5-8950-43a8-b30d-28211d0bde53-______________________.jpg',
  '„100 ხინკალი“ — ბახტრიონი':'https://cdn.georgiantravelguide.com/storage/files/asi-khinkali-bakhtrioni-tbilisi-khinkali-95dd315d94b8.jpg',
  'რესტორანი „კევრი“':'https://avatars.mds.yandex.net/get-altay/16394283/2a00000197da50768ff7ef42b4839f62e064/XXL_height'
};
for (const place of addedLocations) if (addedPhotos[place.name]) place.imageSrc=addedPhotos[place.name];

// Additional recommendations · November 2026
addedLocations.push(...[
  {
    "name": "ვერიკო",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "ვასილ პეტრიაშვილის ქ. 1 · ღვინის ქარხანა N1",
    "dish": "ქართული",
    "teaser": "ქართული სამზარეულო ღვინის ქარხანა N1-ის ეზოში, ვერაზე.",
    "story": [
      "ვერიკო — ვასილ პეტრიაშვილის ქ. 1 · ღვინის ქარხანა N1, თბილისი.",
      "ქართული სამზარეულო ღვინის ქარხანა N1-ის ეზოში, ვერაზე."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Veriko",
    "imageSrc": "photo-veriko.jpg",
    "source": "https://wolt.com/en/geo/tbilisi/restaurant/veriko"
  },
  {
    "name": "ნაპოლი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "მარიჯანის ქ. 10",
    "dish": "პიცა",
    "teaser": "რას ვაგემოვნებთ: პიცა.",
    "story": [
      "ნაპოლი — მარიჯანის ქ. 10, თბილისი.",
      "რას ვაგემოვნებთ: პიცა."
    ],
    "dishes": [
      "პიცა"
    ],
    "cuisines": [
      "იტალიური"
    ],
    "aliases": "Napoli pizza მარიჯანი",
    "imageSrc": "photo-napoli.jpg",
    "source": "https://bm.ge/en/news/napoli-expands-pizzeria-opens-a-new-bar-in-tbilisi"
  },
  {
    "name": "დოდონატი",
    "city": "თბილისი",
    "category": "ცომეული",
    "address": "ექვთიმე თაყაიშვილის ქ. 1ა",
    "dish": "დონატი",
    "teaser": "რას ვაგემოვნებთ: დონატი.",
    "story": [
      "დოდონატი — ექვთიმე თაყაიშვილის ქ. 1ა, თბილისი.",
      "რას ვაგემოვნებთ: დონატი."
    ],
    "dishes": [
      "დონატი"
    ],
    "cuisines": [
      "საკონდიტრო"
    ],
    "aliases": "Dodonut დოდონატის",
    "imageSrc": "photo-dodonut.jpg",
    "source": "https://wolt.com/en/geo/tbilisi/restaurant/dodonut"
  },
  {
    "name": "სთორი",
    "city": "ქუთაისი",
    "category": "რეგიონები",
    "address": "აკაკი წერეთლის ქ. 52",
    "dish": "ნიგვზიანი ბადრიჯანი",
    "teaser": "რას ვაგემოვნებთ: ნიგვზიანი ბადრიჯანი.",
    "story": [
      "სთორი — აკაკი წერეთლის ქ. 52, ქუთაისი.",
      "რას ვაგემოვნებთ: ნიგვზიანი ბადრიჯანი."
    ],
    "dishes": [
      "ნიგვზიანი ბადრიჯანი"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Story",
    "imageSrc": "photo-story.jpg",
    "source": "https://restaurantguru.com/Story-House-Kutaisi"
  },
  {
    "name": "გიუანი — მეღვინეობა",
    "city": "მანავი",
    "category": "რეგიონები",
    "address": "მანავი, საგარეჯოს მუნიციპალიტეტი",
    "dish": "ქაბაბი",
    "teaser": "რას ვაგემოვნებთ: ქაბაბი.",
    "story": [
      "გიუანი — მეღვინეობა — მანავი, საგარეჯოს მუნიციპალიტეტი, მანავი.",
      "რას ვაგემოვნებთ: ქაბაბი."
    ],
    "dishes": [
      "ქაბაბი"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Giuaani winery ღვინო",
    "imageSrc": "photo-giuaani.jpg",
    "source": "https://giuaani.ge/ka/about-us/"
  },
  {
    "name": "ცეცხლი აინთო",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "ტაშკენტის ქ. 10",
    "dish": "მწვადი",
    "teaser": "რას ვაგემოვნებთ: მწვადი.",
    "story": [
      "ცეცხლი აინთო — ტაშკენტის ქ. 10, თბილისი.",
      "რას ვაგემოვნებთ: მწვადი."
    ],
    "dishes": [
      "მწვადი"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Tsetskhli Ainto",
    "imageSrc": "photo-tsetskhli.jpg",
    "source": "https://www.yell.ge/company.php?id=157615&lan=geo"
  },
  {
    "name": "სუში რუმი — აბაშიძე",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "ირაკლი აბაშიძის ქ. 10/12",
    "dish": "სუში",
    "teaser": "რას ვაგემოვნებთ: სუში.",
    "story": [
      "სუში რუმი — აბაშიძე — ირაკლი აბაშიძის ქ. 10/12, თბილისი.",
      "რას ვაგემოვნებთ: სუში."
    ],
    "dishes": [
      "სუში"
    ],
    "cuisines": [
      "იაპონური"
    ],
    "aliases": "Sushi Room",
    "imageSrc": "photo-sushiroom.jpg",
    "source": "https://sushiroom.ge/en/contact/"
  },
  {
    "name": "მაკდონალდსი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "შოთა რუსთაველის გამზ. 2/4",
    "dish": "Big Tasty",
    "teaser": "რას ვაგემოვნებთ: Big Tasty.",
    "story": [
      "მაკდონალდსი — შოთა რუსთაველის გამზ. 2/4, თბილისი.",
      "რას ვაგემოვნებთ: Big Tasty."
    ],
    "dishes": [
      "Big Tasty"
    ],
    "cuisines": [
      "სწრაფი კვება"
    ],
    "aliases": "McDonald's McDonalds Big Taste ბიგ თეისთი ბურგერი",
    "imageSrc": "photo-mcdonalds.jpg",
    "source": "https://mcdonalds.ge/"
  },
  {
    "name": "ლოლიტა",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "თამარ ჭოველიძის ქ. 7",
    "dish": "ნიოკი",
    "teaser": "რას ვაგემოვნებთ: ნიოკი.",
    "story": [
      "ლოლიტა — თამარ ჭოველიძის ქ. 7, თბილისი.",
      "რას ვაგემოვნებთ: ნიოკი."
    ],
    "dishes": [
      "ნიოკი"
    ],
    "cuisines": [
      "ევროპული"
    ],
    "aliases": "Lolita gnocchi",
    "imageSrc": "photo-lolita.jpg",
    "source": "https://aqc.ge/places/lolita"
  },
  {
    "name": "Cin Cin",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "დიმიტრი უზნაძის ქ. 107",
    "dish": "იტალიური · ევროპული",
    "teaser": "რესტორანი დიმიტრი უზნაძის ქუჩის 107 ნომერში.",
    "story": [
      "Cin Cin — დიმიტრი უზნაძის ქ. 107, თბილისი.",
      "რესტორანი დიმიტრი უზნაძის ქუჩის 107 ნომერში."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "იტალიური",
      "ევროპული"
    ],
    "aliases": "ჩინ ჩინ ცინ ცინ",
    "imageSrc": "photo-cincin.jpg",
    "source": "https://wolt.com/en/geo/tbilisi/restaurant/restsurants-cin-cin",
    "phone": "551 16 95 59"
  },
  {
    "name": "ღუმელი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "მიხეილ ლერმონტოვის ქ. 10 · IOTA Hotel",
    "dish": "ქართული · ევროპული",
    "teaser": "რესტორანი IOTA Hotel-ის ზედა სართულზე, ლერმონტოვის ქუჩაზე.",
    "story": [
      "ღუმელი — მიხეილ ლერმონტოვის ქ. 10 · IOTA Hotel, თბილისი.",
      "რესტორანი IOTA Hotel-ის ზედა სართულზე, ლერმონტოვის ქუჩაზე."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული",
      "ევროპული"
    ],
    "aliases": "Ghumeli",
    "imageSrc": "photo-ghumeli.jpg",
    "source": "https://ge.ik.gaultmillau.com/en/restaurants/ghumeli"
  },
  {
    "name": "AMO",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "პოლიკარპე კაკაბაძის ქ. 27",
    "dish": "ქართული · ევროპული",
    "teaser": "ქართული და ევროპული სამზარეულო პოლიკარპე კაკაბაძის ქუჩაზე.",
    "story": [
      "AMO — პოლიკარპე კაკაბაძის ქ. 27, თბილისი.",
      "ქართული და ევროპული სამზარეულო პოლიკარპე კაკაბაძის ქუჩაზე."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული",
      "ევროპული"
    ],
    "aliases": "ამო",
    "imageSrc": "photo-amo.jpg",
    "source": "https://amo-restaurant.com/",
    "phone": "505 55 90 55"
  },
  {
    "name": "Grilisi City View Bar",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "საბაგიროს ზედა სადგურთან · ქართლის დედის მიმდებარედ",
    "dish": "ქართული · ევროპული",
    "teaser": "ბარ-გრილი თბილისის ხედით, საბაგიროს ზედა სადგურთან.",
    "story": [
      "Grilisi City View Bar — საბაგიროს ზედა სადგურთან · ქართლის დედის მიმდებარედ, თბილისი.",
      "ბარ-გრილი თბილისის ხედით, საბაგიროს ზედა სადგურთან."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული",
      "ევროპული"
    ],
    "aliases": "Grilsi გრილისი გრილზი",
    "imageSrc": "photo-grilisi.jpg",
    "source": "https://yandex.com.ge/maps/org/grilisi_grill_bar/154583949468/",
    "phone": "591 11 07 86"
  },
  {
    "name": "დონა — საკონდიტრო",
    "city": "ბათუმი",
    "category": "რეგიონები",
    "address": "ფარნავაზ მეფის ქ. 121",
    "dish": "დესერტი",
    "teaser": "რას ვაგემოვნებთ: დესერტი.",
    "story": [
      "დონა — საკონდიტრო — ფარნავაზ მეფის ქ. 121, ბათუმი.",
      "რას ვაგემოვნებთ: დესერტი."
    ],
    "dishes": [
      "დესერტი"
    ],
    "cuisines": [
      "საკონდიტრო"
    ],
    "aliases": "Dona confectionery",
    "imageSrc": "photo-dona.jpg",
    "source": "https://yandex.com.ge/maps/org/dona/80849245070/"
  },
  {
    "name": "ბარბატუსი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "მერაბ კოსტავას ქ. 70",
    "dish": "თევზი",
    "teaser": "რას ვაგემოვნებთ: თევზი.",
    "story": [
      "ბარბატუსი — მერაბ კოსტავას ქ. 70, თბილისი.",
      "რას ვაგემოვნებთ: თევზი."
    ],
    "dishes": [
      "თევზი"
    ],
    "cuisines": [
      "ევროპული"
    ],
    "aliases": "Barbatus",
    "imageSrc": "photo-barbatus.jpg",
    "source": "https://barbatus.ge/"
  },
  {
    "name": "ავსტრიული ლუდსახარში",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "დავით აღმაშენებლის ხეივანი 256",
    "dish": "ხინკალი · მწვადი · კანჭი · ვენური შნიცელი",
    "teaser": "რას ვაგემოვნებთ: ხინკალი, მწვადი, კანჭი, ვენური შნიცელი.",
    "story": [
      "ავსტრიული ლუდსახარში — დავით აღმაშენებლის ხეივანი 256, თბილისი.",
      "რას ვაგემოვნებთ: ხინკალი, მწვადი, კანჭი, ვენური შნიცელი."
    ],
    "dishes": [
      "ხინკალი",
      "მწვადი",
      "კანჭი",
      "ვენური შნიცელი"
    ],
    "cuisines": [
      "ქართული",
      "ავსტრიული"
    ],
    "aliases": "Austrian Brewery",
    "imageSrc": "photo-austrian.jpg",
    "source": "https://www.yell.ge/company.php?id=152774&lan=eng"
  },
  {
    "name": "დიარონი",
    "city": "ზუგდიდი",
    "category": "რეგიონები",
    "address": "იონა მეუნარგიას ქ. 9",
    "dish": "ხინკალი · მწვადი · ქაბაბი",
    "teaser": "რას ვაგემოვნებთ: ხინკალი, მწვადი, ქაბაბი.",
    "story": [
      "დიარონი — იონა მეუნარგიას ქ. 9, ზუგდიდი.",
      "რას ვაგემოვნებთ: ხინკალი, მწვადი, ქაბაბი."
    ],
    "dishes": [
      "ხინკალი",
      "მწვადი",
      "ქაბაბი"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Diaroni",
    "imageSrc": "photo-diaroni.jpg",
    "source": "https://www.yell.ge/company.php?id=134206&lan=geo"
  },
  {
    "name": "სესილი — Cecilia",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "მერაბ ბერძენიშვილის ქ. 2",
    "dish": "ხინკალი",
    "teaser": "რას ვაგემოვნებთ: ხინკალი.",
    "story": [
      "სესილი — Cecilia — მერაბ ბერძენიშვილის ქ. 2, თბილისი.",
      "რას ვაგემოვნებთ: ხინკალი."
    ],
    "dishes": [
      "ხინკალი"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Cecilia City Cafe ცეცილია სესილი",
    "imageSrc": "photo-cecilia.jpg",
    "source": "https://www.yell.ge/company.php?id=131188&lan=eng"
  },
  {
    "name": "ოიში სუში — ყაზბეგი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "ალექსანდრე ყაზბეგის გამზ. 37",
    "dish": "თეისთ სეტი · შებოლილი ფილადელფია სეტი",
    "teaser": "რას ვაგემოვნებთ: თეისთ სეტი, შებოლილი ფილადელფია სეტი.",
    "story": [
      "ოიში სუში — ყაზბეგი — ალექსანდრე ყაზბეგის გამზ. 37, თბილისი.",
      "რას ვაგემოვნებთ: თეისთ სეტი, შებოლილი ფილადელფია სეტი."
    ],
    "dishes": [
      "თეისთ სეტი",
      "შებოლილი ფილადელფია სეტი"
    ],
    "cuisines": [
      "იაპონური"
    ],
    "aliases": "Oishi Sushi სუში",
    "imageSrc": "photo-oishi.jpg",
    "source": "https://rezto.ge/reservation/oishisushikazbegi"
  },
  {
    "name": "კაჭრეთის ჩემპიონი",
    "city": "კაჭრეთი",
    "category": "რეგიონები",
    "address": "კაჭრეთი, გურჯაანის მუნიციპალიტეტი",
    "dish": "ხაჭაპური შამფურზე · ხინკალი · ხაბიზგინა",
    "teaser": "რას ვაგემოვნებთ: ხაჭაპური შამფურზე, ხინკალი, ხაბიზგინა.",
    "story": [
      "კაჭრეთის ჩემპიონი — კაჭრეთი, გურჯაანის მუნიციპალიტეტი, კაჭრეთი.",
      "რას ვაგემოვნებთ: ხაჭაპური შამფურზე, ხინკალი, ხაბიზგინა."
    ],
    "dishes": [
      "ხაჭაპური შამფურზე",
      "ხინკალი",
      "ხაბიზგინა"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Kachretis Chempioni Kachreti Champion",
    "imageSrc": "photo-champion.jpg",
    "source": "https://chempioni.ge/"
  },
  {
    "name": "ლა ბურრატა",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "პეტრე გამყრელიძის ქ. 4",
    "dish": "პიცა",
    "teaser": "რას ვაგემოვნებთ: პიცა.",
    "story": [
      "ლა ბურრატა — პეტრე გამყრელიძის ქ. 4, თბილისი.",
      "რას ვაგემოვნებთ: პიცა."
    ],
    "dishes": [
      "პიცა"
    ],
    "cuisines": [
      "იტალიური"
    ],
    "aliases": "La Burrata",
    "imageSrc": "photo-burrata.jpg",
    "source": "https://yandex.com.ge/maps/org/la_burrata/241485503770/"
  },
  {
    "name": "კაფე 43",
    "city": "თბილისი",
    "category": "ცომეული",
    "address": "დავით აღმაშენებლის გამზ. 189",
    "dish": "კორპუსული დესერტი",
    "teaser": "რას ვაგემოვნებთ: კორპუსული დესერტი.",
    "story": [
      "კაფე 43 — დავით აღმაშენებლის გამზ. 189, თბილისი.",
      "რას ვაგემოვნებთ: კორპუსული დესერტი."
    ],
    "dishes": [
      "კორპუსული დესერტი"
    ],
    "cuisines": [
      "საკონდიტრო",
      "ევროპული"
    ],
    "aliases": "Cafe 43",
    "imageSrc": "photo-cafe43.jpg",
    "source": "https://www.cafe43.ge/ge/menu"
  },
  {
    "name": "მოვა მაისი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "მიხეილ ზანდუკელის ჩიხი 9",
    "dish": "ევროპული",
    "teaser": "კაფე მიხეილ ზანდუკელის ჩიხში, ვერაზე.",
    "story": [
      "მოვა მაისი — მიხეილ ზანდუკელის ჩიხი 9, თბილისი.",
      "კაფე მიხეილ ზანდუკელის ჩიხში, ვერაზე."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ევროპული"
    ],
    "aliases": "Mova Maisi cafe კაფე",
    "imageSrc": "photo-movamaisi.jpg",
    "source": "https://www.remote.ge/tbilisi/cafes/mova-maisi"
  },
  {
    "name": "ბერნარდი — ტაბიძე",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "გალაკტიონ ტაბიძის ქ. 3/5",
    "dish": "პილმენი ქოთანში",
    "teaser": "რას ვაგემოვნებთ: პილმენი ქოთანში.",
    "story": [
      "ბერნარდი — ტაბიძე — გალაკტიონ ტაბიძის ქ. 3/5, თბილისი.",
      "რას ვაგემოვნებთ: პილმენი ქოთანში."
    ],
    "dishes": [
      "პილმენი ქოთანში"
    ],
    "cuisines": [
      "ქართული",
      "ევროპული"
    ],
    "aliases": "Bernard Tabidze პელმენი",
    "imageSrc": "photo-bernard.jpg",
    "source": "https://www.yell.ge/company.php?id=143224&lan=eng"
  },
  {
    "name": "გასტრონომია გავაშელი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "თიანეთის ქ. 121",
    "dish": "ქართული",
    "teaser": "ქართული გასტრონომიის გაჩერება თიანეთის ქუჩაზე.",
    "story": [
      "გასტრონომია გავაშელი — თიანეთის ქ. 121, თბილისი.",
      "ქართული გასტრონომიის გაჩერება თიანეთის ქუჩაზე."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Gastronomy Gavasheli",
    "imageSrc": "photo-gavasheli.jpg",
    "source": "https://gg.com.ge/"
  },
  {
    "name": "ბანკოკი — აწყური",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "აწყურის ქ. 45/47",
    "dish": "შემწვარი სუშის როლები",
    "teaser": "რას ვაგემოვნებთ: შემწვარი სუშის როლები.",
    "story": [
      "ბანკოკი — აწყური — აწყურის ქ. 45/47, თბილისი.",
      "რას ვაგემოვნებთ: შემწვარი სუშის როლები."
    ],
    "dishes": [
      "შემწვარი სუშის როლები"
    ],
    "cuisines": [
      "აზიური",
      "იაპონური"
    ],
    "aliases": "Bangkok Atskuri",
    "imageSrc": "photo-bangkok.jpg",
    "source": "https://bangkok.ge/"
  },
  {
    "name": "ცაზე",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "კონსტანტინე ერისთავის ქ. 21 · Hotel 21",
    "dish": "ქართული · ევროპული",
    "teaser": "მუსიკისა და მომსახურებისთვის შერჩეული ადგილი.",
    "story": [
      "ცაზე — კონსტანტინე ერისთავის ქ. 21 · Hotel 21, თბილისი.",
      "მუსიკისა და მომსახურებისთვის შერჩეული ადგილი."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული",
      "ევროპული"
    ],
    "aliases": "Tsaze მუსიკა მომსახურება",
    "imageSrc": "photo-tsaze.jpg",
    "source": "https://restaurantguru.com/tsaze-Tsaze-Tbilisi"
  },
  {
    "name": "ღვინის ქარხანა N1",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "ვასილ პეტრიაშვილის ქ. 1",
    "dish": "ღვინო",
    "teaser": "ღვინისა და გასტრონომიის სივრცე, სადაც რამდენიმე ობიექტია გაერთიანებული.",
    "story": [
      "ღვინის ქარხანა N1 — ვასილ პეტრიაშვილის ქ. 1, თბილისი.",
      "ღვინისა და გასტრონომიის სივრცე, სადაც რამდენიმე ობიექტია გაერთიანებული."
    ],
    "dishes": [
      "ღვინო"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Wine Factory N1 ღვინის ქარხანა ნომერი 1",
    "imageSrc": "photo-winefactory.jpg",
    "source": "https://www.waze.com/live-map/directions/ge/tbilisi/tbilisi/wine-factory-n1?to=place.ChIJKWfGa9oNREARTki4DTE8akw"
  },
  {
    "name": "8000 მოსავალი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "სულხან ცინცაძის ქ. 26",
    "dish": "ღვინო",
    "teaser": "რას ვაგემოვნებთ: ღვინო.",
    "story": [
      "8000 მოსავალი — სულხან ცინცაძის ქ. 26, თბილისი.",
      "რას ვაგემოვნებთ: ღვინო."
    ],
    "dishes": [
      "ღვინო"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "8000 Vintages",
    "imageSrc": "photo-vintages.jpg",
    "source": "https://8000vintages.ge/"
  },
  {
    "name": "ჩემთან — ავლაბარი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "მეტეხის ქ. 22",
    "dish": "ქართული",
    "teaser": "ქართული რესტორანი ავლაბარში, მეტეხის ქუჩის 22 ნომერში.",
    "story": [
      "ჩემთან — ავლაბარი — მეტეხის ქ. 22, თბილისი.",
      "ქართული რესტორანი ავლაბარში, მეტეხის ქუჩის 22 ნომერში."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Chemtan Avlabari",
    "imageSrc": "photo-chemtan.jpg",
    "source": "https://yandex.com.ge/maps/org/restaurant_chemtan_/72381903440/",
    "menuUrl": "https://www.facebook.com/Restauranttchemtan/"
  },
  {
    "name": "მაჟორელის ლურჯი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "სადმელის ქ. 20",
    "dish": "ევროპული",
    "teaser": "კაფე სადმელის ქუჩაზე, თბილისის გზამკვლევში.",
    "story": [
      "მაჟორელის ლურჯი — სადმელის ქ. 20, თბილისი.",
      "კაფე სადმელის ქუჩაზე, თბილისის გზამკვლევში."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ევროპული"
    ],
    "aliases": "Majorelle Blue",
    "imageSrc": "photo-majorelle.jpg",
    "source": "https://yandex.com.ge/maps/org/majorelle_blue/198154715479/"
  },
  {
    "name": "ზალა",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "ბელინსკის ქ. 2",
    "dish": "ქართული",
    "teaser": "რესტორანი და მარანი ბელინსკის ქუჩაზე, ვერაზე.",
    "story": [
      "ზალა — ბელინსკის ქ. 2, თბილისი.",
      "რესტორანი და მარანი ბელინსკის ქუჩაზე, ვერაზე."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Zala Restaurant Cellar",
    "imageSrc": "photo-zala.jpg",
    "source": "https://www.zala.ge/en"
  },
  {
    "name": "კაბადონი",
    "city": "სიღნაღი",
    "category": "რეგიონები",
    "address": "ლოლაშვილის ქ. 1",
    "dish": "ხაჭაპური · მწვადი · ხინკალი",
    "teaser": "რას ვაგემოვნებთ: ხაჭაპური, მწვადი, ხინკალი.",
    "story": [
      "კაბადონი — ლოლაშვილის ქ. 1, სიღნაღი.",
      "რას ვაგემოვნებთ: ხაჭაპური, მწვადი, ხინკალი."
    ],
    "dishes": [
      "ხაჭაპური",
      "მწვადი",
      "ხინკალი"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Kabadoni Sighnaghi",
    "imageSrc": "photo-kabadoni.jpg",
    "source": "https://visitsighnaghi.com/en/kabadoni"
  },
  {
    "name": "ეთნოგრაფი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "აკაკი ბელიაშვილის ქ. 105",
    "dish": "ქართული",
    "teaser": "ქართული ტრადიციული სამზარეულო და ეთნოგრაფიული გარემო ბელიაშვილის ქუჩაზე.",
    "story": [
      "ეთნოგრაფი — აკაკი ბელიაშვილის ქ. 105, თბილისი.",
      "ქართული ტრადიციული სამზარეულო და ეთნოგრაფიული გარემო ბელიაშვილის ქუჩაზე."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Ethnographer Ethnograph",
    "imageSrc": "photo-ethnographer.jpg",
    "source": "https://wolt.com/en/geo/tbilisi/restaurant/ethnographer"
  },
  {
    "name": "ცეხი",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "თამარ მეფის გამზ. 18",
    "dish": "ქართული · ევროპული",
    "teaser": "რესტორნები, ბარები და მუსიკალური სივრცე თამარ მეფის გამზირზე.",
    "story": [
      "ცეხი — თამარ მეფის გამზ. 18, თბილისი.",
      "რესტორნები, ბარები და მუსიკალური სივრცე თამარ მეფის გამზირზე."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული",
      "ევროპული"
    ],
    "aliases": "Cekhi Tsekhi Zeche",
    "imageSrc": "photo-cekhi.jpg",
    "source": "https://www.cekhi.ge/"
  },
  {
    "name": "წიწილა — კოსტავა",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "მერაბ კოსტავას ქ. 76",
    "dish": "სენდვიჩი",
    "teaser": "რას ვაგემოვნებთ: სენდვიჩი.",
    "story": [
      "წიწილა — კოსტავა — მერაბ კოსტავას ქ. 76, თბილისი.",
      "რას ვაგემოვნებთ: სენდვიჩი."
    ],
    "dishes": [
      "სენდვიჩი"
    ],
    "cuisines": [
      "სწრაფი კვება"
    ],
    "aliases": "Tsitsila Bistro Kostava chicken sandwich",
    "imageSrc": "photo-tsitsila.jpg",
    "source": "https://wolt.com/en/geo/tbilisi/restaurant/tsitsila-grill-bistro"
  },
  {
    "name": "ჩვენი — Chveni",
    "city": "თბილისი",
    "category": "თბილისი",
    "address": "ანზორ ერქომაიშვილის ქ. 8ბ",
    "dish": "ქართული",
    "teaser": "ქართული სამზარეულო — ანზორ ერქომაიშვილის 8ბ.",
    "story": [
      "ჩვენი — ანზორ ერქომაიშვილის ქ. 8ბ, თბილისი.",
      "ქართული სამზარეულო — ანზორ ერქომაიშვილის 8ბ."
    ],
    "dishes": [
      "მენიუს არჩევანი ადგილზე გადაამოწმე"
    ],
    "cuisines": [
      "ქართული"
    ],
    "aliases": "Chveni ჩვენი ერკომაშვილი 593767713",
    "imageSrc": "photo-chveni.jpg",
    "source": "https://ge.gaultmillau.com/en/restaurants/chveni-restaurant",
    "menuUrl": "https://chefguram.kovzy.com/?lang=1",
    "phone": "593 76 77 13"
  }
]);
const photoOverrides = {
  "„ძმობის დუქანი“": "photo-existing-0.jpg",
  "რესტორანი „დები“": "photo-existing-1.jpg",
  "„ბიკენტიას საქაბაბე“": "photo-existing-2.jpg",
  "„ფორია“": "photo-existing-3.jpg",
  "რესტორანი „ნიავი“": "photo-existing-4.jpg",
  "„ბერნი“ — Bern": "photo-existing-5.jpg",
  "„ორი ტონა“": "photo-existing-6.jpg",
  "„ჭაშნაგირი“ — ბელიაშვილი": "photo-existing-7.jpg",
  "„ჭაშნაგირი“ — სანაპირო": "photo-existing-8.jpg"
};
const millRecommendation=addedLocations.find(p=>p.name==='„წისქვილი“ — ბელიაშვილი');
if(millRecommendation){millRecommendation.dish='ქაბაბი და ქართული სუფრა';millRecommendation.dishes=['ქაბაბი',...millRecommendation.dishes];}
