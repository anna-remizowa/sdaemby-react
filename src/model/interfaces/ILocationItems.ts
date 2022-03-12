import { ILocation } from './ILocation';
import { IOption } from './IOption';

export interface ILocationItems {
  id?: number;
  label?: string;
  header?: string;
  metro?: IOption[];
  districts?: IOption[];
  items?: ILocation[];
  numberOffers?: number;
  titleOffers?: string;
}
