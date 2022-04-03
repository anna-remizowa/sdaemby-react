import { PositionSVG } from '../app.constants';

export const HEADER = {
  top: [
    {
      id: 1,
      name: 'Главная',
      href: '#',
    },
    {
      id: 2,
      name: 'Новости',
      href: '#',
    },
    {
      id: 3,
      name: 'Размещение и тарифы',
      href: '#',
    },
    {
      id: 4,
      name: 'Объявления на карте',
      href: '#',
      active: true,
      svg: PositionSVG.LEFT,
    },
    {
      id: 5,
      name: 'Контакты',
      href: '#',
    },
  ],
  bottom: [
    {
      id: 1,
      name: 'Квартиры на сутки',
      href: '#',
      svg: PositionSVG.RIGHT,
    },
    {
      id: 2,
      name: 'Коттеджи и усадьбы',
      href: '#',
    },
    {
      id: 3,
      name: 'Бани и сауны',
      href: '#',
    },
    {
      id: 4,
      name: 'Авто напрокат',
      href: '#',
    },
  ],
};
