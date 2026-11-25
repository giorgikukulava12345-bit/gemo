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

