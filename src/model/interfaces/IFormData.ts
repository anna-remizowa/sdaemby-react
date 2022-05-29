export interface IContactsFormData {
  name: string;
  email: string;
  text: string;
}

export interface IFilterFormData {
  location: string;
  metro: string;
  district: string;
  room: string;
  priceFrom: string;
  priceTo: string;
}

export interface IAuthFormData {
  login: string;
  email: string;
  password: string;
  repeatPassword: string;
  switch: boolean;
}

export interface IFormData
  extends IContactsFormData,
    IFilterFormData,
    IAuthFormData {}
