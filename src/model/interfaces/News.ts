import { Breadcrumb } from 'components/shared/breadcrumbs/Breadcrumbs';

export interface News {
  id: number;
  image: string;
  alt: string;
  header: string;
  content: string;
  date: string;
}

export interface NewsPage {
  header?: string;
  news?: News[];
  activePage?: number;
  maxPage?: number;
  breadcrumbs?: Breadcrumb[];
}
