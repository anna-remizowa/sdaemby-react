import React, { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Pagination.module.scss';

interface PaginationProps {
  countPages: number;
  activePage: number;
  maxNumber: number;
  routing: string;
  search?: string;
}

/*todo: доделать пагинацию, чтоб работала логика с точками*/
export const Pagination: FC<PaginationProps> = ({
  countPages,
  activePage,
  maxNumber,
  routing,
  search,
}) => {
  return (
    <div className={styles.pagination}>
      {Array.from(Array(countPages).keys()).map((number) => {
        return (
          <div key={number}>
            {number + 1 <= maxNumber || number + 1 === countPages ? (
              <Link
                to={{
                  pathname: `/${routing}`,
                  search: `page=${number + 1}${search ? `&${search}` : ''}`,
                }}
                className={clsx(styles.link, {
                  [styles.active]: number + 1 === activePage,
                })}
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
