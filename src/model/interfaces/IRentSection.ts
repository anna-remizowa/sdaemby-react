import { IOption } from './IOption';
import { ISection } from './ISection';

export interface IRentSection extends ISection {
  metro?: IOption[];
  districts?: IOption[];
  numberOffers?: number;
  titleOffers?: string;
}
