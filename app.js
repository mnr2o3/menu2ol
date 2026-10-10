const menu = [
  {
    id: "tea", title: "Чай и помол", note: "", type: "tables",
    tea: [
      ["Белый чай", "4", "6", "90–95 °C", "4 мин"],
      ["Зеленый чай", "3", "5", "80–85 °C", "2–3 мин"],
      ["Красный чай", "4", "6", "90–95 °C", "3–4 мин"],
      ["Улун", "3", "5", "80–90 °C", "3–4 мин"],
      ["Тизан", "5", "8", "95 °C", "4–5 мин"]
    ],
    grind: [["Турка", "3"], ["Гейзер", "4–5"], ["Эспрессо", "4,1"], ["Аэропресс", "5"], ["Воронка", "7"], ["Чашка", "7,5"], ["Фильтр", "8,1 на 0,6"], ["Френч-пресс", "9"]]
  },
  {
    id: "wraps", title: "Врапы", note: "", cards: [
      {name: "Кура", items: ["Тортилья", "Соус тоннато", "Моцарелла", "Шпинат", "Курица су-вид", "Кинза", "Кукуруза"]},
      {name: "Тунец", items: ["Тортилья", "Творожный сыр", "Моцарелла", "Шпинат", "Тунец консервированный", "Вяленые томаты"]},
      {name: "Бекон", items: ["Тортилья", "Творожный сыр", "Моцарелла", "Шпинат", "Бекон", "Укроп", "Трюфельное масло"]},
      {name: "Грибы", items: ["Тортилья", "Творожный сыр", "Моцарелла", "Шпинат", "Шампиньоны", "Лук репчатый", "Халапеньо", "Укроп", "Кинза", "Трюфельное масло"]}
    ]
  },
  {
    id: "grills", title: "Гриль-чизы", note: "", cards: [
      {name: "Курица-бекон", items: ["Тартин", "Соус гриль-чиз", "Шпинат", "Сыр тертый", "Курица су-вид", "Бекон"]},
      {name: "Говядина", items: ["Тартин", "Соус гриль-чиз", "Шпинат", "Сыр тертый", "Говядина", "Халапеньо"]},
      {name: "Чоризо", items: ["Тартин", "Соус том ям", "Шпинат", "Сыр тертый", "Чоризо"]},
      {name: "Сыр", items: ["Тартин", "Соус гриль-чиз", "Шпинат", "Сыр тертый", "Халапеньо"]},
      {name: "Мортаделла", items: ["Тартин", "Горчичный соус", "Шпинат", "Сыр тертый", "Мортаделла (вареная колбаса)"]}
    ]
  },
  {
    id: "porridge", title: "Каши", note: "", recipes: [
      {name: "Со сгущенкой из авокадо", image: "assets/porridge.jpeg", items: [["Хлопья", "50 г"], ["Молоко", "150 г"], ["Вода", "50 г"], ["Сахар", "10 г"], ["Соль", "1 г"], ["Сгущенка из авокадо", "60 г"], ["Битая вишня", "20 г"], ["Посыпка: бисквит / грецкий орех", "20 г"]]},
      {name: "Со сгущенкой из тыквы", items: [["Хлопья", "50 г"], ["Молоко", "150 г"], ["Вода", "50 г"], ["Сахар", "10 г"], ["Соль", "1 г"], ["Сгущенка из тыквы", "70 г"], ["Семечки тыквенные", "30 г"]]}
    ]
  },
  {
    id: "syrniki", title: "Сырники", note: "", recipes: [
      {name: "С манговым курдом", image: "assets/syrniki-mango.jpeg", items: [["Сырник", "3 шт."], ["Сметана", "30 г"], ["Манговый курд", "20 г"], ["Битая клубника", "20 г"], ["Семечки подсолнечные карамелизированные", "15 г"]]},
      {name: "С фисташковой пастой", image: "assets/syrniki-pistachio.jpeg", items: [["Сырник", "3 шт."], ["Фисташковая паста", "30 г"], ["Малина перетертая", "20 г"], ["Фисташка карамелизированная", "15 г"]]},
      {name: "Со сгущенкой из тыквы", image: "assets/syrniki-pumpkin.jpeg", items: [["Сырник", "3 шт."], ["Сметана", "30 г"], ["Сгущенка из тыквы", "40 г"], ["Клюква", "10 г"], ["Семечки тыквенные карамелизированные", "15 г"]]}
    ]
  },
  {
    id: "prep", title: "Заготовки", note: "", subsections: [
      {title: "Битые ягоды", recipes: [
        {name: "Битая клубника", items: [["Клубника", "200 г"], ["Сахар", "50 г"], ["Соль", "3 г"]]},
        {name: "Битая вишня", items: [["Вишня", "200 г"], ["Сахар", "50 г"], ["Соль", "3 г"]]},
        {name: "Малина перетертая", items: [["Малина", "200 г"], ["Сахар", "50 г"], ["Соль", "3 г"]]}
      ]},
      {title: "Соусы", cards: [
        {name: "Соус том ям", items: ["Яйцо", "Горчица", "Подсолнечное масло", "Концентрат «Том Ям»", "Соль"]},
        {name: "Соус горчичный", items: ["Творожный сыр", "Горчица", "Трюфельное масло"]},
        {name: "Соус гриль-чиз", items: ["Яйцо", "Горчица", "Подсолнечное масло", "Основа «барбекю»", "Соль"]},
        {name: "Соус тоннато", items: ["Яйцо", "Горчица", "Подсолнечное масло", "Тунец", "Каперсы", "Анчоусы", "Лимонный сок", "Соль"]},
        {name: "Соус манго", items: ["Пюре манго", "Сахар", "Желатин", "Апельсин", "Вода"]},
        {name: "Соус красная смородина", items: ["Пюре красной смородины", "Клубника с/м", "Сахар", "Пектин NH", "Вода", "Тимьян"]}
      ]}
    ]
  },
  {
    id: "bar", title: "Бар", note: "", subsections: [
      {title: "Горячие напитки", cards: [
        {name: "Какао с зефирками", items: ["Шоколад — 40 г", "Молоко — 200 мл", "Зефир — 10 г"]},
        {name: "Маття-шот", items: ["Маття — 1 г", "Вода 70 °C — 70 мл"]},
        {name: "Американо", items: ["Эспрессо", "Вода — 100 мл"]},
        {name: "Флэт уайт", items: ["Эспрессо", "Молоко — 110 мл"]},
        {name: "Маття-латте", items: ["Маття — 1 г + вода — 30 мл", "Молоко — 250 мл"]},
        {name: "Маття-флэт", items: ["Маття — 1 г + вода — 30 мл", "Молоко — 110 мл"]},
        {name: "Капучино", items: ["Половина эспрессо", "Молоко — 160 мл"]},
        {name: "Большой капучино", items: ["Эспрессо", "Молоко — 250 мл"]},
        {name: "Кон лече", items: ["Эспрессо", "Молоко — 150 мл", "Корица"]},
        {name: "Раф", items: ["Эспрессо", "Ванильный сахар — 10 г", "Сливки 10% — 180 мл"]},
        {name: "Глинтвейн безалкогольный", items: ["Яблоко — 15–20 г", "Клюква — 15–20 г", "Корица в палочках", "Бадьян", "Гвоздика", "Сок яблоко-вишня — 300 мл"]}
      ]},
      {title: "Холодные напитки", cards: [
        {name: "Гляссе", items: ["Джелато — 140 г", "Фильтр-кофе — 110 мл", "Шоколадная крошка"]},
        {name: "Айс-латте", items: ["Эспрессо", "Лед — 150 г", "Молоко — 150 мл"]},
        {name: "Айс-маття-латте", items: ["Маття — 1 г + вода — 30 г", "Лед — 150 г", "Молоко — 160 мл"]},
        {name: "Маття-тоник", items: ["Маття — 1 г + вода — 30 г", "Лед — 150 г", "Тоник — 160 мл"]},
        {name: "Наш лимонад", items: ["Минеральная вода — 100 мл", "Сахарный сироп — 100 мл", "Лимонный сок — 40 г", "Лед — 160 г", "Клюква — 20 г", "Долька лимона", "Звездочка бадьяна"]},
        {name: "Эспрессо-тоник", items: ["Тоник — 165 мл", "Лед — 150 г", "Эспрессо"]},
        {name: "Аффогато", items: ["Джелато — 100 г", "Эспрессо"]}
      ]},
      {title: "Сезонное меню", cards: [
        {name: "Пряный горячий шоколад", items: ["Молоко — 100 мл", "Шоколад — 100 г", "Имбирь — 2 г", "Корица — 1 г"],
          notes: ["Подача: в чашке для маленького капучино, отдаем со стаканом воды."]},
        {name: "Горячий эспрессо-тоник", items: ["Тоник — 150 г", "Апельсиновая цедра с сахаром — 15 г", "Эспрессо", "Корица — 1 г", "Вода — 30 мл"],
          steps: [
            "В питчер кладем апельсиновую цедру с сахаром, засыпаем корицей.",
            "Наливаем эспрессо и тщательно перемешиваем до полного растворения сахара.",
            "Добавляем тоник и воду.",
            "Взбиваем обязательно с образованием пенки и с повышенной температурой."
          ],
          notes: ["Подача: в стакане гранити."]}
      ]}
    ]
  },
  {
    id: "desserts", title: "Десерты", note: "", desserts: [
      {name: "Ирисковый торт", groups: [
        ["Бисквит", "Мука пшеничная в/с, кефир, сахар, масло растительное, меланж, разрыхлитель, сода, соль."],
        ["Крем «Ирисковый»", "Творожный сыр, карамель, сливки 33%, глюкозный сироп."],
        ["Карамель и декор", "Сахар, сливки 33%, масло сливочное, вода; арахис соленый жареный, кофе в зернах."]
      ]},
      {name: "Веганский кекс", groups: [["Состав", "Масло растительное, сахар, сахар тростниковый, апельсин, мука пшеничная в/с, разрыхлитель, имбирь, кардамон, яблоки, клюква сушеная."]]},
      {name: "Канеле", groups: [["Тесто", "Молоко 3,5%, масло сливочное, ваниль натуральная молотая, меланж, желток, сахар, мука пшеничная в/с."], ["Пропитка", "Ром безалкогольный."]]},
      {name: "Канеле с баварским кремом", groups: [["Канеле", "Молоко 3,5%, масло сливочное, ваниль, меланж, желток, сахар, мука пшеничная в/с, ром безалкогольный."], ["Баварский крем", "Желатин, сливки 33%, шоколад 54%."]]},
      {name: "Кекс «Морковный» с кремом «Груша-Жасмин»", groups: [
        ["Бисквит", "Меланж, сахар, сахар тростниковый, мука пшеничная в/с, разрыхлитель, сироп глюкозы, кардамон, мускатный орех, масло сливочное, молоко 3,5%, морковь, семечки тыквенные."],
        ["Крем — 25 г на порцию", "Творожный сыр, масло сливочное, сахарная пудра, кордиал «Груша-Жасмин», сироп глюкозы."]
      ]},
      {name: "Тарталетка «Манго-Лимон»", groups: [["Основа и начинка", "Масло сливочное, сахар, сироп глюкозы, меланж, мука пшеничная в/с, кукурузный крахмал, ванильный сахар, молоко, ваниль молотая, творожный сыр, манго, лимон, вода."]]},
      {name: "Тарталетка «Черника-Чиа»", groups: [["Основа", "Масло сливочное, сахар, сироп глюкозы, меланж, мука пшеничная в/с, кукурузный крахмал, ванильный сахар."], ["Начинка и декор", "Черника, брусника, тимьян, вода, пектин NH, семена чиа, творог, сахарная пудра, роза сушеная, нейтральный гель."]]},
      {name: "Торт с лесными ягодами", groups: [
        ["Бисквит", "Мука пшеничная в/с, кефир, сахар, масло растительное, меланж, разрыхлитель, сода, соль."],
        ["Крем", "Творожный сыр, сливки 33%, сахарная пудра, сироп глюкозы."],
        ["Компоте «Лесные ягоды»", "Клубника, брусника, черника, черная смородина, сахар, пектин NH."],
        ["Пропитка и декор", "Ром безалкогольный, сахарный сироп, кофе в зернах, нейтральный гель."]
      ]},
      {name: "Печенье с клюквой", groups: [["Состав", "Меланж, сахар, сливочное масло, хлопья овсяные, мука, корица, вяленая клюква, кунжут."]]},
      {name: "Печенье с арахисом", groups: [["Состав", "Меланж, сахар, сливочное масло, хлопья овсяные, мука, корица, соленый арахис."]]},
      {name: "Печенье шоколадное", groups: [["Состав", "Сливочное масло, меланж, сахар, мука, какао-порошок, соль, сода, шоколад в таблетках, грецкий орех."]]},
      {name: "Картошка", groups: [["Основа", "Сгущенное молоко, сливочное масло, какао-порошок, сахарная пудра."], ["Крошка", "Хлопья овсяные, сахар, меланж, мука, корица, соленый арахис, вяленая клюква, кефир, растительное масло, сода, разрыхлитель, соль."]]},
      {name: "Кантучини", groups: [["Состав", "Мука пшеничная, банан, миндаль, масло подсолнечное, инвертный сироп, сахар, разрыхлитель."]]}
    ]
  }
];

