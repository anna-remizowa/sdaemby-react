export const APARTMENTS_RENT_DATA = {
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
  items: [
    {
      id: '1',
      name: '4-комн. апартаменты на Грушевке ',
      img: require('../../assets/images/apart1.png'),
      price: '65.00 BYN',
      priceForTime: 'за сутки',
      rooms: 4,
      roomsByPeople: [2, 2],
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
    },
  ],
  numberOffers: 341,
  titleOffers: 'Предложений по Минску',
};
