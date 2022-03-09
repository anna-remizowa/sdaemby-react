export interface IContactsFormData {
  name: string;
  email: string;
  text: string;
}

export interface IFilterFormData {
  location: string;
  room: string;
  priceFrom: string;
  priceTo: string;
}

export interface IFormData extends IContactsFormData, IFilterFormData {}