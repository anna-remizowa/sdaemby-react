import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { IMenuItem } from 'model/interfaces/IMenu';
import { Dropdown } from 'components/shared/dropdown/Dropdown';
import { LocationSVG } from 'components/shared/svg/components.svg';
import { PositionSVG } from 'model/enum/PositionSVG';
import { COLORS } from 'model/enum/Colors';

import styles from './HeaderLink.module.scss';

interface HeaderLinkProps {
  link: IMenuItem;
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
            { [styles.primary]: headerTypeBold },
            { [styles.active]: isActive }
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
