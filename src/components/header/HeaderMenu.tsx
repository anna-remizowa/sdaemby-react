import React, { FC } from 'react';

import styles from './HeaderMenu.module.scss';
import { IMenu } from '../../model/IMenuItem';
import { SVG } from '../shared/svg/svg';
import { PositionSVG } from '../../app.constants';

export interface HeaderMenuProps extends IMenu {
  headerTypeBold?: boolean;
}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => {
        return (
          <li
            key={item.id}
            className={[
              styles.item,
              props.headerTypeBold ? styles.bold : '',
              item.active ? styles.active : '',
            ].join(' ')}
          >
            {item.svg &&
            item.positionSVG !== undefined &&
            item.positionSVG === PositionSVG.LEFT ? (
              <SVG data={item.svg} />
            ) : (
              ''
            )}
            <a
              href={item.href}
              className={[
                styles.itemLink,
                props.headerTypeBold ? styles.bold : '',
                item.active ? styles.active : '',
              ].join(' ')}
            >
              {item.name}
            </a>
            {item.svg &&
            item.positionSVG !== undefined &&
            item.positionSVG === PositionSVG.RIGHT ? (
              <SVG data={item.svg} />
            ) : (
              ''
            )}
          </li>
        );
      })}
    </ul>
  );
};
