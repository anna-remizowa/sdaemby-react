import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { HomeTabs } from './tabs/HomeTabs';
import { HomeApartmentSection } from './apart-section/HomeApartmentSection';
import { IFilter } from 'model/interfaces/IFilter';
import { IHome } from 'model/interfaces/IHome';
import { API_URL, REST_API, ROUTING } from 'app.constants';
import { IPhotoItems } from 'model/interfaces/IPhotoItems';

import styles from './Home.module.scss';

export const HomeContext = React.createContext<IHome>({});

/*todo: возможно стоит все данные на главной странице запрашивать одним запросом*/
export const Home: FC = () => {
  const [filter, setFilter] = useState<IFilter>({});
  const [slider, setSlider] = useState<IPhotoItems>({});

  useEffect(() => {
    axios.get<IFilter>(API_URL + REST_API.apartFilter).then((resp) => {
      setFilter(resp.data);
    });
    axios.get<IPhotoItems>(API_URL + REST_API.photoSlider).then((resp) => {
      setSlider(resp.data);
    });
  }, []);

  return (
    <HomeContext.Provider value={{ filters: filter, sliders: slider }}>
      <div className={clsx('wrapper', styles.home)}>
        <div className={styles.background}>
          <h2 className={styles.headerBig}>
            <span>Sdaem.by - у нас живут </span>
            <span>
              <Link to={`/${ROUTING.ads}`}>ваши объявления</Link>
            </span>
          </h2>
          <HomeTabs />
        </div>

        <HomeApartmentSection />
      </div>
    </HomeContext.Provider>
  );
};
