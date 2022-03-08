import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { HomeTabs } from './tabs/HomeTabs';
import { IFilter } from 'model/IFilter';
import { IHome } from 'model/IHome';
import { API_URL, REST_API, ROUTING } from 'app.constants';

import styles from './Home.module.scss';

export const HomeContext = React.createContext<IHome>({});

export const Home: FC = () => {
  const [appHome, setAppHome] = useState<IFilter>({});

  useEffect(() => {
    axios.get<IFilter>(API_URL + REST_API.apartFilter).then((resp) => {
      setAppHome(resp.data);
    });
  }, []);

  return (
    <HomeContext.Provider value={{ filters: appHome }}>
      <div className={clsx('wrapper', styles.background)}>
        <h2 className={styles.headerBig}>
          <span>Sdaem.by - у нас живут </span>
          <span>
            <Link to={`/${ROUTING.ads}`}>ваши объявления</Link>
          </span>
        </h2>
        <HomeTabs />
      </div>
    </HomeContext.Provider>
  );
};
