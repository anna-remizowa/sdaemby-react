import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

import { LoaderType } from 'model/enum/LoaderType';
import { COLORS } from 'model/enum/Colors';

import styles from './Loader.module.scss';

interface LoaderProps {
  type?: LoaderType;
}

const BACKGROUND_COLOR = '#f0f0f0';
const FOREGROUND_COLOR = '#dedede';

export const Loader: FC<LoaderProps> = ({ type }) => {
  if (type === LoaderType.NEWS_DETAIL) {
    return (
      <div className={styles.loader}>
        <ContentLoader
          width={1000}
          height={800}
          viewBox="0 0 500 400"
          backgroundColor={BACKGROUND_COLOR}
          foregroundColor={FOREGROUND_COLOR}
        >
          <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
          <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
          <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
        </ContentLoader>
      </div>
    );
  }

  if (type === LoaderType.NEWS) {
    return (
      <div className={styles.loader}>
        <ContentLoader
          width={1280}
          height={1000}
          viewBox="0 0 700 600"
          backgroundColor={BACKGROUND_COLOR}
          foregroundColor={FOREGROUND_COLOR}
        >
          <rect x="12" y="0" rx="2" ry="2" width="211" height="250" />
          <rect x="240" y="0" rx="2" ry="2" width="211" height="250" />
          <rect x="467" y="0" rx="2" ry="2" width="211" height="250" />
          <rect x="12" y="290" rx="2" ry="2" width="211" height="250" />
          <rect x="240" y="290" rx="2" ry="2" width="211" height="250" />
          <rect x="468" y="290" rx="2" ry="2" width="211" height="250" />
        </ContentLoader>
      </div>
    );
  }

  return (
    <div className={styles.loader}>
      <ContentLoader
        viewBox="0 0 400 160"
        height={560}
        width={450}
        backgroundColor={COLORS.YELLOW}
        foregroundColor={COLORS.PURPLE}
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    </div>
  );
};
