import React, { FC, useContext } from 'react';

import { TabsCustom } from 'components/shared/tabs/TabsCustom';
import { Filter } from 'components/shared/filter/Filter';
import { HomeContext } from 'pages/home/Home';

import styles from './HomeStartSection.module.scss';

export const HomeStartSection: FC = () => {
  const dataHome = useContext(HomeContext);
  return (
    <div className={styles.background}>
      {dataHome.start?.header && (
        <h2
          className={styles.headerBig}
          dangerouslySetInnerHTML={{
            __html: dataHome.start?.header,
          }}
        />
      )}
      {dataHome.start?.tabs && (
        <TabsCustom
          tabs={dataHome.start?.tabs.map((tab) => {
            return {
              title: tab.header,
              content: tab.content ? (
                <Filter filter={tab.content} isMap />
              ) : (
                <></>
              ),
            };
          })}
        />
      )}
    </div>
  );
};
