import { News } from './News';
import { Breadcrumb } from '../components/shared/breadcrumbs/Breadcrumbs';

export interface INewsDetail {
  news?: News;
  otherNews?: News[];
  breadcrumbs?: Breadcrumb[];
}
