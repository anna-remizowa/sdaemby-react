import React, { FC } from 'react';
import clsx from 'clsx';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

import {
  FormElementLabelType,
  FormElementType,
  FormIconType,
} from 'app.constants';

import styles from './Form.module.scss';
import { IContactsFormData } from '../../../model/IFormData';

interface FormElementProps {
  type: FormElementType;
  name: Path<IContactsFormData>;
  inputType?: string;
  placeholder?: string;
  label?: string;
  labelTypes?: FormElementLabelType[];
  icon?: FormIconType;
  errorText?: string;
  register: UseFormRegister<IContactsFormData>;
  options?: RegisterOptions;
  errors: FieldErrors<IContactsFormData>;
}

export const FormElement: FC<FormElementProps> = ({
  type,
  name,
  inputType,
  label,
  labelTypes,
  icon,
  errorText,
  placeholder,
  register,
  options,
  errors,
}) => {
  return (
    <div
      className={clsx(
        styles.element,
        labelTypes
          ? labelTypes.map<string>((type) => styles[type]).join(' ')
          : styles[FormElementLabelType.BASE]
      )}
    >
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
