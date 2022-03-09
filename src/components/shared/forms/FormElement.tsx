import React, { FC } from 'react';
import clsx from 'clsx';
import { FieldErrors, Path } from 'react-hook-form';

import { IFormData } from 'model/interfaces/IFormData';
import { FormLabelStyleType } from 'model/enum/FormLabelStyleType';
import { FormIconType } from 'model/enum/FormIconType';

import styles from './Form.module.scss';

interface FormElementProps {
  name: Path<IFormData>;
  label?: string;
  labelTypes?: FormLabelStyleType[];
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
          : styles[FormLabelStyleType.BASE]
      )}
    >
      {label ? (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      ) : (
        ''
      )}

      <div className={clsx(styles.inputBox, { [styles.isIcon]: icon })}>
        {errors && errors[name] && (
          <p className={styles.error}>{errorText ? errorText : ''}</p>
        )}
        {children}
        {icon ? <i className={clsx(styles.icon, styles[icon])} /> : ''}
      </div>
    </div>
  );
};
