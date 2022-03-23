import { FC } from 'react';

import styles from './HomeAdsSection.module.scss';
import { HOME_ADS_DATA as data } from 'mock/data/home.data';
import { Button } from '../../../shared/button/Button';

export const HomeAdsSection: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.content}>
        <div className={styles.headerBox}>
          <h2 className={styles.header}>{data.header}</h2>
          <p className={styles.text}>{data.content}</p>
          <Button>{data.button}</Button>
        </div>
      </div>
    </div>
  );
};
