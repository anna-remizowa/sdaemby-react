import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypesSelector } from 'hooks/useTypesSelector';
import { HOME_RENT_LOCATION_ID } from 'app.constants';
import { fetchRent } from 'store/action-creator/rent';
import { LocationCard } from 'components/shared/location-card/LocationCard';
import { CustomSwiper } from 'components/shared/swiper/CustomSwiper';

import styles from './HomeRentSection.module.scss';

export const HomeRentSlider: FC = () => {
  const { rents, loading, error, metroId, districtId } = useTypesSelector(
    (state) => state.rent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      locationId: HOME_RENT_LOCATION_ID,
      metroId,
      districtId,
    };
    dispatch(fetchRent({ ...params }));
  }, [metroId, districtId]);

  /*todo: обработка загрузки - отдельный компонент*/
  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  /*todo: обработка ошибки - отдельный компонент*/
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <CustomSwiper
      slidesPerView={3}
      spaceBetween={30}
      items={rents.map((apart) => (
        <LocationCard {...apart} key={apart.id} />
      ))}
      classNameSwiper={styles.slider}
      navStyle={styles.navSlider}
    />
  );
};
