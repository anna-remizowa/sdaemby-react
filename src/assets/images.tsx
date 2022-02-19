import React, { FC } from 'react';

import styles from './images.module.scss';

export interface ImageItem {
  src: string;
  alt: string;
  clazz?: string[];
}

interface ImageProps {
  img: ImageItem;
}

export const Images: { [key: string]: ImageItem } = {
  Logo: {
    src: require('./images/logo.png'),
    alt: 'Логотип',
    clazz: [styles.logo],
  },
  Visa: {
    src: require('./images/visa.png'),
    alt: 'Visa',
    clazz: [styles.card, styles.visa],
  },
  Mastercard: {
    src: require('./images/mastercard.png'),
    alt: 'Mastercard',
    clazz: [styles.card, styles.mastercard],
  },
  Belkart: {
    src: require('./images/belkart.png'),
    alt: 'Belkart',
    clazz: [styles.card, styles.belkart],
  },
  Verified: {
    src: require('./images/verified-by-visa.png'),
    alt: 'Verified',
    clazz: [styles.card, styles.verified],
  },
  Securecode: {
    src: require('./images/securecode.png'),
    alt: 'Securecode',
    clazz: [styles.card, styles.securecode],
  },
  Webpay: {
    src: require('./images/webpay.png'),
    alt: 'Webpay',
    clazz: [styles.card, styles.webpay],
  },
  News1: {
    src: require('./images/news_1.png'),
    alt: 'News',
    clazz: [styles.newsItemImg],
  },
};

export const ImageHTML: FC<ImageProps> = (props: ImageProps) => {
  return (
    <img
      className={props.img.clazz ? props.img.clazz.join(' ') : ''}
      src={props.img.src}
      alt={props.img.alt}
    />
  );
};
