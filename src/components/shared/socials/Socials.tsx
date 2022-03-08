import React, { FC } from 'react';
import clsx from 'clsx';

import { SocialItem } from './SocialItem';
import { SocialType } from 'app.constants';

import styles from './Socials.module.scss';

export interface SocialsSVG {
  tag: string;
  width: number;
  height: number;
  color?: string;
  href: string;
}

interface SocialsProps {
  socials: SocialsSVG[];
  header?: string;
  types: SocialType[];
  iconColor?: string;
}

export const Socials: FC<SocialsProps> = ({
  socials,
  header,
  types,
  iconColor,
}) => {
  const color = iconColor ? iconColor : 'white';
  return (
    <div
      className={clsx(
        styles.wrapper,
        types.includes(SocialType.BASE) && styles.base,
        types.includes(SocialType.PURPLE) && styles.purple,
        types.includes(SocialType.VERTICAL) && styles.vertical
      )}
    >
      {header ? <p className={styles.text}>{header}</p> : ''}
      {socials.map((social, index) => {
        return (
          <a
            href={social.href}
            target="_blank"
            className={styles.icon}
            key={index}
          >
            <SocialItem
              tag={social.tag}
              color={color}
              width={social.width}
              height={social.height}
            />
          </a>
        );
      })}
    </div>
  );
};
