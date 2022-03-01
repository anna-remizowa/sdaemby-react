import React, { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { FooterMenu } from './menu/FooterMenu';
import { FooterSocials, FooterSocialsSVG } from './socials/FooterSocials';
import { FooterPayments, ImageItem } from './payments/FooterPayments';

import { MenuType, ROUTING } from 'app.constants';
import { SVG_DATA_SET } from 'components/shared/svg/svg.data';
import { FOOTER } from 'data/footer.data';

import styles from './Footer.module.scss';

const cards: ImageItem[] = [
  {
    src: require('../../assets/images/visa.png'),
    alt: 'Visa',
    clazz: 'card visa',
  },
  {
    src: require('../../assets/images/mastercard.png'),
    alt: 'Mastercard',
    clazz: 'card mastercard',
  },
  {
    src: require('../../assets/images/belkart.png'),
    alt: 'Belkart',
    clazz: 'card belkart',
  },
  {
    src: require('../../assets/images/verified-by-visa.png'),
    alt: 'Verified',
    clazz: 'card verified',
  },
  {
    src: require('../../assets/images/securecode.png'),
    alt: 'Securecode',
    clazz: 'card securecode',
  },
  {
    src: require('../../assets/images/webpay.png'),
    alt: 'Webpay',
    clazz: 'card webpay',
  },
];

const socials: FooterSocialsSVG[] = [
  {
    svg: SVG_DATA_SET.Instagram,
    width: 24,
    height: 25,
    color: '#1E2123',
    href: 'https://www.instagram.com/',
  },
  {
    svg: SVG_DATA_SET.VK,
    width: 25,
    height: 15,
    color: '#1E2123',
    href: 'https://vk.com/',
  },
  {
    svg: SVG_DATA_SET.Facebook,
    width: 21,
    height: 21,
    color: '#1E2123',
    href: 'https://ru-ru.facebook.com/',
  },
];

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('wrapper-full', styles.wrapper)}>
        <div className={styles.info}>
          <Link to={`/${ROUTING.home}`}>
            <img
              className={'logo'}
              src={require('../../assets/images/logo.png')}
              alt={'Логотип'}
            />
          </Link>
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
              href={FOOTER.apartments.href}
            />
            <FooterMenu items={FOOTER.titlesTwo} menuType={[MenuType.BASE]} />
          </div>
          <div className={styles.infoWrapper}>
            <FooterSocials socials={socials} />
            <FooterPayments images={cards} />
          </div>
        </div>
      </div>
    </footer>
  );
};
