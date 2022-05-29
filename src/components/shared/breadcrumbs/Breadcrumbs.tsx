import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { HOME } from 'app.constants';
import { HomeSVG } from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';
import { IBreadcrumb } from 'model/interfaces/IBreadcrumb';

import styles from './Breadcrumbs.module.scss';

interface BreadcrumbProps {
  breadcrumbs: IBreadcrumb[];
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
