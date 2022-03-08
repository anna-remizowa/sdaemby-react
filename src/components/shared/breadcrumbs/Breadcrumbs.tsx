import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { COLORS, HOME } from 'app.constants';

import styles from './Breadcrumbs.module.scss';
import { HomeSVG } from '../svg/components.svg';

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
              <HomeSVG color={COLORS.PURPLE} width={12} height={12} />
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
