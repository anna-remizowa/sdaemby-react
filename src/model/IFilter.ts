export interface IOption {
  value?: string;
  label?: string;
}

export interface IFilter {
  locations?: IOption[];
  rooms?: IOption[];
  districts?: IOption[];
  metro?: IOption[];
}
