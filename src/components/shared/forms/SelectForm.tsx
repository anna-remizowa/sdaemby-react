import React, { FC } from 'react';
import { Path, Controller, Control } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';

import { IOption } from 'model/interfaces/IOption';
import { IFormData } from 'model/interfaces/IFormData';

import 'styles/libs/select.scss';

interface FormSelectProps {
  name: Path<IFormData>;
  options?: IOption[];
  placeholder?: string;
  control: Control<IFormData>;
  classes?: string;
  onChangeCustom?: (val: SingleValue<IOption>) => void;
}

const colourStyles = {
  container: () => ({}),
  control: () => ({}),
  valueContainer: () => ({}),
  placeholder: () => ({}),
  singleValue: () => ({}),
  menu: () => ({}),
  option: () => ({}),
  dropdownIndicator: () => ({}),
};

export const SelectForm: FC<FormSelectProps> = ({
  name,
  options = [],
  placeholder = 'Выберите',
  control,
  classes = '',
  onChangeCustom,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          className={'select ' + classes}
          classNamePrefix={'select'}
          styles={colourStyles}
          placeholder={placeholder}
          value={options.find((c) => c.value === value)}
          onChange={(val) =>
            onChangeCustom ? onChangeCustom(val) : onChange(val?.value)
          }
          options={options}
        />
      )}
    />
  );
};
