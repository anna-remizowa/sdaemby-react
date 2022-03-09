import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { HeaderMenu } from './menu/HeaderMenu';
import { Button } from 'components/shared/button/Button';

import { API_URL, REST_API, ROUTING } from 'app.constants';
import { IHeader } from 'model/interfaces/IHeader';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';

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
      <div className={clsx('wrapper-full', styles.top)}>
        <HeaderMenu items={appHeader.top ? appHeader.top : []} />
        <div className={styles.login}>
          <Link
            to={`/${ROUTING.favorites}`}
            className={clsx('text', styles.textBookmarks)}
          >
            Закладки
          </Link>
          <Link
            to={`/${ROUTING.login}`}
            className={clsx('text', styles.textLogin)}
          >
            Вход и регистрация
          </Link>
        </div>
      </div>
      <div className={clsx('wrapper-full', styles.bottom)}>
        <Link to={`/${ROUTING.home}`}>
          <img
            className={'logo'}
            src={require('../../assets/images/logo.png')}
            alt={'Логотип'}
          />
        </Link>

        <HeaderMenu
          items={appHeader.bottom ? appHeader.bottom : []}
          headerTypeBold
        />
        <Button types={[ButtonStyleType.HIGHLIGHT]}>
          + Разместить объявление
        </Button>
      </div>
    </header>
  );
};
