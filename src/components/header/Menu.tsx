import React, { FC } from 'react';

import styles from './Menu.module.scss';

import { TitleArray } from '../model/Title';

export const Menu: FC<TitleArray> = (props: TitleArray) => {
  return (
    <ul className={styles.list}>
      {props.titles.map((title) => {
        return (
          <li key={title.id} className={styles.item}>
            {title.name}
          </li>
        );
      })}
    </ul>
  );
};
