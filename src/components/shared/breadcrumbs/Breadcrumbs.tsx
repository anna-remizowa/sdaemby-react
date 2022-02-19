import React, { FC } from 'react';

import { HOME } from '../../../app.constants';
import { SVG } from '../svg/svg';
import { SvgDataSet } from '../svg/svg.data';

import styles from './Breadcrumbs.module.scss';

export interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  breadcrumbs: Breadcrumb[];
}

export const Breadcrumbs: FC<BreadcrumbProps> = (props) => {
  return (
    <div className={styles.breadcrumbs}>
      {props.breadcrumbs.map((breadcrumb, index) => {
        return (
          <a className={styles.link} href={breadcrumb.href} key={index}>
            {breadcrumb.name === HOME ? (
              <SVG
                data={{
                  svg: SvgDataSet.Home,
                  width: 12,
                  height: 12,
                  color: '#664EF9',
                }}
              />
            ) : (
              breadcrumb.name
            )}
          </a>
        );
      })}
    </div>
  );
};
