import { ISocialLink } from './ISocialLink';

export interface IOwner {
  name: string;
  phone: string;
  email: string;
  links: ISocialLink[];
}
