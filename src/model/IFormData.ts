export interface IContactsFormData {
  name: string;
  email: string;
  text: string;
}

export interface IFilterFormData {
  location: string;
  room: string;
  price: string;
}

export interface IFormData extends IContactsFormData, IFilterFormData {}
