import { FC, useContext } from 'react';

import { Section } from 'components/shared/section/Section';
import { HomeContext } from 'components/pages/home/Home';
import { ListBox } from 'components/shared/list-box/ListBox';
import { HOME_NEWS_LIMIT, ROUTING } from 'app.constants';
import { getDateFromISO } from 'utils/getDateFromISO';

import styles from './HomeNewsSection.module.scss';

export const HomeNewsSection: FC = () => {
  const dataHome = useContext(HomeContext);
  const contentLength = dataHome.locationInfo?.content
    ? dataHome.locationInfo?.content.length
    : 0;
  const news = dataHome.news
    ? dataHome.news.slice(0, HOME_NEWS_LIMIT).map((one) => {
        return {
          id: one.id,
          name: one.header,
          href: `/${ROUTING.news}/${one.id}`,
          label: getDateFromISO(one.date, true),
        };
      })
    : [];

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
            <div className={styles.imgBox}>
              <div className={styles.imgWrapper}>
                <img
                  className={styles.img}
                  src={dataHome.locationInfo?.img}
                  alt="Photo"
                />
                <div className={styles.dots} />
              </div>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: dataHome.locationInfo?.content[0],
                }}
              />
            </div>
            {contentLength > 1 &&
              Array.from(dataHome.locationInfo?.content)
                .slice(1, contentLength)
                .map((cont, index) => (
                  <p
                    className={styles.text}
                    key={index}
                    dangerouslySetInnerHTML={{ __html: cont }}
                  />
                ))}
          </div>
        )}
      </Section>
      {news && (
        <ListBox
          header={'Новости'}
          items={news}
          className={styles.news}
          linkAll={{ href: `/${ROUTING.news}`, name: 'Посмотреть все' }}
        />
      )}
    </div>
  );
};
