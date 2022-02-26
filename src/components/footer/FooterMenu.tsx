import React, { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Menu } from 'model/Menu';
import { MenuType } from 'app.constants';

import styles from './FooterMenu.module.scss';

interface FooterMenuProps extends Menu {
  header?: string;
  href?: string;
  menuType: MenuType[];
}

export const FooterMenu: FC<FooterMenuProps> = ({
  items,
  header,
  href,
  menuType,
}) => {
  return (
    <div>
      {header ? (
        <Link to={`/${href}`}>
          <p className={styles.header}>{header}</p>
        </Link>
      ) : (
        ''
      )}
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
              <Link
                to={`/${item.href}`}
                className={clsx(
                  styles.link,
                  menuType.includes(MenuType.BASE) && styles.base,
                  menuType.includes(MenuType.BOLD) && styles.baseBold,
                  menuType.includes(MenuType.COLUMN) && styles.column
                )}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
