import { ROUTING } from '../app.constants';

export const FOOTER = {
  company: [
    'ИП Шушкевич Андрей Викторович',
    'УНП 192602485 Минским горисполкомом',
    '10.02.2016',
    '220068, РБ, г. Минск, ул. Осипенко, 21, кв.23',
    '+375 29 621 48 33, sdaem@sdaem.by',
    'Режим работы: 08:00-22:00',
  ],
  titlesOne: [
    {
      id: 1,
      name: 'Коттеджи и усадьбы',
      href: ROUTING.cottages,
    },
    {
      id: 2,
      name: 'Бани и сауны',
      href: ROUTING.baths,
    },
    {
      id: 3,
      name: 'Авто на прокат',
      href: ROUTING.carRental,
    },
  ],
  titlesTwo: [
    {
      id: 1,
      name: 'Новости',
      href: ROUTING.news,
    },
    {
      id: 2,
      name: 'Размещение и тарифы',
      href: ROUTING.rates,
    },
    {
      id: 3,
      name: 'Объявления на карте',
      href: ROUTING.ads,
    },
    {
      id: 4,
      name: 'Контакты',
      href: ROUTING.contacts,
    },
  ],

  apartments: {
    header: 'Квартиры',
    href: ROUTING.apartmentsDay,
    items: [
      {
        id: 1,
        name: 'Квартиры в Минске',
        href: 'appart1',
      },
      {
        id: 2,
        name: 'Квартиры в Витебске',
        href: 'appart2',
      },
      {
        id: 3,
        name: 'Квартиры в Гомеле',
        href: 'appart3',
      },
      {
        id: 4,
        name: 'Квартиры в Гродно',
        href: 'appart4',
      },
      {
        id: 5,
        name: 'Квартиры в Бресте',
        href: 'appart5',
      },
      {
        id: 6,
        name: 'Квартиры в Могилеве',
        href: 'appart6',
      },
    ],
  },
};
