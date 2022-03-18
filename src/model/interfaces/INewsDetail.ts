import { INews } from './INews';
import { Breadcrumb } from 'components/shared/breadcrumbs/Breadcrumbs';

export interface INewsDetail {
  news?: INews;
  otherNews?: INews[];
  breadcrumbs?: Breadcrumb[];
}
