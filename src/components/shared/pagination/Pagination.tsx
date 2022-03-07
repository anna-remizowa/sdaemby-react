import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Pagination.module.scss';
import { Link } from 'react-router-dom';
import { ROUTING } from '../../../app.constants';

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
              <Link
                className={clsx(styles.link, {
                  [styles.active]: number + 1 === activePage,
                })}
                to={`/${ROUTING.news}?page=${number + 1}`}
              >
                {number + 1}
              </Link>
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
