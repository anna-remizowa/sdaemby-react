import React, { FC } from 'react';

import styles from './HeaderTitle.module.scss';

import { TitleArray } from '../model/Title';

export const HeaderTitle: FC<TitleArray> = (props: TitleArray) => {
  return (
    <ul className={styles.list}>
      {props.titles.map((title) => {
        return (
          <li
            key={title.id}
            className={[styles.item, title.active ? styles.active : ''].join(
              ' '
            )}
          >
            {title.name}
          </li>
        );
      })}
    </ul>
  );
};
