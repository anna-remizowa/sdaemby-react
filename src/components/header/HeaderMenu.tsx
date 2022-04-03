import React, { FC } from 'react';
import clsx from 'clsx';

import { IMenu } from 'model/IMenuItem';
import { SVG } from 'components/shared/svg/svg';

import { PositionSVG } from 'app.constants';

import styles from './HeaderMenu.module.scss';
import { SVG_DATA_SET } from '../shared/svg/svg.data';

export interface HeaderMenuProps extends IMenu {
  headerTypeBold?: boolean;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ items, headerTypeBold }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className={clsx(
              styles.item,
              headerTypeBold ? styles.primary : '',
              item.active ? styles.active : ''
            )}
          >
            <a
              href={item.href}
              className={clsx(
                styles.link,
                headerTypeBold ? styles.primary : '',
                item.active ? styles.active : ''
              )}
            >
              {item.svg !== undefined && item.svg === PositionSVG.LEFT ? (
                <SVG svg={SVG_DATA_SET.Location} width={8} height={10}>
                  <path d={SVG_DATA_SET.Location.path} fill={'#1E2123'} />
                </SVG>
              ) : (
                ''
              )}
              <span>{item.name}</span>
              {item.svg !== undefined && item.svg === PositionSVG.RIGHT ? (
                <SVG svg={SVG_DATA_SET.Location} width={12} height={15}>
                  <path d={SVG_DATA_SET.Location.path} fill={'#FFD54F'} />
                </SVG>
              ) : (
                ''
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};