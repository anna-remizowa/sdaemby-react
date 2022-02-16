import { SvgDataSet } from '../components/shared/svg/svg.data';
import { PositionSVG } from '../app.constants';

export const headerMenuTop = [
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
    svg: {
      svg: SvgDataSet.Location,
      width: 8,
      height: 10,
      color: '#1E2123',
    },
    positionSVG: PositionSVG.LEFT,
  },
  {
    id: 5,
    name: 'Контакты',
    href: '#',
  },
];

export const headerMenuBottom = [
  {
    id: 1,
    name: 'Квартиры на сутки',
    href: '#',
    svg: {
      svg: SvgDataSet.Location,
      width: 12,
      height: 15,
      color: '#FFD54F',
    },
    positionSVG: PositionSVG.RIGHT,
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
];
