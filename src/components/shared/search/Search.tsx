import React, { FC } from 'react';

import styles from './Search.module.scss';
import { SearchSVG } from '../svg/components.svg';
import { SVG } from '../svg/svg';

interface SearchProps {
  defaultValue: string;
}

export const Search: FC<SearchProps> = ({ defaultValue }) => {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.input} value={defaultValue} />
      <button className={styles.button} type="button">
        <SVG viewBox={'0 0 17 17'} width={17} height={17}>
          <SearchSVG color={'white'} />
        </SVG>
      </button>
    </div>
  );
};
