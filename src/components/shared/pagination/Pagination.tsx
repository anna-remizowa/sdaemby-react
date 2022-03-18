import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Pagination.module.scss';

interface PaginationProps {
  countPages: number;
  activePage: number;
  maxNumber: number;
  onPageChange: (page: number) => void;
}

/*todo: доделать пагинацию, чтоб работала логика с точками*/
export const Pagination: FC<PaginationProps> = ({
  countPages,
  activePage,
  maxNumber,
  onPageChange,
}) => {
  return (
    <div className={styles.pagination}>
      {Array.from(Array(countPages).keys()).map((number) => {
        return (
          <div key={number}>
            {number + 1 <= maxNumber || number + 1 === countPages ? (
              <button
                type="button"
                className={clsx(styles.link, {
                  [styles.active]: number + 1 === activePage,
                })}
                onClick={() => onPageChange(number + 1)}
              >
                {number + 1}
              </button>
            ) : number === maxNumber && number + 1 !== countPages ? (
              <a className={styles.link} href="#">
                ...
              </a>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
};
