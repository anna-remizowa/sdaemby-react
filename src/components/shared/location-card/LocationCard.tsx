import { FC } from 'react';

import { ILocation } from 'model/interfaces/ILocation';
import { Label } from 'components/shared/label/Label';
import { LabelStyleType } from 'model/enum/LabelStyleType';
import {
  DotSVG,
  HeartSVG,
  LocationSVG,
  MetroSVG,
  PhoneSVG,
  UserSVG,
} from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';
import { Button } from 'components/shared/button/Button';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';

import styles from './LocationCard.module.scss';

export const LocationCard: FC<ILocation> = ({
  id,
  name,
  href,
  img,
  price,
  priceForTime,
  rooms,
  roomsByPeople,
  area,
  address,
  metro,
  district,
  description,
  owner,
  label,
  isName,
  isFavorite,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img src={img} alt="Img" className={styles.img} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.priceBox}>
            <p className={styles.price}>{price}</p>
            <p className={styles.priceText}>{priceForTime}</p>
          </div>
          <div className={styles.labelBox}>
            <Label type={LabelStyleType.SMALL}>
              {
                <>
                  <UserSVG width={15} height={15} color={COLORS.GRAY} />
                  <span>{`${rooms} (${roomsByPeople.join('+')})`}</span>
                </>
              }
            </Label>
            <Label type={LabelStyleType.SMALL}>{`${rooms} комн.`}</Label>
            <Label type={LabelStyleType.SMALL}>{area}</Label>
          </div>
        </div>

        <h4 className={styles.header}>{name}</h4>

        <div className={styles.locationBox}>
          <div className={styles.location}>
            <LocationSVG color={COLORS.GRAY_LIGHT} width={12} height={15} />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.location}>
            <MetroSVG color={COLORS.GRAY_LIGHT} width={20} height={12} />
            <p className={styles.text}>{metro}</p>
          </div>
          <div className={styles.location}>
            <DotSVG color={COLORS.GRAY_LIGHT} width={6} height={6} />
            <p className={styles.text}>{district}</p>
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.buttons}>
          <Button types={[ButtonStyleType.CIRCLE]}>
            <HeartSVG color={COLORS.RED} width={15} height={13} />
          </Button>
          <Button types={[ButtonStyleType.BASE_V2]}>
            <PhoneSVG height={15} width={9} color={COLORS.PURPLE} />
            <span>{'Контакты'}</span>
          </Button>
          <Button types={[ButtonStyleType.YELLOW_V2]}>{'Подробнее'}</Button>
        </div>
      </div>
    </div>
  );
};
