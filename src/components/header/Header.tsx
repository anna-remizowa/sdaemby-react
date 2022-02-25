import React, { FC } from 'react';
import clsx from 'clsx';

import { HeaderMenu } from './HeaderMenu';
import { Button } from 'components/shared/button/Button';
import { Images } from 'components/shared/images/images';

import { ButtonType } from 'app.constants';
import { HEADER } from 'data/header.data';

import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header>
      <div className={clsx('wrapper-full', styles.top)}>
        <HeaderMenu items={HEADER.top} />
        <div className={styles.login}>
          <a href="#" className={clsx('text', styles.textBookmarks)}>
            Закладки
          </a>
          <a href="#" className={clsx('text', styles.textLogin)}>
            Вход и регистрация
          </a>
        </div>
      </div>
      <div className={clsx('wrapper-full', styles.bottom)}>
        <img
          className={clsx(Images.Logo.clazz ? Images.Logo.clazz : '')}
          src={Images.Logo.src}
          alt={Images.Logo.alt}
        />
        <HeaderMenu items={HEADER.bottom} headerTypeBold />
        <Button types={[ButtonType.HIGHLIGHT]}>+ Разместить объявление</Button>
      </div>
    </header>
  );
};
