import { HezibContent } from "./hezib";

const Hezib = [
  12,
  23,
  33,
  43,
  52,
  63,
  73,
  83,
  93,
  103,
  112,
  123,
  133,
  143,
  152,
  162,
  174,
  183,
  193,
  203,
  213,
  223,
  232,
  243,
  253,
  263,
  273,
  283,
  293,
  303,
  313,
  323,
  332,
  343,
  353,
  363,
  372,
  383,
  393,
  403,
  414,
  423,
  432,
  443,
  452,
  463,
  473,
  483,
  492,
  503,
  514,
  523,
  532,
  543,
  554,
  563,
  573,
  583,
  593,
];
const Nesif = [
  8,
  18,
  28,
  38,
  47,
  57,
  68,
  78,
  88,
  98,
  108,
  117,
  127,
  138,
  147,
  157,
  168,
  178,
  188,
  197,
  208,
  218,
  227,
  237,
  248,
  257,
  268,
  278,
  288,
  298,
  307,
  318,
  327,
  337,
  348,
  357,
  368,
  378,
  387,
  398,
  408,
  419,
  427,
  437,
  448,
  457,
  468,
  478,
  487,
  498,
  509,
  518,
  528,
  537,
  548,
  559,
  568,
  578,
  588,
  598,
];
const Roboa = [
  6,
  10,
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
  105,
  110,
  115,
  120,
  125,
  130,
  135,
  141,
  145,
  149,
  155,
  160,
  165,
  171,
  176,
  180,
  185,
  190,
  195,
  200,
  205,
  210,
  215,
  220,
  225,
  229,
  234,
  240,
  245,
  250,
  255,
  260,
  265,
  271,
  275,
  281,
  285,
  290,
  296,
  300,
  305,
  310,
  316,
  320,
  325,
  330,
  335,
  340,
  345,
  350,
  355,
  360,
  365,
  370,
  375,
  380,
  385,
  390,
  395,
  400,
  406,
  411,
  417,
  421,
  425,
  430,
  434,
  440,
  445,
  450,
  455,
  460,
  465,
  470,
  475,
  480,
  485,
  489,
  495,
  500,
  506,
  511,
  516,
  520,
  525,
  530,
  535,
  540,
  545,
  551,
  556,
  561,
  566,
  571,
  576,
  580,
  585,
  591,
  596,
  602,
];

