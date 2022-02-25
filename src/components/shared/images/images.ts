import styles from './images.module.scss';

export interface ImageItem {
  src: string;
  alt: string;
  clazz?: string[];
}

export const Images: { [key: string]: ImageItem } = {
  Logo: {
    src: require('../../../assets/images/logo.png'),
    alt: 'Логотип',
    clazz: [styles.logo],
  },
  Visa: {
    src: require('../../../assets/images/visa.png'),
    alt: 'Visa',
    clazz: [styles.card, styles.visa],
  },
  Mastercard: {
    src: require('../../../assets/images/mastercard.png'),
    alt: 'Mastercard',
    clazz: [styles.card, styles.mastercard],
  },
  Belkart: {
    src: require('../../../assets/images/belkart.png'),
    alt: 'Belkart',
    clazz: [styles.card, styles.belkart],
  },
  Verified: {
    src: require('../../../assets/images/verified-by-visa.png'),
    alt: 'Verified',
    clazz: [styles.card, styles.verified],
  },
  Securecode: {
    src: require('../../../assets/images/securecode.png'),
    alt: 'Securecode',
    clazz: [styles.card, styles.securecode],
  },
  Webpay: {
    src: require('../../../assets/images/webpay.png'),
    alt: 'Webpay',
    clazz: [styles.card, styles.webpay],
  },
  News1: {
    src: require('../../../assets/images/news_1.png'),
    alt: 'News',
    clazz: [styles.newsItemImg],
  },
};
