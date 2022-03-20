import { FC, useContext } from 'react';

import { Section } from 'components/shared/section/Section';
import { HomeContext } from 'components/pages/home/Home';

import styles from './HomeNewsSection.module.scss';

export const HomeNewsSection: FC = () => {
  const dataHome = useContext(HomeContext);
  return (
    <div className={styles.wrapper}>
      <Section
        label={dataHome.locationInfo?.label}
        header={
          dataHome.locationInfo?.header
            ? dataHome.locationInfo?.header
            : 'Квартира на сутки'
        }
      >
        {dataHome.locationInfo?.content && (
          <div className={styles.box}>
            {Array.from(dataHome.locationInfo?.content).map((cont, index) => (
              <p
                className={styles.text}
                key={index}
                dangerouslySetInnerHTML={{ __html: cont }}
              />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
};
