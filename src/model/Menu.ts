import { PositionSVG } from 'app.constants';

export interface MenuItem {
  id: number;
  name: string;
  href: string;
  svg?: PositionSVG;
}

export interface Menu {
  items: MenuItem[];
}
