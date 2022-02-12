import React from 'react';

import styles from './Header.module.scss';

import Logo from '../../assets/images/logo.png';

import { menu, titles } from '../../data/header.data';

import { HeaderTitle } from './HeaderTitle';
import { Menu } from './Menu';
import { Button, ButtonType } from '../shared/button/Button';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={['wrapper', styles.top].join(' ')}>
        <HeaderTitle titles={titles} />
        <div className={styles.login}>
          <p className={['text', styles.textBookmarks].join(' ')}>Закладки</p>
          <div className="icon" />
          <p className={['text', styles.textLogin].join(' ')}>
            Вход и регистрация
          </p>
        </div>
      </div>
      <div className={['wrapper', styles.bottom].join(' ')}>
        <img className="logo" src={Logo} alt="" />
        <Menu titles={menu} />
        <Button
          title={'Разместить объявление'}
          types={[ButtonType.PURPLE]}
          width={224}
        />
      </div>
    </header>
  );
};
