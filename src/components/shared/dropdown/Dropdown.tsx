import React, { FC } from 'react';

import styles from './Dropdown.module.scss';
import { MenuItem } from 'model/interfaces/Menu';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface DropdownProps {
  top?: number;
  links: MenuItem[];
  isShow: boolean;
  setHovered(hover: boolean): void;
}

export const Dropdown: FC<DropdownProps> = ({
  top,
  links,
  isShow,
  setHovered,
}) => {
  return (
    <div
      className={clsx(styles.dropdown, isShow && styles.show)}
      style={{ paddingTop: top ? `${top}px` : 0 }}
    >
      <ul className={styles.dropdownWrapper}>
        {links.map((link) => {
          return (
            <li className={styles.item} key={link.id}>
              <Link
                className={styles.link}
                to={`/${link.href}`}
                onClick={() => setHovered(false)}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
