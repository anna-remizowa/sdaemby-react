import { ILink } from './ILink';

export interface IMenuItem extends ILink {
  header?: string;
  positionSVG?: string;
  items?: IMenuItem[];
}

export interface IMenu {
  items: IMenuItem[];
}
