import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { PositionSVG } from '../../app.constants';
import { SVG } from '../shared/svg/svg';
import { SVG_DATA_SET } from '../shared/svg/svg.data';
import { MenuItem } from '../../model/Menu';
import { Dropdown } from '../shared/dropdown/Dropdown';

import styles from './HeaderLink.module.scss';

interface HeaderLinkProps {
  link: MenuItem;
  headerTypeBold?: boolean;
}

export const HeaderLink: FC<HeaderLinkProps> = ({ link, headerTypeBold }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={styles.item}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <NavLink
        to={`/${link.href}`}
        className={({ isActive }) =>
          clsx(
            styles.link,
            headerTypeBold ? styles.primary : '',
            isActive ? styles.active : ''
          )
        }
      >
        {link.svg !== undefined && link.svg === PositionSVG.LEFT ? (
          <SVG viewBox={SVG_DATA_SET.Location.viewBox} width={8} height={10}>
            <path d={SVG_DATA_SET.Location.path} fill={'#1E2123'} />
          </SVG>
        ) : (
          ''
        )}
        <span>{link.name}</span>
        {link.svg !== undefined && link.svg === PositionSVG.RIGHT ? (
          <SVG viewBox={SVG_DATA_SET.Location.viewBox} width={12} height={15}>
            <path d={SVG_DATA_SET.Location.path} fill={'#FFD54F'} />
          </SVG>
        ) : (
          ''
        )}
      </NavLink>

      {link.items ? (
        <Dropdown
          links={link.items}
          top={25}
          isShow={isHovered}
          setHovered={setHovered}
        />
      ) : (
        ''
      )}
    </div>
  );
};
