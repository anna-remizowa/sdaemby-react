import { INews } from './INews';
import { IBreadcrumb } from './IBreadcrumb';

export interface INewsDetail {
  news?: INews;
  otherNews?: INews[];
  breadcrumbs?: IBreadcrumb[];
}
