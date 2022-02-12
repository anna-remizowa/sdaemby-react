import React, { FC } from 'react';
import { TitleArray } from '../model/Title';
import styles from './FooterMenu.module.scss';

export enum MenuType {
  BOLD,
  BASE,
  COLUMN,
}

interface FooterTitleArray extends TitleArray {
  header?: string;
  menuType: MenuType[];
}

export const FooterMenu: FC<FooterTitleArray> = (props: FooterTitleArray) => {
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
        {props.titles.map((title) => {
          return (
            <li
              key={title.id}
              className={[styles.item, ...menuClasses].join(' ')}
            >
              {title.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
