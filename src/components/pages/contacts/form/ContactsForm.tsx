import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './ContactsForm.module.scss';

/*todo: валидация*/
/*todo: отправка формы + модалка*/
/*todo: сделать отдельные компоненты под input/textarea?*/
export const ContactsForm: FC = () => {
  return (
    <div className={styles.form}>
      <form action="">
        <div className={styles.row}>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor="name">
              Ваше имя
            </label>
            <div className={styles.inputIcon}>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                placeholder="Введите имя"
              />
              <i className={clsx(styles.icon, styles.iconUser)} />
            </div>
          </div>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor="email">
              Ваша электронная почта
            </label>
            <div className={styles.inputIcon}>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                placeholder="Введите email"
              />
              <i className={clsx(styles.icon, styles.iconMail)} />
            </div>
          </div>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="text">
            Ваше сообщение
          </label>
          <textarea
            className={clsx(styles.input, styles.textarea)}
            id="text"
            name="text"
            placeholder="Сообщение"
          />
        </div>
        <button type="submit" className={styles.submit}>
          Отправить
        </button>
      </form>
    </div>
  );
};
