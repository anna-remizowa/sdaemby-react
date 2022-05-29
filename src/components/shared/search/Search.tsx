import React, { FC, useRef } from 'react';

import { SearchSVG } from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';

import styles from './Search.module.scss';

interface SearchProps {
  placeholder?: string;
  defaultValue?: string;
  onClick?: (value: string) => void;
}

export const Search: FC<SearchProps> = ({
  placeholder = '',
  defaultValue = '',
  onClick,
}) => {
  const refInput = useRef<HTMLInputElement>(null);
  const buttonClick = () => {
    if (onClick) {
      onClick(refInput.current?.value ? refInput.current?.value : '');
    }
  };

  return (
    <div className={styles.search}>
      <input
        ref={refInput}
        type="text"
        className={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      <button className={styles.button} type="button" onClick={buttonClick}>
        <SearchSVG color={COLORS.WHITE} width={17} height={17} />
      </button>
    </div>
  );
};
