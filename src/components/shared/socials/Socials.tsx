import React, { FC } from 'react';
import clsx from 'clsx';

import { SocialItem } from './SocialItem';
import { COLORS } from 'model/enum/Colors';
import { SocialStyleType } from 'model/enum/SocialStyleType';

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
  types: SocialStyleType[];
  iconColor?: string;
}

export const Socials: FC<SocialsProps> = ({
  socials,
  header,
  types,
  iconColor = COLORS.WHITE,
}) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        types.map<string>((type) => styles[type]).join(' ')
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
            <SocialItem {...social} color={iconColor} />
          </a>
        );
      })}
    </div>
  );
};
