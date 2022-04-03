import React, { FC } from 'react';

import styles from './Search.module.scss';

interface SearchProps {
  defaultValue: string;
}

export const Search: FC<SearchProps> = ({ defaultValue }) => {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.input} value={defaultValue} />
      <button className={styles.button} type="button">
        <div className={styles.iconZoom} />
      </button>
    </div>
  );
};
