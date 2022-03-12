import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './CustomSwiper.module.scss';

interface SwiperProps {
  spaceBetween?: number;
  slidesPerView?: number;
  items: React.ReactNode[];
  classNameSwiper?: string;
  classNameSwiperSlide?: string;
  navigation?: boolean;
  navStyle?: string;
  loop?: boolean;
}

export const CustomSwiper: FC<SwiperProps> = ({
  spaceBetween = 0,
  slidesPerView = 1,
  items,
  classNameSwiper = '',
  classNameSwiperSlide = '',
  navigation = true,
  navStyle = '',
  loop,
}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        className={classNameSwiper}
        navigation={{ prevEl, nextEl }}
        loop={loop}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className={clsx(styles.slide, classNameSwiperSlide)}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
      {navigation ? (
        <div className={clsx(styles.navButtons, navStyle)}>
          <button
            className={clsx(styles.navigation, styles.prev)}
            ref={(node) => setPrevEl(node)}
          >
            <i />
          </button>
          <button
            className={clsx(styles.navigation, styles.next)}
            ref={(node) => setNextEl(node)}
          >
            <i />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
