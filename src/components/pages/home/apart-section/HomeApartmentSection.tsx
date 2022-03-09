import { FC, useContext } from 'react';
import { HomeContext } from 'components/pages/home/Home';
import { PhotoBox } from 'components/shared/photo-box/PhotoBox';

import styles from './HomeApartmentSection.module.scss';

export const HomeApartmentSection: FC = () => {
  const dataHome = useContext(HomeContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.sliders}>
        {dataHome.sliders ? <PhotoBox items={dataHome.sliders.items} /> : ''}
      </div>
      <div className={styles.lists}></div>
    </div>
  );
};
