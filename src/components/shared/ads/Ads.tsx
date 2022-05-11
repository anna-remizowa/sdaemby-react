import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'components/shared/button/Button';
import { LocationSVG } from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { Card } from 'components/shared/card/Card';
import { ICard } from 'model/interfaces/ICard';

import styles from './Ads.module.scss';

interface AdsProps {
  header: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  cardsItems?: ICard[];
  height?: string;
}

export const Ads: FC<AdsProps> = ({
  header,
  text,
  buttonText,
  buttonHref,
  cardsItems,
  height = '100%',
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} style={{ height: height }} />
      <div className={styles.content}>
        <div className={styles.headerBox}>
          <h2 className={styles.header}>{header}</h2>
          <p className={styles.text}>{text}</p>
          <Link to={buttonHref}>
            <Button types={[ButtonStyleType.COMMON]}>
              <LocationSVG color={COLORS.YELLOW} width={12} height={15} />
              {buttonText}
            </Button>
          </Link>
        </div>
        {cardsItems && (
          <div className={styles.cardBox}>
            {cardsItems.map((item, index) => (
              <Card {...item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