const barIndex = menu.findIndex(section => section.id === "bar");
const [barSection] = menu.splice(barIndex, 1);
menu.splice(0, 0, barSection);

const teaIndex = menu.findIndex(section => section.id === "tea");
const [teaSection] = menu.splice(teaIndex, 1);
menu.push(teaSection);

const nutrition = {
  "wraps:Кура": {kcal: "510", weight: "235", p: "40", f: "20", c: "40"},
  "wraps:Бекон": {kcal: "697", weight: "135", p: "41", f: "43", c: "35"},
  "wraps:Грибы": {kcal: "406", weight: "215", p: "19", f: "17", c: "42"},
  "wraps:Тунец": {kcal: "542,9", weight: "150", p: "35,1", f: "23,6", c: "47,5"},

  "grills:Курица-бекон": {variants: [
    {label: "Целый", kcal: "1260", weight: "320", p: "64", f: "70", c: "94"},
    {label: "Половина", kcal: "630", weight: "160", p: "32", f: "35", c: "47"}
  ]},
  "grills:Сыр": {variants: [
    {label: "Целый", kcal: "1031", weight: "270", p: "34", f: "56", c: "95"},
    {label: "Половина", kcal: "515", weight: "135", p: "17", f: "28", c: "47"}
  ]},
  "grills:Говядина": {variants: [
    {label: "Целый", kcal: "1272", weight: "330", p: "54", f: "74", c: "94"},
    {label: "Половина", kcal: "636", weight: "165", p: "27", f: "37", c: "47"}
  ]},
  "grills:Чоризо": {variants: [
    {label: "Целый", kcal: "676", weight: "285", p: "36", f: "17", c: "94"},
    {label: "Половина", kcal: "338", weight: "142,5", p: "18", f: "8,5", c: "47"}
  ]},
  "grills:Мортаделла": {variants: [
    {label: "Целый", kcal: "1533", weight: "380", p: "70", f: "95", c: "97"},
    {label: "Половина", kcal: "766,5", weight: "190", p: "35", f: "47,5", c: "48,5"}
  ]},

  "porridge:Со сгущенкой из авокадо": {kcal: "637,09", weight: "410", p: "14,15", f: "29,97", c: "82,69"},
  "porridge:Со сгущенкой из тыквы": {kcal: "593", weight: "425", p: "21,87", f: "25,02", c: "74,87", estimate: true},

  "prep:Битая клубника": {kcal: "36,25", weight: "30", p: "0,16", f: "0,09", c: "8,7"},
  "prep:Соус тоннато": {kcal: "122", weight: "20", p: "2", f: "13", c: "0,1"},

  "syrniki:С фисташковой пастой": {kcal: "599,1", weight: "210", p: "29,86", f: "32,01", c: "47,69", estimate: true},
  "syrniki:С манговым курдом": {kcal: "532,5", weight: "235", p: "26,09", f: "26,11", c: "50,47", estimate: true},
  "syrniki:Со сгущенкой из тыквы": {kcal: "519,4", weight: "245", p: "27,69", f: "23,79", c: "51,5", estimate: true},

  "bar:Американо": {kcal: "9", weight: "200", p: "0,1", f: "0,2", c: "1,7"},
  "bar:Капучино": {kcal: "111,06", weight: "200", p: "5,27", f: "5,86", c: "9,31"},
  "bar:Большой капучино": {kcal: "157", weight: "300", p: "7,35", f: "8,2", c: "13,45"},
  "bar:Флэт уайт": {kcal: "74,12", weight: "200", p: "3,29", f: "3,72", c: "6,87"},
  "bar:Кон лече": {kcal: "118,46", weight: "200", p: "5,36", f: "5,98", c: "10,8"},
  "bar:Айс-латте": {kcal: "97,8", weight: "350", p: "4,45", f: "5", c: "8,75"},
  "bar:Раф": {kcal: "497,93", weight: "300", p: "4,9", f: "42,77", c: "23,35"},
  "bar:Гляссе": {kcal: "386,5", weight: "300", p: "6,19", f: "20,78", c: "43,68"},
  "bar:Маття-шот": {kcal: "1,3", weight: "70", p: "0,02", f: "0,02", c: "0,26"},
  "bar:Маття-флэт": {kcal: "72,34", weight: "180", p: "3,50", f: "3,86", c: "5,9"},
  "bar:Маття-латте": {kcal: "151,2", weight: "281", p: "7,55", f: "8,05", c: "12,14", estimate: true},
  "bar:Айс-маття-латте": {kcal: "96,02", weight: "340", p: "4,66", f: "5,14", c: "7,78"},
  "bar:Маття-тоник": {kcal: "83,95", weight: "340", p: "0,02", f: "0,02", c: "20,91"},
  "bar:Наш лимонад": {kcal: "307,3", weight: "350", p: "2,52", f: "1,06", c: "71,92"},
  "bar:Эспрессо-тоник": {kcal: "94,23", weight: "300", p: "0,1", f: "0,2", c: "23,09"},
  "bar:Какао с зефирками": {kcal: "383,02", weight: "240", p: "8,58", f: "22,42", c: "36,73"},
  "bar:Аффогато": {kcal: "262,1", weight: "140", p: "4,26", f: "13,56", c: "30,74", estimate: true},
  "bar:Пряный горячий шоколад": {kcal: "646,4", weight: "203", p: "9,62", f: "43,3", c: "54,95", estimate: true},
  "bar:Горячий эспрессо-тоник": {kcal: "137,4", weight: "236", p: "0,2", f: "0,22", c: "34,12", estimate: true},
  "bar:Глинтвейн безалкогольный": {kcal: "186,46", weight: "400", p: "1,99", f: "0,9", c: "42,35"},

  "desserts:Ирисковый торт": {kcal: "731", weight: "190", p: "11", f: "49", c: "61"},
  "desserts:Веганский кекс": {kcal: "252,9", weight: "125", p: "2,8", f: "8,5", c: "40"},
  "desserts:Канеле с баварским кремом": {kcal: "143", weight: "50", p: "2,52", f: "5,58", c: "18,3"},
  "desserts:Канеле": {kcal: "145", weight: "50", p: "2,5", f: "5,5", c: "18,88", estimate: true},
  "desserts:Печенье с клюквой": {kcal: "238,9", weight: "57", p: "5,5", f: "8,2", c: "38,1"},
  "desserts:Печенье шоколадное": {kcal: "269,7", weight: "57", p: "3,1", f: "13,9", c: "32,6"},
  "desserts:Печенье с арахисом": {kcal: "262,3", weight: "58", p: "7,5", f: "13,1", c: "30,5"},
  "desserts:Картошка": {kcal: "327", weight: "73", p: "4,6", f: "19,7", c: "31,2"},
  "desserts:Тарталетка «Манго-Лимон»": {kcal: "283", weight: "80", p: "5,1", f: "11", c: "41,1"},
  "desserts:Тарталетка «Черника-Чиа»": {kcal: "324", weight: "80", p: "5,7", f: "16,2", c: "39,1"}
};

