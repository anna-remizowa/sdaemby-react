import React, { FC } from 'react';
import styles from './FooterMenu.module.scss';
import { IMenu } from '../../model/IMenuItem';
import { MenuType } from '../../app.constants';

interface FooterMenuProps extends IMenu {
  header?: string;
  menuType: MenuType[];
}

export const FooterMenu: FC<FooterMenuProps> = (props) => {
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
              className={[styles.item, ...menuClasses].join(' ')}
              key={item.id}
            >
              <a
                href={item.href}
                className={[styles.itemLink, ...menuClasses].join(' ')}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
