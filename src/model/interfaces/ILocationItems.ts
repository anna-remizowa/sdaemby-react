import { ILocation } from './ILocation';
import { IOption } from './IOption';

export interface ILocationItems {
  label?: string;
  header?: string;
  metro?: IOption[];
  districts?: IOption[];
  items?: ILocation[];
  numberOffers?: number;
  titleOffers?: string;
}
