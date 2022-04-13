import React, { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { BackgroundLayout } from 'layouts/background/BackgroundLayout';
import { FORM_CONSTANTS } from 'constants/forms.constants';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { Button } from 'components/shared/button/Button';
import { ROUTING } from 'app.constants';

import styles from './Auth.module.scss';

export const ConfirmRegistration: FC = () => {
  return (
    <BackgroundLayout>
      <div className={clsx(styles.auth, styles.confirm)}>
        <h2 className={styles.header}>{FORM_CONSTANTS.confirm.header}</h2>
        <p className={styles.text}>{FORM_CONSTANTS.confirm.text}</p>
        <Link to={`/${ROUTING.auth}`}>
          <Button types={[ButtonStyleType.BIG, ButtonStyleType.YELLOW]}>
            {FORM_CONSTANTS.buttons.understand}
          </Button>
        </Link>
      </div>
    </BackgroundLayout>
  );
};
