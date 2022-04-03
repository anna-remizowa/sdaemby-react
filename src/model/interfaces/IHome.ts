import { ILinkProps } from './ILinkProps';
import { IRentSection } from './IRentSection';
import { ISection } from './ISection';
import { INews } from './INews';
import { IStartSection } from './IStartSection';

export interface IHome {
  start?: IStartSection;
  sliders?: ILinkProps;
  list?: ILinkProps;
  rent?: IRentSection;
  locationInfo?: ISection;
  news?: INews[];
}
