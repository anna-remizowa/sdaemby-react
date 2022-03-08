import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { ButtonType, FormElementType, FormIconType } from 'app.constants';
import { Button } from 'components/shared/button/Button';
import { FormElement } from 'components/shared/forms/FormElement';

import styles from './ContactsForm.module.scss';

export type IFormData = {
  name: string;
  email: string;
  text: string;
};

/*todo: модалка после отправки формы*/
export const ContactsForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  const dataProps = {
    register: register,
    errors: errors,
  };

  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <div className={styles.inputBox}>
          <FormElement
            type={FormElementType.INPUT}
            name={'name'}
            label={'Ваше имя'}
            icon={FormIconType.USER}
            placeholder={'Введите имя'}
            errorText={'Введите корректное имя'}
            options={{
              required: true,
            }}
            {...dataProps}
          />

          <FormElement
            type={FormElementType.INPUT}
            inputType={'email'}
            name={'email'}
            label="Ваша электронная почта"
            icon={FormIconType.MAIL}
            placeholder={'Введите email'}
            errorText={'Введите корректный email'}
            options={{
              required: true,
              pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
            }}
            {...dataProps}
          />
        </div>

        <div className={styles.inputBox}>
          <FormElement
            type={FormElementType.TEXTAREA}
            name={'text'}
            label="Ваше сообщение"
            placeholder={'Сообщение'}
            errorText={'Это поле не может быть пустым'}
            options={{
              required: true,
            }}
            {...dataProps}
          />
        </div>

        <Button
          types={[ButtonType.BIG, ButtonType.PURPLE]}
          isSubmit
          width={200}
        >
          Отправить
        </Button>
      </form>
    </div>
  );
};
