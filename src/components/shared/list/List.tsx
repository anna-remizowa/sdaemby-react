import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ILinkProps } from 'model/interfaces/ILinkProps';

import styles from './List.module.scss';

export const List: FC<ILinkProps> = ({ items }) => {
  return (
    <div className={styles.list}>
      {items
        ? items.map((item, index) => (
            <div>
              <Link to={`/${item.href}`} key={index}>
                {item.title}
              </Link>
              {item.items ? (
                <ul>
                  {item.items.map((link) => (
                    <li>
                      <Link to={`/${link.href}`} key={link.id}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </div>
          ))
        : ''}
    </div>
  );
};
