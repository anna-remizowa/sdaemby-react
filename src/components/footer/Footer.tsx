import React from 'react';

import styles from './Footer.module.scss';

import {
  apartments,
  company,
  titlesOne,
  titlesTwo,
} from '../../data/footer.data';

import { FooterMenu, MenuType } from './FooterMenu';
import { ImageHTML, ImageItem, Images } from '../../assets/images';

const cards: ImageItem[] = [
  Images.Visa,
  Images.Webpay,
  Images.Verified,
  Images.Mastercard,
  Images.Securecode,
  Images.Belkart,
];

export const Footer = () => {
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
              items={apartments}
              menuType={[MenuType.BASE, MenuType.COLUMN]}
              header={'Квартиры'}
            />
            <FooterMenu items={titlesTwo} menuType={[MenuType.BASE]} />
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.socialsWrapper}>
              <p className={styles.text}>Мы в соцсетях</p>
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
