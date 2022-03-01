import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Pagination.module.scss';

interface PaginationProps {
  countPages: number;
  activePage: number;
  maxNumber: number;
}

export const Pagination: FC<PaginationProps> = ({
  countPages,
  activePage,
  maxNumber,
}) => {
  return (
    <div className={styles.pagination}>
      {Array.from(Array(countPages).keys()).map((number) => {
        return (
          <div key={number}>
            {number + 1 <= maxNumber || number + 1 === countPages ? (
              <a
                className={clsx(styles.link, {
                  [styles.active]: number + 1 === activePage,
                })}
                href="#"
              >
                {number + 1}
              </a>
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
