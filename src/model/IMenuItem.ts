import { SVGItem } from '../components/shared/svg/svg';
import { PositionSVG } from '../app.constants';

export interface IMenuItem {
  id: number;
  name: string;
  href: string;
  active?: boolean;
  svg?: SVGItem;
  positionSVG?: PositionSVG;
}

export interface IMenu {
  items: IMenuItem[];
}
