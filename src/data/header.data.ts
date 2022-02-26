import { PositionSVG, ROUTING } from '../app.constants';

export const HEADER = {
  top: [
    {
      id: 1,
      name: 'Главная',
      href: ROUTING.home,
    },
    {
      id: 2,
      name: 'Новости',
      href: ROUTING.news,
    },
    {
      id: 3,
      name: 'Размещение и тарифы',
      href: ROUTING.rates,
    },
    {
      id: 4,
      name: 'Объявления на карте',
      href: ROUTING.ads,
      svg: PositionSVG.LEFT,
    },
    {
      id: 5,
      name: 'Контакты',
      href: ROUTING.contacts,
    },
  ],
  bottom: [
    {
      id: 1,
      name: 'Квартиры на сутки',
      href: ROUTING.apartmentsDay,
      svg: PositionSVG.RIGHT,
      items: [
        {
          id: 1,
          name: 'Квартиры на сутки в Минске',
          href: 'appart1',
        },
        {
          id: 3,
          name: 'Квартиры на сутки в Гомеле',
          href: 'appart3',
        },
        {
          id: 5,
          name: 'Квартиры на сутки в Бресте',
          href: 'appart5',
        },
        {
          id: 2,
          name: 'Квартиры на сутки в Витебске',
          href: 'appart2',
        },
        {
          id: 4,
          name: 'Квартиры на сутки в Гродно',
          href: 'appart4',
        },
        {
          id: 6,
          name: 'Квартиры на сутки в Могилеве',
          href: 'appart6',
        },
      ],
    },
    {
      id: 2,
      name: 'Коттеджи и усадьбы',
      href: ROUTING.cottages,
    },
    {
      id: 3,
      name: 'Бани и сауны',
      href: ROUTING.baths,
    },
    {
      id: 4,
      name: 'Авто напрокат',
      href: ROUTING.carRental,
    },
  ],
};
