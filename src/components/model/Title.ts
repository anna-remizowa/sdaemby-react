export interface Title {
  id: number;
  name: string;
  active?: boolean;
}

export interface TitleArray {
  titles: Title[];
}
