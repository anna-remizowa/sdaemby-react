import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './FooterPayments.module.scss';

export interface ImageItem {
  src: string;
  alt: string;
  clazz?: string;
}

interface PaymentsProps {
  images: ImageItem[];
}

export const FooterPayments: FC<PaymentsProps> = ({ images }) => {
  return (
    <div className={styles.payments}>
      {images.map((card, index) => (
        <img
          className={clsx(card.clazz ? card.clazz : '')}
          src={card.src}
          alt={card.alt}
          key={index}
        />
      ))}
    </div>
  );
};
