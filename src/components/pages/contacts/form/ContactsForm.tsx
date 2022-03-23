import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from 'components/shared/button/Button';
import { FormElement } from 'components/shared/forms/FormElement';
import { TextAreaForm } from 'components/shared/forms/TextAreaForm';
import { InputForm } from 'components/shared/forms/InputForm';
import { IFormData } from 'model/interfaces/IFormData';
import { FormLabelStyleType } from 'model/enum/FormLabelStyleType';
import { FormIconType } from 'model/enum/FormIconType';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { FORM_CONSTANTS } from 'constants/forms';

import styles from './ContactsForm.module.scss';

/*todo: модалка после отправки формы*/
/*todo: очистка формы*/
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
            label={FORM_CONSTANTS.labels.name}
            labelTypes={[FormLabelStyleType.COLUMN]}
            icon={FormIconType.USER}
            errorText={FORM_CONSTANTS.errors.name}
            errors={errors}
          >
            <InputForm
              name={'name'}
              placeholder={FORM_CONSTANTS.placeholders.name}
              register={register}
              options={{
                required: true,
              }}
            />
          </FormElement>

          <FormElement
            name={'email'}
            label={FORM_CONSTANTS.labels.email}
            labelTypes={[FormLabelStyleType.COLUMN]}
            icon={FormIconType.MAIL}
            errorText={FORM_CONSTANTS.errors.email}
            errors={errors}
          >
            <InputForm
              name={'email'}
              inputType={'email'}
              placeholder={FORM_CONSTANTS.placeholders.email}
              register={register}
              options={{
                required: true,
                pattern: FORM_CONSTANTS.regexp.email,
              }}
            />
          </FormElement>
        </div>

        <div className={styles.inputBox}>
          <FormElement
            name={'text'}
            label={FORM_CONSTANTS.labels.message}
            labelTypes={[FormLabelStyleType.COLUMN]}
            errorText={FORM_CONSTANTS.errors.notEmpty}
            errors={errors}
          >
            <TextAreaForm
              name={'text'}
              placeholder={FORM_CONSTANTS.placeholders.message}
              register={register}
              options={{
                required: true,
              }}
            />
          </FormElement>
        </div>

        <Button
          types={[ButtonStyleType.BIG, ButtonStyleType.PURPLE]}
          isSubmit
          width={200}
        >
          {FORM_CONSTANTS.buttons.send}
        </Button>
      </form>
    </div>
  );
};
