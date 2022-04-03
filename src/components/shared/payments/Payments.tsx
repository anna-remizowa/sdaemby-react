import React, { FC } from 'react';

import { ImageItem } from 'components/shared/images/images';

import styles from './Payments.module.scss';
import clsx from 'clsx';

interface PaymentsProps {
  images: ImageItem[];
}

export const Payments: FC<PaymentsProps> = ({ images }) => {
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
