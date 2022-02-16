import React, { FC } from 'react';

import styles from './Header.module.scss';

import { headerMenuBottom, headerMenuTop } from '../../data/header.data';

import { HeaderMenu } from './HeaderMenu';
import { Button } from '../shared/button/Button';
import { ImageHTML, Images } from '../../assets/images';
import { ButtonType } from '../../app.constants';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={['wrapper', styles.top].join(' ')}>
        <HeaderMenu items={headerMenuTop} />
        <div className={styles.login}>
          <a href="#" className={['text', styles.textBookmarks].join(' ')}>
            Закладки
          </a>
          <div className="icon" />
          <a href="#" className={['text', styles.textLogin].join(' ')}>
            Вход и регистрация
          </a>
        </div>
      </div>
      <div className={['wrapper', styles.bottom].join(' ')}>
        <ImageHTML img={Images.Logo} />
        <HeaderMenu items={headerMenuBottom} headerTypeBold={true} />
        <Button
          title={'+ Разместить объявление'}
          types={[ButtonType.PURPLE]}
          width={224}
        />
      </div>
    </header>
  );
};
