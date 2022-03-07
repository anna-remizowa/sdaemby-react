export interface MenuItem {
  id: number;
  header?: string;
  name: string;
  href: string;
  positionSVG?: string;
  items?: MenuItem[];
}

export interface Menu {
  items: MenuItem[];
}