const esc = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]));
const detailRefs = {
  "Сырник": ["Творог", "Мука пшеничная в/с", "Сахар", "Меланж", "Соль", "Ванильный сахар"],
  "Апельсиновая цедра с сахаром": [
    "Свежую кожуру апельсина натираем на мелкой терке до белого — белой части должно быть как можно меньше",
    "Добавляем сахар: на 1 г цедры 3 г сахара",
    "Перемешиваем"
  ]
};
const detailFor = item => detailRefs[item] ? item : null;
const sauceCards = menu
  .find(section => section.id === "prep")
  ?.subsections.find(subsection => subsection.title === "Соусы")
  ?.cards || [];
const sauceByName = Object.fromEntries(sauceCards.map(sauce => [sauce.name, sauce.items]));
const sauceAliases = {
  "Соус тоннато": "Соус тоннато",
  "Соус гриль-чиз": "Соус гриль-чиз",
  "Соус том ям": "Соус том ям",
  "Горчичный соус": "Соус горчичный",
  "Соус горчичный": "Соус горчичный",
  "Соус манго": "Соус манго",
  "Соус красная смородина": "Соус красная смородина",
  "Соус красной смородины": "Соус красная смородина"
};
const itemName = item => String(item).split(" — ")[0].trim();
const sauceFor = item => {
  const name = itemName(item);
  return sauceByName[sauceAliases[name] || name] ? sauceAliases[name] || name : null;
};
const ingredientSearchParts = items => items.flatMap(item => {
  const sauceName = sauceFor(item);
  if (sauceName) return [item, sauceName, ...sauceByName[sauceName]];
  const detailName = detailFor(itemName(item));
  return detailName ? [item, ...detailRefs[detailName]] : [item];
});
const renderIngredient = item => {
  const sauceName = sauceFor(item);
  if (!sauceName) return detailFor(itemName(item)) ? renderDetailRef(itemName(item), item) : esc(item);
  return `<details class="sauce-ref">
    <summary>${esc(item)}</summary>
    <ul>${sauceByName[sauceName].map(part => `<li>${esc(part)}</li>`).join("")}</ul>
  </details>`;
};
const renderDetailRef = (name, label = name) => {
  const detailName = detailFor(name);
  if (!detailName) return esc(label);
  return `<details class="detail-ref">
    <summary>${esc(label)}</summary>
    <ul>${detailRefs[detailName].map(part => `<li>${esc(part)}</li>`).join("")}</ul>
  </details>`;
};
const nutritionBlock = (sectionId, name) => {
  const data = nutrition[`${sectionId}:${name}`];
  if (!data) return "";
  const primary = data.variants ? data.variants[0] : data;
  const rows = data.variants || [data];
  return `<div class="nutrition-summary"><strong>${esc(primary.kcal)} ккал</strong><span>${esc(primary.weight)} г</span><small>${data.variants ? "целый" : "на порцию"}${data.estimate ? " · расчет" : ""}</small></div>
    <details class="nutrition">
      <summary>Пищевая ценность</summary>
      <div class="nutrition__content">
        ${rows.map(row => `<div class="nutrition__row">
          ${row.label ? `<strong>${esc(row.label)}</strong>` : ""}
          <span>Б ${esc(row.p)}</span><span>Ж ${esc(row.f)}</span><span>У ${esc(row.c)}</span>
          ${data.variants ? `<span class="nutrition__meta">${esc(row.kcal)} ккал · ${esc(row.weight)} г</span>` : ""}
        </div>`).join("")}
      </div>
    </details>`;
};
const listCard = (card, sectionId) => `
  <article class="card card--list" data-card-type="list" data-search="${esc([card.name, ...ingredientSearchParts(card.items), ...(card.notes || []), ...(card.steps || [])].join(" ").toLowerCase())}">
    <div class="card__body"><h3>${esc(card.name)}</h3>${nutritionBlock(sectionId, card.name)}<ul>${card.items.map(x => `<li>${renderIngredient(x)}</li>`).join("")}</ul>
      ${card.steps ? `<details class="steps"><summary>Как готовим</summary><ol>${card.steps.map(step => `<li>${esc(step)}</li>`).join("")}</ol></details>` : ""}
      ${(card.notes || []).map(note => `<p class="card__note">${esc(note)}</p>`).join("")}
    </div>
  </article>`;
