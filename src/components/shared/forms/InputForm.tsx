import React, { FC } from 'react';
import clsx from 'clsx';
import { Path, UseFormRegister } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

import { IFormData } from 'model/interfaces/IFormData';
import { FormInputStyleType } from 'model/enum/FormInputStyleType';

import styles from './Form.module.scss';

interface InputProps {
  name: Path<IFormData>;
  inputType?: string;
  inputStyles?: FormInputStyleType[];
  placeholder?: string;
  register: UseFormRegister<IFormData>;
  options?: RegisterOptions;
}

export const InputForm: FC<InputProps> = ({
  inputType,
  inputStyles,
  name,
  placeholder,
  register,
  options,
}) => {
  return (
    <input
      className={clsx(
        styles.input,
        inputStyles?.map((inputStyle) => styles[inputStyle]).join(' ')
      )}
      type={inputType ? inputType : 'text'}
      id={name}
      placeholder={placeholder ? placeholder : ''}
      {...register(name, options ? options : {})}
    />
  );
};
