const APARTMENT_BASE = {
  id: '1',
  name: '4-комн. апартаменты на Грушевке ',
  images: [require('../../assets/images/apart1.png')],
  price: '65.00 BYN',
  priceForTime: 'за сутки',
  rooms: '4 комн.',
  roomsByPeople: '4 (2+2)',
  // beds: 8,
  area: '179 м²',
  address: 'Минск, б-р Мулявина, д. 10',
  metro: 'Грушевка',
  district: 'Шабаны',
  description:
    'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
  owner: {
    name: 'Dmitriy',
    phone: '+375 (29) 291-14-44',
    email: 'vladimir6234@tut.by',
    links: [
      { type: 'Viber', href: 'https://www.viber.com/ru/' },
      { type: 'WhatsApp', href: 'https://www.whatsapp.com/?lang=ru' },
      { type: 'Mail', href: 'https://www.google.com/intl/ru/gmail/about/' },
    ],
  },
  label: 'gold',
};

const APARTMENT_BASE_2 = {
  id: '2',
  name: '4-комн. апартаменты на Грушевке ',
  images: [
    require('../../assets/images/apart2.png'),
    require('../../assets/images/photo-1.png'),
    require('../../assets/images/apart2.png'),
  ],
  price: '65.00 BYN',
  priceForTime: 'за сутки',
  roomsByPeople: '4 (2+2)',
  beds: 8,
  area: '179 м²',
  address: 'Минск, б-р Мулявина, д. 10',
  location: 'Минская обл.',
  others: ['от Минска (км): 95', 'от Вилейка (км): 95 '],
  description:
    'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
  owner: {
    name: 'Dmitriy',
    phone: '+375 (29) 291-14-44',
    email: 'vladimir6234@tut.by',
    links: [
      { type: 'Viber', href: 'https://www.viber.com/ru/' },
      { type: 'WhatsApp', href: 'https://www.whatsapp.com/?lang=ru' },
      { type: 'Mail', href: 'https://www.google.com/intl/ru/gmail/about/' },
    ],
  },
  label: 'gold',
};

const COTTAGE_BASE = {
  id: '3',
  name: 'Коттедж на сутки «Северный склон»',
  images: [
    require('../../assets/images/photo-2.png'),
    require('../../assets/images/photo-1.png'),
    require('../../assets/images/photo-4.png'),
  ],
  price: 'от 78.00 BYN',
  priceForTime: 'за человека',
  roomsByPeople: '15',
  beds: 20,
  address: 'аг. Ратомка, Луговая улица, д. 27, к. а',
  location: 'Минск',
  description:
    'Арендовать дом на сутки в Гомеле с баней и бассейном в 5 минутах на машине от ЗИПа в усадьбе "Дом у реки". В доме 2-комнаты, зал для гостей на 10 человек, кухня, ванная, 2 с/у на первом и втором этаже, сауна, бассейн с холодной...',
  owner: {
    name: 'Dmitriy',
    phone: '+375 (29) 291-14-44',
    email: 'vladimir6234@tut.by',
    links: [
      { type: 'Viber', href: 'https://www.viber.com/ru/' },
      { type: 'WhatsApp', href: 'https://www.whatsapp.com/?lang=ru' },
      { type: 'Mail', href: 'https://www.google.com/intl/ru/gmail/about/' },
    ],
  },
  label: 'gold',
};

const BATH_BASE = {
  id: '4',
  name: 'Малая баня в усадьбе',
  images: [
    require('../../assets/images/photo-3.png'),
    require('../../assets/images/photo-3.png'),
  ],
  price: 'от 28.00 BYN',
  priceForTime: 'за сутки',
  roomsByPeople: '6',
  address: 'Деревня Сёмково, Садовая улица, д. 150',
  owner: {
    name: 'Dmitriy',
    phone: '+375 (29) 291-14-44',
    email: 'vladimir6234@tut.by',
    links: [
      { type: 'Viber', href: 'https://www.viber.com/ru/' },
      { type: 'WhatsApp', href: 'https://www.whatsapp.com/?lang=ru' },
      { type: 'Mail', href: 'https://www.google.com/intl/ru/gmail/about/' },
    ],
  },
  label: 'gold',
};

export const APARTMENTS_RENT_DATA = {
  id: 1,
  label: 'Квартиры на сутки',
  header: 'Аренда квартир в Минске',
  districts: [
    {
      value: 1,
      label: 'Район 1',
    },
    {
      value: 2,
      label: 'Район 2',
    },
    {
      value: 3,
      label: 'Район 3',
    },
    {
      value: 4,
      label: 'Район 4',
    },
    {
      value: 5,
      label: 'Район 5',
    },
  ],
  metro: [
    {
      value: 1,
      label: 'Метро 1',
    },
    {
      value: 2,
      label: 'Метро 2',
    },
    {
      value: 3,
      label: 'Метро 3',
    },
    {
      value: 4,
      label: 'Метро 4',
    },
    {
      value: 5,
      label: 'Метро 5',
    },
  ],
  items: [APARTMENT_BASE, APARTMENT_BASE_2, COTTAGE_BASE, BATH_BASE],
  numberOffers: 341,
  titleOffers: 'Предложений по Минску',
};
