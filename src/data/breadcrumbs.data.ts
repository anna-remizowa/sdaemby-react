import { HOME, ROUTING } from '../app.constants';
import { Breadcrumb } from '../components/shared/breadcrumbs/Breadcrumbs';

export const BREADCRUMBS_NEWS_PAGE: Breadcrumb[] = [
  {
    name: HOME,
    href: ROUTING.home,
  },
  {
    name: 'Новости',
  },
];

export const BREADCRUMBS_NEWS_DETAIL: Breadcrumb[] = [
  {
    name: HOME,
    href: ROUTING.home,
  },
  {
    name: 'Новости',
    href: ROUTING.news,
  },
];
