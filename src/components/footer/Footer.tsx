import React from 'react';

import styles from './Footer.module.scss';

import Logo from '../../assets/images/logo.png';
import Visa from '../../assets/images/visa.png';
import Mastercard from '../../assets/images/mastercard.png';
import Belkart from '../../assets/images/belkart.png';
import Securecode from '../../assets/images/securecode.png';
import Verified from '../../assets/images/verified-by-visa.png';
import Webpay from '../../assets/images/webpay.png';

import {
  apartments,
  company,
  titlesOne,
  titlesTwo,
} from '../../data/footer.data';

import { FooterMenu, MenuType } from './FooterMenu';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={['wrapper', styles.wrapper].join(' ')}>
        <div className={styles.info}>
          <img className="logo" src={Logo} alt="" />
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
            <FooterMenu titles={titlesOne} menuType={[MenuType.BOLD]} />
            <FooterMenu
              titles={apartments}
              menuType={[MenuType.BASE, MenuType.COLUMN]}
              header={'Квартиры'}
            />
            <FooterMenu titles={titlesTwo} menuType={[MenuType.BASE]} />
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.socialsWrapper}>
              <p className={styles.text}>Мы в соцсетях</p>
            </div>
            <div className={styles.socialsWrapper}>
              <img className={styles.cardImg} src={Visa} alt="" />
              <img className={styles.cardImg} src={Webpay} alt="" />
              <img className={styles.cardImg} src={Verified} alt="" />
              <img className={styles.cardImg} src={Mastercard} alt="" />
              <img className={styles.cardImg} src={Securecode} alt="" />
              <img className={styles.cardImg} src={Belkart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
