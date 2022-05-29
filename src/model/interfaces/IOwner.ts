import { ISocialLink } from './ISocialLink';

export interface IOwner {
  photo: string;
  type: string;
  name: string;
  phone: string;
  email: string;
  links: ISocialLink[];
}
