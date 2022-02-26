import React, { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { HeaderMenu } from './HeaderMenu';
import { Button } from 'components/shared/button/Button';
import { ImagesData } from 'data/images.data';

import { ButtonType, ROUTING } from 'app.constants';
import { HEADER } from 'data/header.data';

import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header>
      <div className={clsx('wrapper-full', styles.top)}>
        <HeaderMenu items={HEADER.top} />
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
            src={ImagesData.Logo.src}
            alt={ImagesData.Logo.alt}
          />
        </Link>

        <HeaderMenu items={HEADER.bottom} headerTypeBold />
        <Button types={[ButtonType.HIGHLIGHT]}>+ Разместить объявление</Button>
      </div>
    </header>
  );
};
