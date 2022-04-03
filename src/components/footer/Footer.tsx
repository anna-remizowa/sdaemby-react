import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { ContainerType } from 'model/enum/ContainerType';
import { Container } from 'layouts/container/Container';
import { FooterMenu } from './menu/FooterMenu';
import { FooterPayments, ImageItem } from './payments/FooterPayments';
import { IFooter } from 'model/interfaces/IFooter';
import { Socials, SocialsSVG } from 'components/shared/socials/Socials';
import { API_URL, REST_API, ROUTING } from 'app.constants';
import { SocialType } from 'model/enum/SocialType';
import { MenuType } from 'model/enum/MenuType';
import { SocialStyleType } from 'model/enum/SocialStyleType';
import { COLORS } from 'model/enum/Colors';
import { CONSTANTS } from 'constants/common.constants';

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

const socials: SocialsSVG[] = [
  {
    tag: SocialType.INSTAGRAM,
    width: 24,
    height: 25,
    href: 'https://www.instagram.com/',
  },
  {
    tag: SocialType.VK,
    width: 25,
    height: 15,
    href: 'https://vk.com/',
  },
  {
    tag: SocialType.FACEBOOK,
    width: 21,
    height: 21,
    href: 'https://ru-ru.facebook.com/',
  },
];

export const Footer: FC = () => {
  const [appFooter, setAppFooter] = useState<IFooter>({});

  useEffect(() => {
    axios.get<IFooter>(API_URL + REST_API.footer).then((resp) => {
      setAppFooter(resp.data);
    });
  }, []);

  return (
    <footer className={styles.footer}>
      <Container type={ContainerType.FULL} className={styles.wrapper}>
        <div className={styles.info}>
          <Link to={`/${ROUTING.home}`}>
            <img
              className={'logo'}
              src={require('../../assets/images/logo.png')}
              alt={CONSTANTS.logo}
            />
          </Link>
          <p className={styles.textLogo}>Сдаём Бай</p>
          <div className={styles.textWrapper}>
            {appFooter.company
              ? appFooter.company.map((pInfo, index) => {
                  return (
                    <p key={index} className={styles.textSmall}>
                      {pInfo}
                    </p>
                  );
                })
              : ''}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoWrapper}>
            <FooterMenu
              items={appFooter.titlesOne ? appFooter.titlesOne : []}
              menuType={[MenuType.BOLD]}
            />
            {appFooter.apartments ? (
              <FooterMenu
                items={
                  appFooter.apartments.items ? appFooter.apartments.items : []
                }
                menuType={[MenuType.BASE, MenuType.COLUMN]}
                {...appFooter.apartments}
              />
            ) : (
              ''
            )}

            <FooterMenu
              items={appFooter.titlesTwo ? appFooter.titlesTwo : []}
              menuType={[MenuType.BASE]}
            />
          </div>
          <div className={styles.infoWrapper}>
            <Socials
              socials={socials}
              types={[SocialStyleType.BASE]}
              header={CONSTANTS.socials}
              iconColor={COLORS.BLACK}
            />
            <FooterPayments images={cards} />
          </div>
        </div>
      </Container>
    </footer>
  );
};
