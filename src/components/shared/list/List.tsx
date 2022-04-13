import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ILinkProps } from 'model/interfaces/ILinkProps';

import styles from './List.module.scss';

export const List: FC<ILinkProps> = ({ items }) => {
  return (
    <div className={styles.list}>
      {items &&
        items.map((item, index) => (
          <div key={index}>
            <p className={styles.titleWrapper}>
              <Link to={`/${item.href}`} className={styles.title}>
                {item.title}
              </Link>
            </p>
            {item.items ? (
              <ul>
                {item.items.map((link) => (
                  <li className={styles.item} key={link.id}>
                    <Link to={`/${link.href}`} className={styles.link}>
                      {link.name}
                    </Link>
                    {link.count ? (
                      <p className={styles.count}>{link.count}</p>
                    ) : (
                      ''
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </div>
        ))}
    </div>
  );
};
