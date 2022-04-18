import { IBreadcrumb } from './IBreadcrumb';

export interface INews {
  id: number;
  image: string;
  alt: string;
  header: string;
  content: string;
  date: string;
}

export interface INewsPage {
  header?: string;
  pageCount?: number;
  breadcrumbs?: IBreadcrumb[];
}

export interface INewsContent {
  news?: INews[];
  pageCount?: number;
}
