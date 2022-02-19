import React, { FC } from 'react';

import styles from './Footer.module.scss';

import {
  apartments,
  company,
  titlesOne,
  titlesTwo,
} from '../../data/footer.data';

import { FooterMenu } from './FooterMenu';
import { ImageHTML, ImageItem, Images } from '../../assets/images';
import { MenuType } from '../../app.constants';
import { SVG, SVGItem } from '../shared/svg/svg';
import { SvgDataSet } from '../shared/svg/svg.data';

const cards: ImageItem[] = [
  Images.Visa,
  Images.Webpay,
  Images.Verified,
  Images.Mastercard,
  Images.Securecode,
  Images.Belkart,
];

const socials: SVGItem[] = [
  {
    svg: SvgDataSet.Instagram,
    width: 24,
    height: 25,
    color: '#1E2123',
  },
  {
    svg: SvgDataSet.VK,
    width: 25,
    height: 15,
    color: '#1E2123',
  },
  {
    svg: SvgDataSet.Facebook,
    width: 21,
    height: 21,
    color: '#1E2123',
  },
];

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={['wrapper', styles.wrapper].join(' ')}>
        <div className={styles.info}>
          <ImageHTML img={Images.Logo} />
          <p className={styles.textLogo}>Сдаём Бай</p>
          <div className={styles.textWrapper}>
            {company.map((pInfo, index) => {
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
            <FooterMenu items={titlesOne} menuType={[MenuType.BOLD]} />
            <FooterMenu
              items={apartments.items}
              menuType={[MenuType.BASE, MenuType.COLUMN]}
              header={apartments.header}
            />
            <FooterMenu items={titlesTwo} menuType={[MenuType.BASE]} />
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.socialsWrapper}>
              <p className={styles.text}>Мы в соцсетях</p>
              {socials.map((social, index) => {
                return (
                  <a href="#" className={styles.icon} key={index}>
                    <SVG data={social} />
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
