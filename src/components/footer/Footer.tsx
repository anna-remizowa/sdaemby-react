import React, { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { FooterMenu } from './FooterMenu';
import { ImageItem, Images } from 'components/shared/images/images';
import { MenuType, ROUTING } from 'app.constants';
import { Payments } from '../shared/payments/Payments';
import { FooterSocials, FooterSocialsSVG } from './FooterSocials';

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
              className={clsx(Images.Logo.clazz ? Images.Logo.clazz : '')}
              src={Images.Logo.src}
              alt={Images.Logo.alt}
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
            <FooterSocials socials={socials} title={'Мы в соцсетях'} />
            <Payments images={cards} />
          </div>
        </div>
      </div>
    </footer>
  );
};
