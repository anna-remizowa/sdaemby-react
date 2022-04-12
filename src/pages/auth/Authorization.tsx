import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { BackgroundLayout } from 'layouts/background/BackgroundLayout';
import { FORM_CONSTANTS } from 'constants/forms.constants';
import { FormIconType } from 'model/enum/FormIconType';
import { InputForm } from 'components/shared/forms/InputForm';
import { FormElement } from 'components/shared/forms/FormElement';
import { IFormData } from 'model/interfaces/IFormData';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { Button } from 'components/shared/button/Button';

import styles from './Auth.module.scss';

import { ROUTING } from 'app.constants';

/*todo: добавить кнопку "ошибка ввода"*/
/*todo: свитч для rememberMe*/
export const Authorization: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <BackgroundLayout>
      <div className={styles.auth}>
        <h2 className={styles.header}>{FORM_CONSTANTS.auth.header}</h2>
        <p className={styles.text}>{FORM_CONSTANTS.auth.text}</p>
        <form className={styles.form} onSubmit={onSubmit}>
          <FormElement
            name={'login'}
            icon={FormIconType.USER}
            iconError
            errors={errors}
          >
            <InputForm
              name={'login'}
              placeholder={FORM_CONSTANTS.placeholders.login}
              register={register}
              options={{
                required: true,
              }}
            />
          </FormElement>
          <FormElement
            name={'password'}
            icon={FormIconType.PASSWORD}
            iconError
            errors={errors}
          >
            <InputForm
              name={'password'}
              placeholder={FORM_CONSTANTS.placeholders.password}
              register={register}
              options={{
                required: true,
              }}
            />
          </FormElement>

          <div className={styles.box}>
            <p className={styles.text}>{FORM_CONSTANTS.auth.rememberMe}</p>
            <Link to={`/${ROUTING.pass}`} className={styles.text}>
              {FORM_CONSTANTS.auth.forgotPassword}
            </Link>
          </div>

          <Button
            types={[ButtonStyleType.BIG, ButtonStyleType.YELLOW]}
            width={'100%'}
            isSubmit
          >
            {FORM_CONSTANTS.buttons.login}
          </Button>
        </form>
        <p className={styles.text}>
          {FORM_CONSTANTS.auth.hint}
          <span>
            <Link className={styles.text} to={`/${ROUTING.reg}`}>
              {' '}
              {FORM_CONSTANTS.auth.hintLink}
            </Link>
          </span>
        </p>
      </div>
    </BackgroundLayout>
  );
};
