import React, { FC } from 'react';
import clsx from 'clsx';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

import { IFormData } from 'components/pages/contacts/form/ContactsForm';
import { FormElementType, FormIconType } from 'app.constants';

import styles from './FormElement.module.scss';

interface FormElementProps {
  type: FormElementType;
  name: Path<IFormData>;
  inputType?: string;
  placeholder?: string;
  label?: string;
  icon?: FormIconType;
  errorText?: string;
  register: UseFormRegister<IFormData>;
  options?: RegisterOptions;
  errors: FieldErrors<IFormData>;
}

export const FormElement: FC<FormElementProps> = ({
  type,
  name,
  inputType,
  label,
  icon,
  errorText,
  placeholder,
  register,
  options,
  errors,
}) => {
  return (
    <div className={styles.element}>
      {label ? (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      ) : (
        ''
      )}

      <div className={styles.inputBox}>
        {errors[name] && (
          <p className={styles.error}>{errorText ? errorText : ''}</p>
        )}
        {type === FormElementType.INPUT && (
          <input
            className={styles.input}
            type={inputType ? inputType : 'text'}
            id={name}
            placeholder={placeholder ? placeholder : ''}
            {...register(name, options ? options : {})}
          />
        )}
        {type === FormElementType.TEXTAREA && (
          <textarea
            className={clsx(styles.input, styles.textarea)}
            id={name}
            placeholder={placeholder ? placeholder : ''}
            {...register(name, options ? options : {})}
          />
        )}
        {icon ? <i className={clsx(styles.icon, styles[icon])} /> : ''}
      </div>
    </div>
  );
};
