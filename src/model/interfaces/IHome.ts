import { IFilter } from './IFilter';
import { ILinkProps } from './ILinkProps';
import { ILocationItems } from './ILocationItems';

export interface IHome {
  filters?: IFilter;
  sliders?: ILinkProps;
  list?: ILinkProps;
  rent?: ILocationItems;
}
