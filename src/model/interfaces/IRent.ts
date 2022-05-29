import { ILink } from './ILink';
import { IOwner } from './IOwner';

export interface IRent extends ILink {
  images: string[];
  price: string;
  priceForTime: string;
  rooms?: string;
  roomsByPeople?: string;
  beds?: number;
  area?: string;
  address: string;
  metro?: string;
  district?: string;
  location?: string;
  others?: string[];
  description: string;
  owner: IOwner;
  label?: string;
  isFavorite: boolean;
}
