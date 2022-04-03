import { IFilter } from './IFilter';

export interface ITab {
  header: string;
  content?: IFilter;
}
