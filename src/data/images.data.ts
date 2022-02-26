export interface ImageItem {
  src: string;
  alt: string;
  clazz?: string;
}

export const ImagesData: { [key: string]: ImageItem } = {
  Logo: {
    src: require('../assets/images/logo.png'),
    alt: 'Логотип',
  },
  Visa: {
    src: require('../assets/images/visa.png'),
    alt: 'Visa',
    clazz: 'card visa',
  },
  Mastercard: {
    src: require('../assets/images/mastercard.png'),
    alt: 'Mastercard',
    clazz: 'card mastercard',
  },
  Belkart: {
    src: require('../assets/images/belkart.png'),
    alt: 'Belkart',
    clazz: 'card belkart',
  },
  Verified: {
    src: require('../assets/images/verified-by-visa.png'),
    alt: 'Verified',
    clazz: 'card verified',
  },
  Securecode: {
    src: require('../assets/images/securecode.png'),
    alt: 'Securecode',
    clazz: 'card securecode',
  },
  Webpay: {
    src: require('../assets/images/webpay.png'),
    alt: 'Webpay',
    clazz: 'card webpay',
  },
};
