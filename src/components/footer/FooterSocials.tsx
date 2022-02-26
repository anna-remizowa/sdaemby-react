import React, { FC } from 'react';

import { SVG } from '../shared/svg/svg';
import { SvgData } from '../shared/svg/svg.data';

import styles from './FooterSocials.module.scss';

export interface FooterSocialsSVG {
  svg: SvgData;
  width: number;
  height: number;
  color: string;
  href: string;
}

interface FooterSocialsProps {
  title: string;
  socials: FooterSocialsSVG[];
}

export const FooterSocials: FC<FooterSocialsProps> = ({ title, socials }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{title}</p>
      {socials.map((social, index) => {
        return (
          <a
            href={social.href}
            target="_blank"
            className={styles.icon}
            key={index}
          >
            <SVG
              viewBox={social.svg.viewBox}
              width={social.width}
              height={social.height}
            >
              <path d={social.svg.path} fill={social.color} />
            </SVG>
          </a>
        );
      })}
    </div>
  );
};
