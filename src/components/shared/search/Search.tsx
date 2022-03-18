import React, { FC } from 'react';

import { SearchSVG } from 'components/shared/svg/components.svg';

import styles from './Search.module.scss';

interface SearchProps {
  placeholder: string;
}

export const Search: FC<SearchProps> = ({ placeholder }) => {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.input} placeholder={placeholder} />
      <button className={styles.button} type="button">
        <SearchSVG color={'white'} width={17} height={17} />
      </button>
    </div>
  );
};
