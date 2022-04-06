import { FC } from 'react';

import { BackgroundLayout } from 'layouts/background/BackgroundLayout';

import styles from './Auth.module.scss';

export const Registration: FC = () => {
  return (
    <BackgroundLayout>
      <div className={styles.auth}>
        <h2 className={styles.header}>Регистрация</h2>
        <form className={styles.form}></form>
      </div>
    </BackgroundLayout>
  );
};
