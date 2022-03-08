import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { COLORS, PositionSVG } from 'app.constants';
import { MenuItem } from 'model/Menu';
import { Dropdown } from 'components/shared/dropdown/Dropdown';

import styles from './HeaderLink.module.scss';
import { LocationSVG } from '../../shared/svg/components.svg';

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
        {link.positionSVG !== undefined &&
        link.positionSVG === PositionSVG.LEFT.toString() ? (
          <LocationSVG color={COLORS.BLACK} width={8} height={10} />
        ) : (
          ''
        )}
        <span>{link.name}</span>
        {link.positionSVG !== undefined &&
        link.positionSVG === PositionSVG.RIGHT.toString() ? (
          <LocationSVG color={COLORS.YELLOW} width={12} height={15} />
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
