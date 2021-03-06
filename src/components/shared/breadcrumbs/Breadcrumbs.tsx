import React, { FC } from 'react';

import { SVG } from 'components/shared/svg/svg';

import { HOME } from 'app.constants';
import { SVG_DATA_SET } from 'components/shared/svg/svg.data';

import styles from './Breadcrumbs.module.scss';
import { Link } from 'react-router-dom';

export interface Breadcrumb {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  breadcrumbs: Breadcrumb[];
}

export const Breadcrumbs: FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => {
        return breadcrumb.href !== undefined ? (
          <Link className={styles.link} to={`/${breadcrumb.href}`} key={index}>
            {breadcrumb.name === HOME ? (
              <SVG viewBox={SVG_DATA_SET.Home.viewBox} width={12} height={12}>
                <path d={SVG_DATA_SET.Home.path} fill={'#664EF9'} />
              </SVG>
            ) : (
              breadcrumb.name
            )}
          </Link>
        ) : (
          <a className={styles.link} key={index}>
            {breadcrumb.name}
          </a>
        );
      })}
    </div>
  );
};
