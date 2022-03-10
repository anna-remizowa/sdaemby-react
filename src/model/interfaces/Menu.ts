import { ILink } from './ILink';

export interface MenuItem extends ILink {
  header?: string;
  positionSVG?: string;
  items?: MenuItem[];
}

export interface Menu {
  items: MenuItem[];
}
