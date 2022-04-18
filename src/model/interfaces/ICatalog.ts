import { IFilter } from './IFilter';
import { IBreadcrumb } from './IBreadcrumb';

export interface ICatalog {
  breadcrumbs?: IBreadcrumb[];
  header?: string;
  recommend?: {
    header: string;
    items?: string[];
  };
  filter?: IFilter;
}
