export interface IMenuItem {
  id: number;
  name: string;
  active?: boolean;
}

export interface IMenu {
  items: IMenuItem[];
}
