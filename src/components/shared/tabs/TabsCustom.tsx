import React, { FC } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import styles from './TabsCustom.module.scss';

interface ITab {
  title: string;
  content: React.ReactNode;
}

interface TabsCustomProps {
  tabs: ITab[];
}

export const TabsCustom: FC<TabsCustomProps> = ({ tabs }) => {
  return (
    <Tabs className={styles.tabs}>
      <TabList className={styles.list}>
        {tabs.map((tab, index) => (
          <Tab
            className={styles.tab}
            selectedClassName={styles.tabSelected}
            key={index}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>

      {tabs.map((tab, index) => (
        <TabPanel
          className={styles.panel}
          selectedClassName={styles.panelSelected}
          key={index}
        >
          {tab.content}
        </TabPanel>
      ))}
    </Tabs>
  );
};
