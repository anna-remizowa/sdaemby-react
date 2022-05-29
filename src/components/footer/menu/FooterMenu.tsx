import React, { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { IMenu } from 'model/interfaces/IMenu';
import { MenuType } from 'model/enum/MenuType';

import styles from './FooterMenu.module.scss';

interface FooterMenuProps extends IMenu {
  header?: string;
  href?: string;
  menuType: MenuType[];
}

export const FooterMenu: FC<FooterMenuProps> = ({
  items,
  header,
  href,
  menuType,
}) => {
  return (
    <div>
      {header ? (
        <Link to={`/${href}`}>
          <p className={styles.header}>{header}</p>
        </Link>
      ) : (
        ''
      )}
      <ul
        className={clsx(
          styles.list,
          menuType.map<string>((type) => styles[type]).join(' ')
        )}
      >
        {items.map((item) => {
          return (
            <li className={clsx(styles.item)} key={item.id}>
              <Link to={`/${item.href}`} className={clsx(styles.link)}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
