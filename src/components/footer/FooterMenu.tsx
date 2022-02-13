import React, { FC } from 'react';
import { IMenu } from '../model/IMenuItem';
import styles from './FooterMenu.module.scss';

export enum MenuType {
  BOLD,
  BASE,
  COLUMN,
}

interface IMenuFooter extends IMenu {
  header?: string;
  menuType: MenuType[];
}

export const FooterMenu: FC<IMenuFooter> = (props: IMenuFooter) => {
  const menuClasses: string[] = [];
  props.menuType.forEach((type) => {
    switch (type) {
      case MenuType.BASE:
        menuClasses.push(styles.base);
        break;
      case MenuType.BOLD:
        menuClasses.push(styles.baseBold);
        break;
      case MenuType.COLUMN:
        menuClasses.push(styles.column);
        break;
    }
  });

  return (
    <div>
      {props.header ? <p className={styles.header}>{props.header}</p> : ''}
      <ul className={[styles.list, ...menuClasses].join(' ')}>
        {props.items.map((item) => {
          return (
            <li
              key={item.id}
              className={[styles.item, ...menuClasses].join(' ')}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
