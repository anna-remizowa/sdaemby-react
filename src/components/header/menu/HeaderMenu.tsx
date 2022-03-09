import React, { FC } from 'react';
import clsx from 'clsx';

import { Menu } from 'model/interfaces/Menu';
import { HeaderLink } from 'components/header/link/HeaderLink';

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
            className={clsx(styles.item, { [styles.primary]: headerTypeBold })}
          >
            <HeaderLink link={item} headerTypeBold={headerTypeBold} />
          </li>
        );
      })}
    </ul>
  );
};