const recipeCard = (recipe, sectionId) => `
  <article class="card card--recipe" data-card-type="recipe" data-search="${esc([recipe.name, ...recipe.items.flat()].join(" ").toLowerCase())}">
    ${recipe.image ? `<img class="card__image" src="${recipe.image}" alt="${esc(recipe.caption || recipe.name)}">` : ""}
    <div class="card__body"><h3>${esc(recipe.name)}</h3>${nutritionBlock(sectionId, recipe.name)}
      <dl class="ingredients">${recipe.items.map(([name, qty]) => `<div><dt>${renderDetailRef(name)}</dt><dd>${esc(qty)}</dd></div>`).join("")}</dl>
      ${recipe.caption ? `<p class="card__caption">${esc(recipe.caption)}</p>` : ""}
    </div>
  </article>`;
const dessertCard = dessert => `
  <article class="card card--dessert" data-card-type="dessert" data-search="${esc([dessert.name, ...dessert.groups.flat()].join(" ").toLowerCase())}">
    <div class="card__body"><h3>${esc(dessert.name)}</h3>${nutritionBlock("desserts", dessert.name)}
      <div class="groups">${dessert.groups.map(([name, text]) => `<div class="group"><strong>${esc(name)}</strong><p>${esc(text)}</p></div>`).join("")}</div>
    </div>
  </article>`;
