import { IFilter } from './IFilter';
import { ILinkProps } from './ILinkProps';
import { IRentSection } from './IRentSection';
import { ISection } from './ISection';

export interface IHome {
  filters?: IFilter;
  sliders?: ILinkProps;
  list?: ILinkProps;
  rent?: IRentSection;
  locationInfo?: ISection;
}
