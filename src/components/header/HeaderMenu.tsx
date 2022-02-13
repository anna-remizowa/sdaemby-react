import React, { FC } from 'react';

import styles from './HeaderMenu.module.scss';

import { IMenu } from '../model/IMenuItem';

export interface IMenuHeader extends IMenu {
  headerTypeBold?: boolean;
}

export const HeaderMenu: FC<IMenuHeader> = (props: IMenuHeader) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => {
        return (
          <li
            key={item.id}
            className={[
              styles.item,
              props.headerTypeBold ? styles.bold : '',
              item.active ? styles.active : '',
            ].join(' ')}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};
