import React from 'react';

import styles from './Header.module.scss';

import { headerMenuBottom, headerMenuTop } from '../../data/header.data';

import { HeaderMenu } from './HeaderMenu';
import { Button, ButtonType } from '../shared/button/Button';
import { ImageHTML, Images } from '../../assets/images';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={['wrapper', styles.top].join(' ')}>
        <HeaderMenu items={headerMenuTop} />
        <div className={styles.login}>
          <p className={['text', styles.textBookmarks].join(' ')}>Закладки</p>
          <div className="icon" />
          <p className={['text', styles.textLogin].join(' ')}>
            Вход и регистрация
          </p>
        </div>
      </div>
      <div className={['wrapper', styles.bottom].join(' ')}>
        <ImageHTML img={Images.Logo} />
        <HeaderMenu items={headerMenuBottom} headerTypeBold={true} />
        <Button
          title={'Разместить объявление'}
          types={[ButtonType.PURPLE]}
          width={224}
        />
      </div>
    </header>
  );
};
