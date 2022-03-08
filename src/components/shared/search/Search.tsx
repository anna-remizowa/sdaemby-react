import React, { FC } from 'react';

import { SearchSVG } from '../svg/components.svg';

import styles from './Search.module.scss';

interface SearchProps {
  defaultValue: string;
}

export const Search: FC<SearchProps> = ({ defaultValue }) => {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.input} value={defaultValue} />
      <button className={styles.button} type="button">
        <SearchSVG color={'white'} width={17} height={17} />
      </button>
    </div>
  );
};
