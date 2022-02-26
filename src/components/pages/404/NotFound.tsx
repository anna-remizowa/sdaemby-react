import React, { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Button } from '../../shared/button/Button';
import { ButtonType, ROUTING } from '../../../app.constants';
import { SVG_DATA_SET } from '../../shared/svg/svg.data';
import { SVG } from '../../shared/svg/svg';
import { NotFoundSVG } from '../../shared/svg/components.svg';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={clsx('wrapper', styles.wrapper)}>
        <div className={styles.content}>
          <h1 className={styles.title}>Ошибка 404</h1>
          <p className={styles.text}>
            Возможно, у вас опечатка в адресе страницы, или её просто не
            существует
          </p>
          <Link to={`/${ROUTING.home}`}>
            <Button types={[ButtonType.BIG]}>
              <SVG viewBox={SVG_DATA_SET.Home.viewBox} width={12} height={12}>
                <path d={SVG_DATA_SET.Home.path} fill={'#1E2123'} />
              </SVG>
              Вернуться на главную
            </Button>
          </Link>
        </div>
        <SVG viewBox={'0 0 613 273'} width={613} height={273}>
          <NotFoundSVG color={'white'} />
        </SVG>
        <div className={clsx(styles.dots, styles.dots1)} />
        <div className={clsx(styles.dots, styles.dots2)} />
      </div>
    </div>
  );
};
