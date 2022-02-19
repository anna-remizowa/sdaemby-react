import React, { FC } from 'react';

import styles from './Pagination.module.scss';

interface PaginationProps {
  countPages: number;
  activePage: number;
  maxNumber: number;
}

export const Pagination: FC<PaginationProps> = (props) => {
  return (
    <div className={styles.pagination}>
      {Array.from(Array(props.countPages).keys()).map((number) => {
        return (
          <div key={number}>
            {number + 1 <= props.maxNumber ||
            number + 1 === props.countPages ? (
              <a
                className={[
                  styles.link,
                  number + 1 === props.activePage ? styles.active : '',
                ].join(' ')}
                href="#"
              >
                {number + 1}
              </a>
            ) : number === props.maxNumber &&
              number + 1 !== props.countPages ? (
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
