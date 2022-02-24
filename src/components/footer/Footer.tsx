import React, { FC } from 'react';
import clsx from 'clsx';

import { FooterMenu } from './FooterMenu';
import { ImageHTML, ImageItem, Images } from 'assets/images';
import { MenuType } from 'app.constants';
import { SVG, SVGProps } from 'components//shared/svg/svg';

import { SVG_DATA_SET } from 'components/shared/svg/svg.data';
import { FOOTER } from 'data/footer.data';

import styles from './Footer.module.scss';

const cards: ImageItem[] = [
  Images.Visa,
  Images.Webpay,
  Images.Verified,
  Images.Mastercard,
  Images.Securecode,
  Images.Belkart,
];

const socials: SVGProps[] = [
  {
    svg: SVG_DATA_SET.Instagram,
    width: 24,
    height: 25,
    color: '#1E2123',
  },
  {
    svg: SVG_DATA_SET.VK,
    width: 25,
    height: 15,
    color: '#1E2123',
  },
  {
    svg: SVG_DATA_SET.Facebook,
    width: 21,
    height: 21,
    color: '#1E2123',
  },
];

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('wrapper-full', styles.wrapper)}>
        <div className={styles.info}>
          <ImageHTML img={Images.Logo} />
          <p className={styles.textLogo}>Сдаём Бай</p>
          <div className={styles.textWrapper}>
            {FOOTER.company.map((pInfo, index) => {
              return (
                <p key={index} className={styles.textSmall}>
                  {pInfo}
                </p>
              );
            })}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoWrapper}>
            <FooterMenu items={FOOTER.titlesOne} menuType={[MenuType.BOLD]} />
            <FooterMenu
              items={FOOTER.apartments.items}
              menuType={[MenuType.BASE, MenuType.COLUMN]}
              header={FOOTER.apartments.header}
            />
            <FooterMenu items={FOOTER.titlesTwo} menuType={[MenuType.BASE]} />
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.socialsWrapper}>
              <p className={styles.text}>Мы в соцсетях</p>
              {socials.map((social, index) => {
                return (
                  <a href="#" className={styles.icon} key={index}>
                    <SVG
                      svg={social.svg}
                      width={social.width}
                      height={social.height}
                    >
                      <path d={social.svg.path} fill={social.color} />
                    </SVG>
                  </a>
                );
              })}
            </div>
            <div className={styles.socialsWrapper}>
              {cards.map((card, index) => (
                <ImageHTML img={card} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
