import React, { FC } from 'react';

import { SVG, SVGProps } from '../shared/svg/svg';

import styles from './FooterSocials.module.scss';

interface FooterSocialsProps {
  title: string;
  socials: SVGProps[];
}

export const FooterSocials: FC<FooterSocialsProps> = ({ title, socials }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{title}</p>
      {socials.map((social, index) => {
        return (
          <a href="#" className={styles.icon} key={index}>
            <SVG svg={social.svg} width={social.width} height={social.height}>
              <path d={social.svg.path} fill={social.color} />
            </SVG>
          </a>
        );
      })}
    </div>
  );
};
