import React, { FC } from 'react';
import clsx from 'clsx';

import { Menu } from 'model/Menu';
import { HeaderLink } from './HeaderLink';

import styles from './HeaderMenu.module.scss';

export interface HeaderMenuProps extends Menu {
  headerTypeBold?: boolean;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ items, headerTypeBold }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className={clsx(styles.item, headerTypeBold ? styles.primary : '')}
          >
            <HeaderLink link={item} headerTypeBold={headerTypeBold} />
          </li>
        );
      })}
    </ul>
  );
};
