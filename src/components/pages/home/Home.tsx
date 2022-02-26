import { FC } from 'react';
import clsx from 'clsx';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { ROUTING } from '../../../app.constants';

export const Home: FC = () => {
  return (
    <>
      <div className={clsx('wrapper', styles.background)}>
        <h2 className={styles.headerBig}>
          <span>Sdaem.by - у нас живут </span>
          <span>
            <Link to={`/${ROUTING.ads}`}>ваши объявления</Link>
          </span>
        </h2>
      </div>
    </>
  );
};
