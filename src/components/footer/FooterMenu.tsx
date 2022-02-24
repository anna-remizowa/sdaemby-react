import React, { FC } from 'react';
import clsx from 'clsx';

import { IMenu } from 'model/IMenuItem';
import { MenuType } from 'app.constants';

import styles from './FooterMenu.module.scss';

interface FooterMenuProps extends IMenu {
  header?: string;
  menuType: MenuType[];
}

export const FooterMenu: FC<FooterMenuProps> = ({
  items,
  header,
  menuType,
}) => {
  const menuClasses: string[] = [];
  menuType.forEach((type) => {
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
      {header ? <p className={styles.header}>{header}</p> : ''}
      <ul className={clsx(styles.list, ...menuClasses)}>
        {items.map((item) => {
          return (
            <li className={clsx(styles.item, ...menuClasses)} key={item.id}>
              <a
                href={item.href}
                className={clsx(styles.itemLink, ...menuClasses)}
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
