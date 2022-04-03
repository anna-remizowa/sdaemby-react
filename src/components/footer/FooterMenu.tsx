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
  return (
    <div>
      {header ? <p className={styles.header}>{header}</p> : ''}
      <ul
        className={clsx(
          styles.list,
          menuType.includes(MenuType.BASE) && styles.base,
          menuType.includes(MenuType.BOLD) && styles.baseBold,
          menuType.includes(MenuType.COLUMN) && styles.column
        )}
      >
        {items.map((item) => {
          return (
            <li
              className={clsx(
                styles.item,
                menuType.includes(MenuType.BASE) && styles.base,
                menuType.includes(MenuType.BOLD) && styles.baseBold,
                menuType.includes(MenuType.COLUMN) && styles.column
              )}
              key={item.id}
            >
              <a
                href={item.href}
                className={clsx(
                  styles.link,
                  menuType.includes(MenuType.BASE) && styles.base,
                  menuType.includes(MenuType.BOLD) && styles.baseBold,
                  menuType.includes(MenuType.COLUMN) && styles.column
                )}
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