const table = (headers, rows, className = "") => `<div class="table-wrap"><table class="${className}"><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

function renderSection(section) {
  let content = "";
  if (section.type === "tables") {
    content = `<div class="subsection"><h3>Заваривание чая</h3>${table(["Чай", "300 мл", "600 мл", "Темп.", "Время"], section.tea, "table--tea")}</div>
      <div class="subsection"><h3>Помол · EK-43</h3>${table(["Способ", "Значение"], section.grind, "table--grind")}</div>`;
  } else if (section.cards) {
    content = `<div class="grid ${section.cards.length > 4 ? "grid--three" : ""}">${section.cards.map(x => listCard(x, section.id)).join("")}</div>`;
  } else if (section.recipes) {
    content = `<div class="grid ${section.recipes.length === 3 ? "grid--three" : ""}">${section.recipes.map(x => recipeCard(x, section.id)).join("")}</div>`;
  } else if (section.subsections) {
    content = section.subsections.map(sub => `<div class="subsection"><h3>${esc(sub.title)}</h3><div class="grid ${((sub.cards || sub.recipes).length > 4) ? "grid--three" : ""}">${sub.cards ? sub.cards.map(x => listCard(x, section.id)).join("") : sub.recipes.map(x => recipeCard(x, section.id)).join("")}</div></div>`).join("");
  } else if (section.desserts) {
    content = `<div class="grid">${section.desserts.map(dessertCard).join("")}</div>`;
  }
  return `<section class="section" id="${section.id}" data-section>
    <div class="section__head"><div><p class="eyebrow">Раздел</p><h2>${esc(section.title)}</h2></div><span class="section__count"></span></div>
    ${content}
  </section>`;
}

document.querySelector("#menu").innerHTML = menu.map(renderSection).join("");

const search = document.querySelector("#search");
const empty = document.querySelector("#empty");
function filterMenu() {
  const query = search.value.trim().toLowerCase();
  let visibleSections = 0;
  document.querySelectorAll("[data-section]").forEach(section => {
    const cards = [...section.querySelectorAll("[data-search]")];
    if (!cards.length) {
      const visible = !query || section.textContent.toLowerCase().includes(query);
      section.hidden = !visible;
      visibleSections += visible ? 1 : 0;
      return;
    }
    let visibleCards = 0;
    cards.forEach(card => {
      const visible = !query || card.dataset.search.includes(query);
      card.hidden = !visible;
      visibleCards += visible ? 1 : 0;
    });
    section.hidden = visibleCards === 0;
    section.querySelector(".section__count").textContent = query ? `Найдено: ${visibleCards}` : "";
    visibleSections += visibleCards ? 1 : 0;
  });
  empty.hidden = visibleSections !== 0;
}
search.addEventListener("input", filterMenu);
