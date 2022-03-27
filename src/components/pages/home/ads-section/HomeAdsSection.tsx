import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'components/shared/button/Button';
import { LocationSVG } from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { HOME_ADS_DATA as data } from 'mock/data/home.data';
import { Card } from 'components/shared/card/Card';

import styles from './HomeAdsSection.module.scss';

export const HomeAdsSection: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.content}>
        <div className={styles.headerBox}>
          <h2 className={styles.header}>{data.header}</h2>
          <p className={styles.text}>{data.content}</p>
          <Link to={data.href}>
            <Button types={[ButtonStyleType.COMMON]}>
              <LocationSVG color={COLORS.YELLOW} width={12} height={15} />
              {data.button}
            </Button>
          </Link>
        </div>
        <div className={styles.cardBox}>
          {data.items.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
