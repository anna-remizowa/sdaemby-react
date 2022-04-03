import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypesSelector } from 'hooks/useTypesSelector';
import { HOME_RENT_LOCATION_ID } from 'app.constants';
import { fetchRent } from 'store/action-creator/rent';
import { LocationCard } from 'components/shared/location-card/LocationCard';
import { CustomSwiper } from 'components/shared/swiper/CustomSwiper';
import { Loader } from 'components/shared/loader/Loader';
import { Error } from 'components/shared/error/Error';

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

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
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
