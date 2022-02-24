import { PositionSVG } from 'app.constants';

export interface IMenuItem {
  id: number;
  name: string;
  href: string;
  active?: boolean;
  svg?: PositionSVG;
}

export interface IMenu {
  items: IMenuItem[];
}
