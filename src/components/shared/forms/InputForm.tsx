import React, { FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

import { IFormData } from 'model/IFormData';

import styles from './Form.module.scss';

interface InputProps {
  name: Path<IFormData>;
  inputType?: string;
  placeholder?: string;
  register: UseFormRegister<IFormData>;
  options?: RegisterOptions;
}

export const InputForm: FC<InputProps> = ({
  inputType,
  name,
  placeholder,
  register,
  options,
}) => {
  return (
    <input
      className={styles.input}
      type={inputType ? inputType : 'text'}
      id={name}
      placeholder={placeholder ? placeholder : ''}
      {...register(name, options ? options : {})}
    />
  );
};
