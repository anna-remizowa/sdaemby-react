export interface MenuItem {
  id: number;
  name: string;
  href: string;
  positionSVG?: string;
  items?: MenuItem[];
}

export interface Menu {
  items: MenuItem[];
}
