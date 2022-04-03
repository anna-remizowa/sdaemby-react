import React, { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Container } from 'layouts/container/Container';
import { Button } from 'components/shared/button/Button';
import { ROUTING } from 'app.constants';
import { HomeSVG, NotFoundSVG } from 'components/shared/svg/components.svg';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { COLORS } from 'model/enum/Colors';
import { CONSTANTS } from 'constants/common.constants';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  return (
    <div className={styles.notFound}>
      <Container className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>{CONSTANTS.notFound.title}</h1>
          <p className={styles.text}>{CONSTANTS.notFound.text}</p>
          <Link to={`/${ROUTING.home}`}>
            <Button types={[ButtonStyleType.BIG, ButtonStyleType.YELLOW]}>
              <HomeSVG color={COLORS.BLACK} width={12} height={12} />
              {CONSTANTS.backHome}
            </Button>
          </Link>
        </div>
        <NotFoundSVG color={COLORS.WHITE} width={613} height={273} />
        <div className={clsx(styles.dots, styles.dots1)} />
        <div className={clsx(styles.dots, styles.dots2)} />
      </Container>
    </div>
  );
};