export const Surah = [
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 7,
    title: "Al-Fatiha",
    titleAr: "الفاتحة",
    index: "001",
    pages: [2, 2],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 286,
    title: "Al-Baqara",
    titleAr: "البقرة",
    index: "002",
    pages: [3, 50],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 200,
    title: "Aal-Imran",
    titleAr: "آل عمران",
    index: "003",
    pages: [51, 76],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 176,
    title: "An-Nisaa'",
    titleAr: "النساء",
    index: "004",
    pages: [77, 106],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 120,
    title: "Al-Ma'ida",
    titleAr: "المائدة",
    index: "005",
    pages: [107, 128],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 165,
    title: "Al-An'am",
    titleAr: "الأنعام",
    index: "006",
    pages: [129, 151],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 206,
    title: "Al-A'raf",
    titleAr: "الأعراف",
    index: "007",
    pages: [152, 177],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 75,
    title: "Al-Anfal",
    titleAr: "الأنفال",
    index: "008",
    pages: [178, 187],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 129,
    title: "Al-Tawba",
    titleAr: "التوبة",
    index: "009",
    pages: [188, 208],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 109,
    title: "Yunus",
    titleAr: "يونس",
    index: "010",
    pages: [209, 221],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 123,
    title: "Hud",
    titleAr: "هود",
    index: "011",
    pages: [222, 235],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 111,
    title: "Yusuf",
    titleAr: "يوسف",
    index: "012",
    pages: [236, 249],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 43,
    title: "Ar-Ra'd",
    titleAr: "الرعد",
    index: "013",
    pages: [250, 255],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 52,
    title: "Ibrahim",
    titleAr: "إبراهيم",
    index: "014",
    pages: [256, 262],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 99,
    title: "Al-Hijr",
    titleAr: "الحجر",
    index: "015",
    pages: [263, 267],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 128,
    title: "An-Nahl",
    titleAr: "النحل",
    index: "016",
    pages: [268, 282],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 111,
    title: "Al-Israa",
    titleAr: "الإسراء",
    index: "017",
    pages: [283, 293],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 110,
    title: "Al-Kahf",
    titleAr: "الكهف",
    index: "018",
    pages: [294, 305],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 98,
    title: "Maryam",
    titleAr: "مريم",
    index: "019",
    pages: [306, 312],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 135,
    title: "Ta-Ha",
    titleAr: "طه",
    index: "020",
    pages: [313, 322],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 112,
    title: "Al-Anbiya",
    titleAr: "الأنبياء",
    index: "021",
    pages: [323, 331],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 78,
    title: "Al-Hajj",
    titleAr: "الحج",
    index: "022",
    pages: [332, 342],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 118,
    title: "Al-Muminun",
    titleAr: "المؤمنون",
    index: "023",
    pages: [343, 350],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 64,
    title: "An-Nur",
    titleAr: "النور",
    index: "024",
    pages: [351, 359],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 77,
    title: "Al-Furqan",
    titleAr: "الفرقان",
    index: "025",
    pages: [360, 367],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 227,
    title: "Ash-Shuara",
    titleAr: "الشعراء",
    index: "026",
    pages: [368, 377],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 93,
    title: "An-Naml",
    titleAr: "النمل",
    index: "027",
    pages: [378, 385],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 88,
    title: "Al-Qasas",
    titleAr: "القصص",
    index: "028",
    pages: [386, 396],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 69,
    title: "Al-Ankabut",
    titleAr: "العنكبوت",
    index: "029",
    pages: [397, 404],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 60,
    title: "Ar-Rum",
    titleAr: "الروم",
    index: "030",
    pages: [405, 411],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 34,
    title: "Luqman",
    titleAr: "لقمان",
    index: "031",
    pages: [412, 415],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 30,
    title: "As-Sajdah",
    titleAr: "السجدة",
    index: "032",
    pages: [416, 418],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 73,
    title: "Al-Ahzab",
    titleAr: "الأحزاب",
    index: "033",
    pages: [419, 428],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 54,
    title: "Saba",
    titleAr: "سبأ",
    index: "034",
    pages: [429, 434],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 45,
    title: "Fatir",
    titleAr: "فاطر",
    index: "035",
    pages: [435, 440],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 83,
    title: "Yasin",
    titleAr: "يس",
    index: "036",
    pages: [441, 446],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 182,
    title: "As-Saffat",
    titleAr: "الصافات",
    index: "037",
    pages: [447, 453],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 88,
    title: "Sad",
    titleAr: "ص",
    index: "038",
    pages: [454, 458],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 75,
    title: "Az-Zumar",
    titleAr: "الزمر",
    index: "039",
    pages: [459, 467],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 85,
    title: "Ghafir",
    titleAr: "غافر",
    index: "040",
    pages: [468, 477],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 54,
    title: "Fussilat",
    titleAr: "فصلت",
    index: "041",
    pages: [478, 483],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 53,
    title: "Ash-Shura",
    titleAr: "الشورى",
    index: "042",
    pages: [484, 489],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 89,
    title: "Az-Zukhruf",
    titleAr: "الزخرف",
    index: "043",
    pages: [490, 496],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 59,
    title: "Ad-Dukhan",
    titleAr: "الدخان",
    index: "044",
    pages: [497, 498],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 37,
    title: "Al-Jathiya",
    titleAr: "الجاثية",
    index: "045",
    pages: [499, 502],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 35,
    title: "Al-Ahqaf",
    titleAr: "الأحقاف",
    index: "046",
    pages: [403, 507],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 38,
    title: "Muhammad",
    titleAr: "محمد",
    index: "047",
    pages: [508, 511],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 29,
    title: "Al-Fath",
    titleAr: "الفتح",
    index: "048",
    pages: [512, 515],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 18,
    title: "Al-Hujurat",
    titleAr: "الحجرات",
    index: "049",
    pages: [516, 518],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 45,
    title: "Qaf",
    titleAr: "ق",
    index: "050",
    pages: [519, 520],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 60,
    title: "Az-Zariyat",
    titleAr: "الذاريات",
    index: "051",
    pages: [521, 523],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 49,
    title: "At-Tur",
    titleAr: "الطور",
    index: "052",
    pages: [524, 526],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 62,
    title: "An-Najm",
    titleAr: "النجم",
    index: "053",
    pages: [527, 528],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 55,
    title: "Al-Qamar",
    titleAr: "القمر",
    index: "054",
    pages: [529, 531],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 78,
    title: "Ar-Rahman",
    titleAr: "الرحمن",
    index: "055",
    pages: [532, 534],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 96,
    title: "Al-Waqia",
    titleAr: "الواقعة",
    index: "056",
    pages: [535, 537],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 29,
    title: "Al-Hadid",
    titleAr: "الحديد",
    index: "057",
    pages: [538, 542],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 22,
    title: "Al-Mujadilah",
    titleAr: "المجادلة",
    index: "058",
    pages: [543, 545],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 24,
    title: "Al-Hashr",
    titleAr: "الحشر",
    index: "059",
    pages: [546, 549],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 13,
    title: "Al-Mumtahinah",
    titleAr: "الممتحنة",
    index: "060",
    pages: [550, 551],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 14,
    title: "As-Saff",
    titleAr: "الصف",
    index: "061",
    pages: [552, 553],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 11,
    title: "Al-Jumu'ah",
    titleAr: "الجمعة",
    index: "062",
    pages: [554, 554],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 11,
    title: "Al-Munafiqun",
    titleAr: "المنافقون",
    index: "063",
    pages: [555, 556],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 18,
    title: "At-Taghabun",
    titleAr: "التغابن",
    index: "064",
    pages: [557, 558],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 12,
    title: "At-Talaq",
    titleAr: "الطلاق",
    index: "065",
    pages: [559, 560],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 12,
    title: "At-Tahrim",
    titleAr: "التحريم",
    index: "066",
    pages: [561, 562],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 30,
    title: "Al-Mulk",
    titleAr: "الملك",
    index: "067",
    pages: [563, 564],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 52,
    title: "Al-Qalam",
    titleAr: "القلم",
    index: "068",
    pages: [565, 566],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 52,
    title: "Al-Haqqah",
    titleAr: "الحاقة",
    index: "069",
    pages: [567, 568],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 44,
    title: "Al-Ma'arij",
    titleAr: "المعارج",
    index: "070",
    pages: [569, 570],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 28,
    title: "Nuh",
    titleAr: "نوح",
    index: "071",
    pages: [571, 572],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 28,
    title: "Al-Jinn",
    titleAr: "الجن",
    index: "072",
    pages: [573, 574],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 20,
    title: "Al-Muzzammil",
    titleAr: "المزمل",
    index: "073",
    pages: [575, 575],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 56,
    title: "Al-Muddaththir",
    titleAr: "المدثر",
    index: "074",
    pages: [576, 577],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 40,
    title: "Al-Qiyamah",
    titleAr: "القيامة",
    index: "075",
    pages: [578, 578],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 31,
    title: "Al-Insan",
    titleAr: "الإنسان",
    index: "076",
    pages: [579, 580],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 50,
    title: "Al-Mursalat",
    titleAr: "المرسلات",
    index: "077",
    pages: [581, 582],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 40,
    title: "An-Naba",
    titleAr: "النبأ",
    index: "078",
    pages: [583, 583],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 46,
    title: "An-Naziat",
    titleAr: "النازعات",
    index: "079",
    pages: [584, 585],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 42,
    title: "Abasa",
    titleAr: "عبس",
    index: "080",
    pages: [586, 586],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 29,
    title: "At-Takwir",
    titleAr: "التكوير",
    index: "081",
    pages: [587, 587],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 19,
    title: "Al-Infitar",
    titleAr: "الإنفطار",
    index: "082",
    pages: [588, 588],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 36,
    title: "Al-Mutaffifin",
    titleAr: "المطففين",
    index: "083",
    pages: [589, 589],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 25,
    title: "Al-Inshiqaq",
    titleAr: "الإنشقاق",
    index: "084",
    pages: [590, 590],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 22,
    title: "Al-Buruj",
    titleAr: "البروج",
    index: "085",
    pages: [591, 591],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 17,
    title: "At-Tariq",
    titleAr: "الطارق",
    index: "086",
    pages: [592, 592],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 19,
    title: "Al-Ala",
    titleAr: "الأعلى",
    index: "087",
    pages: [593, 593],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 26,
    title: "Al-Ghashiyah",
    titleAr: "الغاشية",
    index: "088",
    pages: [594, 594],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 30,
    title: "Al-Fajr",
    titleAr: "الفجر",
    index: "089",
    pages: [595, 595],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 20,
    title: "Al-Balad",
    titleAr: "البلد",
    index: "090",
    pages: [596, 596],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 15,
    title: "Ash-Shams",
    titleAr: "الشمس",
    index: "091",
    pages: [596, 596],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 21,
    title: "Al-Lail",
    titleAr: "الليل",
    index: "092",
    pages: [597, 597],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 11,
    title: "Ad-Duha",
    titleAr: "الضحى",
    index: "093",
    pages: [598, 598],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 8,
    title: "Ash-Sharh",
    titleAr: "الشرح",
    index: "094",
    pages: [598, 598],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 8,
    title: "At-Tin",
    titleAr: "التين",
    index: "095",
    pages: [599, 599],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 19,
    title: "Al-Alaq",
    titleAr: "العلق",
    index: "096",
    pages: [599, 599],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 5,
    title: "Al-Qadr",
    titleAr: "القدر",
    index: "097",
    pages: [600, 600],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 8,
    title: "Al-Bayinah",
    titleAr: "البينة",
    index: "098",
    pages: [600, 600],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 8,
    title: "Az-Zalzalah",
    titleAr: "الزلزلة",
    index: "099",
    pages: [601, 601],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 11,
    title: "Al-Adiyat",
    titleAr: "العاديات",
    index: "100",
    pages: [602, 602],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 11,
    title: "Al-Qariah",
    titleAr: "القارعة",
    index: "101",
    pages: [602, 602],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 8,
    title: "Al-Takathur",
    titleAr: "التكاثر",
    index: "102",
    pages: [603, 603],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 3,
    title: "Al-Asr",
    titleAr: "العصر",
    index: "103",
    pages: [603, 603],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 9,
    title: "Al-Humazah",
    titleAr: "الهمزة",
    index: "104",
    pages: [603, 603],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 5,
    title: "Al-Fil",
    titleAr: "الفيل",
    index: "105",
    pages: [604, 604],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 4,
    title: "Quraish",
    titleAr: "قريش",
    index: "106",
    pages: [604, 604],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 7,
    title: "Al-Ma'un",
    titleAr: "الماعون",
    index: "107",
    pages: [605, 605],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 3,
    title: "Al-Kauthar",
    titleAr: "الكوثر",
    index: "108",
    pages: [605, 605],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 6,
    title: "Al-Kafirun",
    titleAr: "الكافرون",
    index: "109",
    pages: [605, 605],
  },
  {
    place: "Medina",
    type: "Madaniyah",
    count: 3,
    title: "An-Nasr",
    titleAr: "النصر",
    index: "110",
    pages: [606, 606],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 5,
    title: "Al-Masad",
    titleAr: "المسد",
    index: "111",
    pages: [606, 606],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 4,
    title: "Al-Ikhlas",
    titleAr: "الإخلاص",
    index: "112",
    pages: [606, 606],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 5,
    title: "Al-Falaq",
    titleAr: "الفلق",
    index: "113",
    pages: [607, 607],
  },
  {
    place: "Mecca",
    type: "Makkiyah",
    count: 6,
    title: "An-Nas",
    titleAr: "الناس",
    index: "114",
    pages: [607, 607],
  },
];
export const PageNum = 607;
export const contentSoursh = () => {
  const arr = [];
  let obj = [];
  let val = 0;
  Surah.forEach((sourah, index) => {
    obj.unshift({
      title: sourah.titleAr,
      count: sourah.count,
      type: sourah.type,
    });
    if ((index + 1) % 3 === 0) {
      val += 1;
      arr.push({ index: val, item: [...obj] });
      obj = [];
    }
  });
  return arr;
};

export const getSourah = (index) => {
  const id = PageNum - index;
  const title = Surah.findIndex(
    (sourah) => sourah.pages[0] <= id && id <= sourah.pages[1]
  );
  return Surah[title].titleAr;
};

export const getSourahPageByName = (name) => {
  const sourah = Surah.find((sourah) => sourah.titleAr === name);
  return PageNum - sourah.pages[0];
};
export const getHezibPageByName = (name) => {
  const hezib = HezibContent.find((hezib) => hezib.hezib.Start === name);
  return PageNum - Hezib[hezib.index - 2];
};

export const getHezib = (index) => {
  const id = PageNum - index;
  const result = Hezib.findIndex((pageNum) => id < pageNum) + 1;
  return result === 0 ? 60 : result;
};

export const whichToast = (index) => {
  const id = PageNum - index;
  return Hezib.includes(id)
    ? "H"
    : Nesif.includes(id)
    ? "N"
    : Roboa.includes(id)
    ? "R"
    : "";
};
