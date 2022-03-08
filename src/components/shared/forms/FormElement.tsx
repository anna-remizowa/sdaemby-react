import React, { FC } from 'react';
import clsx from 'clsx';
import { FieldErrors, Path } from 'react-hook-form';

import { IFormData } from 'model/IFormData';
import { FormElementLabelType, FormIconType } from 'app.constants';

import styles from './Form.module.scss';

interface FormElementProps {
  name: Path<IFormData>;
  label?: string;
  labelTypes?: FormElementLabelType[];
  icon?: FormIconType;
  errorText?: string;
  errors?: FieldErrors<IFormData>;
  children: React.ReactNode;
}

export const FormElement: FC<FormElementProps> = ({
  name,
  label,
  labelTypes,
  icon,
  errorText,
  errors,
  children,
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
        {errors && errors[name] && (
          <p className={styles.error}>{errorText ? errorText : ''}</p>
        )}
        {children}
        {icon ? <i className={clsx(styles.icon, styles[icon])} /> : ''}
      </div>
    </div>
  );
};
