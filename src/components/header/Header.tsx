import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Container } from 'layouts/container/Container';
import { ContainerType } from 'model/enum/ContainerType';
import { HeaderMenu } from './menu/HeaderMenu';
import { Button } from 'components/shared/button/Button';
import { API_URL, REST_API, ROUTING } from 'app.constants';
import { IHeader } from 'model/interfaces/IHeader';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { CONSTANTS } from 'constants/common.constants';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const [appHeader, setAppHeader] = useState<IHeader>({});

  useEffect(() => {
    axios.get<IHeader>(API_URL + REST_API.header).then((resp) => {
      setAppHeader(resp.data);
    });
  }, []);

  return (
    <header>
      <Container type={ContainerType.FULL} className={styles.top}>
        <HeaderMenu items={appHeader.top ? appHeader.top : []} />
        <div className={styles.login}>
          <Link
            to={`/${ROUTING.favorites}`}
            className={clsx('text', styles.textBookmarks)}
          >
            {CONSTANTS.favorites}
          </Link>
          <Link
            to={`/${ROUTING.auth}`}
            className={clsx('text', styles.textLogin)}
          >
            {CONSTANTS.signIn}
          </Link>
        </div>
      </Container>
      <Container type={ContainerType.FULL} className={styles.bottom}>
        <Link to={`/${ROUTING.home}`}>
          <img
            className={'logo'}
            src={require('../../assets/images/logo.png')}
            alt={CONSTANTS.logo}
          />
        </Link>

        <HeaderMenu
          items={appHeader.bottom ? appHeader.bottom : []}
          headerTypeBold
        />
        <Link to={`/${ROUTING.addAds}`}>
          <Button types={[ButtonStyleType.HIGHLIGHT]}>
            {CONSTANTS.addAds}
          </Button>
        </Link>
      </Container>
    </header>
  );
};
