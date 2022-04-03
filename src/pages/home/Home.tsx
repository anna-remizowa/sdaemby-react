import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from 'layouts/container/Container';
import { HomeStartSection } from './start-section/HomeStartSection';
import { HomeApartmentSection } from './apart-section/HomeApartmentSection';
import { IHome } from 'model/interfaces/IHome';
import { API_URL, HOME_RENT_LOCATION_ID, REST_API } from 'app.constants';
import { ILinkProps } from 'model/interfaces/ILinkProps';
import { IRentSection } from 'model/interfaces/IRentSection';
import { HomeRentSection } from './rent-section/HomeRentSection';
import { INews, INewsContent } from 'model/interfaces/INews';
import { ISection } from 'model/interfaces/ISection';
import { HomeNewsSection } from './news-section/HomeNewsSection';
import { HomeAdsSection } from './ads-section/HomeAdsSection';
import { IStartSection } from 'model/interfaces/IStartSection';

import styles from './Home.module.scss';

export const HomeContext = React.createContext<IHome>({});

/*todo: использовать redux toolkit query для запросов данных на главной странице вместо хука useContext*/
export const Home: FC = () => {
  const [start, setStart] = useState<IStartSection>({});
  const [slider, setSlider] = useState<ILinkProps>({});
  const [list, setList] = useState<ILinkProps>({});
  const [rent, setRent] = useState<IRentSection>({});
  const [locationInfo, setLocationInfo] = useState<ISection>({});
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    axios.get<IStartSection>(`${API_URL}${REST_API.start}`).then((resp) => {
      setStart(resp.data);
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
    axios
      .get<INewsContent>(`${API_URL}${REST_API.news}`, {
        params: { location: HOME_RENT_LOCATION_ID },
      })
      .then((resp) => {
        setNews(resp.data?.news ? resp.data?.news : []);
      });
  }, []);

  return (
    <HomeContext.Provider
      value={{
        start,
        sliders: slider,
        list,
        rent,
        locationInfo,
        news,
      }}
    >
      <Container className={styles.home}>
        <HomeStartSection />
        <HomeApartmentSection />
        <HomeRentSection />
        <HomeAdsSection />
        <HomeNewsSection />
      </Container>
    </HomeContext.Provider>
  );
};
