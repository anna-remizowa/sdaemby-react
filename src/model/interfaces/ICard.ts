export interface ICard {
  header: string;
  svg?: string;
  content: string[];
  button: string;
  href: string;
  isArrow?: boolean;
  isHighlight?: boolean;
}
