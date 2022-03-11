import { ILink } from './ILink';
import { IOwner } from './IOwner';

export interface ILocation extends ILink {
  img: string;
  price: string;
  priceForTime: string;
  rooms: number;
  roomsByPeople: number[];
  area: string;
  address: string;
  metro: string;
  district: string;
  description: string;
  owner: IOwner;
  label?: string;
  isName: boolean;
  isFavorite: boolean;
}
