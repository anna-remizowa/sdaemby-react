import React, { FC } from 'react';
import clsx from 'clsx';
import { Path, UseFormRegister } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

import { IFormData } from 'model/interfaces/IFormData';

import styles from './Form.module.scss';

interface TextAreaProps {
  name: Path<IFormData>;
  placeholder?: string;
  register: UseFormRegister<IFormData>;
  options?: RegisterOptions;
}

export const TextAreaForm: FC<TextAreaProps> = ({
  name,
  placeholder = '',
  register,
  options = {},
}) => {
  return (
    <textarea
      className={clsx(styles.input, styles.textarea)}
      id={name}
      placeholder={placeholder}
      {...register(name, options)}
    />
  );
};
