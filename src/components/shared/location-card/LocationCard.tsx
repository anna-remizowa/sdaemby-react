import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { IRent } from 'model/interfaces/IRent';
import { Label } from 'components/shared/label/Label';
import { LabelStyleType } from 'model/enum/LabelStyleType';
import {
  BedSVG,
  DotSVG,
  HeartSVG,
  LocationSVG,
  MetroSVG,
  PhoneSVG,
  PointerSVG,
  UserSVG,
} from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';
import { Button } from 'components/shared/button/Button';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { CustomSwiper } from 'components/shared/swiper/CustomSwiper';
import { LabelApartmentType } from 'model/enum/LabelApartmentType';
import { ROUTING } from 'app.constants';
import { FORM_CONSTANTS } from 'constants/forms';
import { PopUpOwner } from 'components/shared/pop-up-owner/PopUpOwner';

import styles from './LocationCard.module.scss';

/*todo: свайпер - пагинация*/
export const LocationCard: FC<IRent> = ({
  id,
  name,
  images,
  price,
  priceForTime,
  rooms,
  roomsByPeople,
  beds,
  area,
  address,
  metro,
  district,
  location,
  others,
  description = '',
  owner,
  label,
  isFavorite,
}) => {
  const [isButtonContactsHovered, setButtonContactsHovered] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imgBox}>
        {images.length > 1 ? (
          <CustomSwiper
            items={images.map((img) => (
              <img src={img} alt="Photo location" className={styles.img} />
            ))}
            classNameSwiper={styles.swiper}
            loop
          />
        ) : (
          <img src={images[0]} alt="Photo location" className={styles.img} />
        )}
        {label && (
          <div
            className={clsx(styles.label, {
              [styles.gold]: LabelApartmentType.GOLD === label,
            })}
          >
            {label}
          </div>
        )}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.priceBox}>
            <p className={styles.price}>{price}</p>
            <p className={styles.priceText}>{priceForTime}</p>
          </div>
          <div className={styles.labelBox}>
            {roomsByPeople && (
              <Label type={LabelStyleType.SMALL}>
                {
                  <>
                    <UserSVG width={15} height={15} color={COLORS.GRAY} />
                    <span>{roomsByPeople}</span>
                  </>
                }
              </Label>
            )}

            {rooms && <Label type={LabelStyleType.SMALL}>{rooms}</Label>}

            {beds && (
              <Label type={LabelStyleType.SMALL}>
                {
                  <>
                    <BedSVG width={15} height={15} color={COLORS.GRAY} />
                    <span>{beds}</span>
                  </>
                }
              </Label>
            )}

            {area && <Label type={LabelStyleType.SMALL}>{area}</Label>}
          </div>
        </div>

        {name && <h4 className={styles.header}>{name}</h4>}

        <div className={styles.locationBox}>
          <div className={styles.location}>
            <LocationSVG color={COLORS.GRAY_LIGHT} width={12} height={15} />
            <p className={styles.text}>{address}</p>
          </div>

          {metro && (
            <div className={styles.location}>
              <MetroSVG color={COLORS.GRAY_LIGHT} width={20} height={12} />
              <p className={styles.text}>{metro}</p>
            </div>
          )}

          {district && (
            <div className={styles.location}>
              <DotSVG color={COLORS.GRAY_LIGHT} width={6} height={6} />
              <p className={styles.text}>{district}</p>
            </div>
          )}

          {location && (
            <div className={styles.location}>
              <PointerSVG color={COLORS.GRAY_LIGHT} width={15} height={15} />
              <p className={styles.text}>{location}</p>
            </div>
          )}

          {others && (
            <div className={styles.othersBox}>
              {others.map((other, index) => (
                <div className={styles.location} key={index}>
                  <DotSVG color={COLORS.GRAY_LIGHT} width={6} height={6} />
                  <p className={styles.text}>{other}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.buttons}>
          {isFavorite && (
            <Button types={[ButtonStyleType.CIRCLE]}>
              <HeartSVG color={COLORS.RED} width={15} height={13} />
            </Button>
          )}
          <Button
            types={[ButtonStyleType.BASE_V2]}
            onMouseEnter={() => setButtonContactsHovered(true)}
            onMouseLeave={() => setButtonContactsHovered(false)}
          >
            <PopUpOwner owner={owner} isShow={isButtonContactsHovered} />
            <PhoneSVG height={15} width={9} color={COLORS.PURPLE} />
            <span>{FORM_CONSTANTS.buttons.contacts}</span>
          </Button>
          <Link to={`/${ROUTING.location}/${id}`}>
            <Button types={[ButtonStyleType.YELLOW_V2]}>
              {FORM_CONSTANTS.buttons.more}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
