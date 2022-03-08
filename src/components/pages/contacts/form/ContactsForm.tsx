import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { ButtonType, FormElementLabelType, FormIconType } from 'app.constants';
import { Button } from 'components/shared/button/Button';
import { FormElement } from 'components/shared/forms/FormElement';
import { TextAreaForm } from 'components/shared/forms/TextAreaForm';
import { InputForm } from 'components/shared/forms/InputForm';

import styles from './ContactsForm.module.scss';
import { IFormData } from 'model/IFormData';

/*todo: модалка после отправки формы*/
export const ContactsForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <div className={styles.inputBox}>
          <FormElement
            name={'name'}
            label={'Ваше имя'}
            labelTypes={[FormElementLabelType.COLUMN]}
            icon={FormIconType.USER}
            errorText={'Введите корректное имя'}
            errors={errors}
          >
            <InputForm
              name={'name'}
              placeholder={'Введите имя'}
              register={register}
              options={{
                required: true,
              }}
            />
          </FormElement>

          <FormElement
            name={'email'}
            label={'Ваша электронная почта'}
            labelTypes={[FormElementLabelType.COLUMN]}
            icon={FormIconType.MAIL}
            errorText={'Введите корректный email'}
            errors={errors}
          >
            <InputForm
              name={'email'}
              inputType={'email'}
              placeholder={'Введите email'}
              register={register}
              options={{
                required: true,
                pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
              }}
            />
          </FormElement>
        </div>

        <div className={styles.inputBox}>
          <FormElement
            name={'text'}
            label={'Ваше сообщение'}
            labelTypes={[FormElementLabelType.COLUMN]}
            errorText={'Это поле не может быть пустым'}
            errors={errors}
          >
            <TextAreaForm
              name={'text'}
              placeholder={'Сообщение'}
              register={register}
              options={{
                required: true,
              }}
            />
          </FormElement>
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
