import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import { BackgroundLayout } from 'layouts/background/BackgroundLayout';
import { FormElement } from 'components/shared/forms/FormElement';
import { FormIconType } from 'model/enum/FormIconType';
import { FORM_CONSTANTS } from 'constants/forms.constants';
import { InputForm } from 'components/shared/forms/InputForm';
import { ROUTING } from 'app.constants';
import { Button } from 'components/shared/button/Button';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { IFormData } from 'model/interfaces/IFormData';

import styles from './Auth.module.scss';
import clsx from 'clsx';

/*todo: добавить кнопку "ошибка ввода"*/
export const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const onSubmit = handleSubmit((data) => {
    console.log(recaptchaRef?.current?.getValue());
    console.log(data);
  });

  return (
    <BackgroundLayout>
      <div className={clsx(styles.auth, styles.reg)}>
        <h2 className={styles.header}>{FORM_CONSTANTS.reg.header}</h2>
        <div className={styles.wrapper}>
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
              name={'email'}
              icon={FormIconType.MAIL}
              iconError
              errors={errors}
            >
              <InputForm
                name={'email'}
                placeholder={FORM_CONSTANTS.placeholders.email2}
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

            <FormElement
              name={'repeatPassword'}
              icon={FormIconType.PASSWORD}
              iconError
              errors={errors}
            >
              <InputForm
                name={'repeatPassword'}
                placeholder={FORM_CONSTANTS.placeholders.repeatPassword}
                register={register}
                options={{
                  required: true,
                }}
              />
            </FormElement>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LehJmwfAAAAAFyERblEi-4EkMBpV5SX1d_r98qZ"
            />

            <Button
              types={[ButtonStyleType.BIG, ButtonStyleType.YELLOW]}
              width={'100%'}
              isSubmit
            >
              {FORM_CONSTANTS.buttons.reg}
            </Button>
          </form>

          <div className={styles.regBox}>
            <p className={styles.baseText}>
              <strong>{FORM_CONSTANTS.reg.agreement.header}</strong>
            </p>

            <ul className={styles.textItems}>
              {FORM_CONSTANTS.reg.agreement.text.map((t, index) => {
                return (
                  <li key={index}>
                    <span className={styles.baseText}>{t}</span>
                  </li>
                );
              })}
            </ul>

            <p className={styles.text}>
              {FORM_CONSTANTS.auth.hintReg}
              <span>
                <Link className={styles.text} to={`/${ROUTING.auth}`}>
                  {' '}
                  {FORM_CONSTANTS.auth.hintRegLink}
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};
