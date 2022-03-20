import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { HomeTabs } from './tabs/HomeTabs';
import { HomeApartmentSection } from './apart-section/HomeApartmentSection';
import { IFilter } from 'model/interfaces/IFilter';
import { IHome } from 'model/interfaces/IHome';
import {
  API_URL,
  HOME_RENT_LOCATION_ID,
  REST_API,
  ROUTING,
} from 'app.constants';
import { ILinkProps } from 'model/interfaces/ILinkProps';
import { IRentSection } from 'model/interfaces/IRentSection';
import { HomeRentSection } from './rent-section/HomeRentSection';
import { INews } from 'model/interfaces/INews';
import { ISection } from 'model/interfaces/ISection';
import { HomeNewsSection } from './news-section/HomeNewsSection';

import styles from './Home.module.scss';

export const HomeContext = React.createContext<IHome>({});

/*todo: возможно стоит все данные на главной странице запрашивать одним запросом*/
export const Home: FC = () => {
  const [filter, setFilter] = useState<IFilter>({});
  const [slider, setSlider] = useState<ILinkProps>({});
  const [list, setList] = useState<ILinkProps>({});
  const [rent, setRent] = useState<IRentSection>({});
  const [locationInfo, setLocationInfo] = useState<ISection>({});
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    axios
      .get<IFilter>(`${API_URL}${REST_API.filter}/apartments`)
      .then((resp) => {
        setFilter(resp.data);
      });
    axios
      .get<ILinkProps>(API_URL + REST_API.locations, {
        params: { type: 'photo' },
      })
      .then((resp) => {
        setSlider(resp.data);
      });
    axios
      .get<ILinkProps>(API_URL + REST_API.locations, {
        params: { type: 'list' },
      })
      .then((resp) => {
        setList(resp.data);
      });
    axios
      .get<IRentSection>(`${API_URL}${REST_API.rent}`, {
        params: { location: HOME_RENT_LOCATION_ID },
      })
      .then((resp) => {
        setRent(resp.data);
      });
    axios
      .get<ISection>(`${API_URL}${REST_API.locations}/info`, {
        params: { location: HOME_RENT_LOCATION_ID },
      })
      .then((resp) => {
        setLocationInfo(resp.data);
      });
  }, []);

  return (
    <HomeContext.Provider
      value={{
        filters: filter,
        sliders: slider,
        list: list,
        rent: rent,
        locationInfo: locationInfo,
      }}
    >
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
        <HomeRentSection />
        <HomeNewsSection />
      </div>
    </HomeContext.Provider>
  );
};
