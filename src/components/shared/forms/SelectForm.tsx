import React, { FC } from 'react';
import { Path, Controller, Control } from 'react-hook-form';
import Select from 'react-select';

import { IOption } from 'model/interfaces/IFilter';
import { IFormData } from 'model/interfaces/IFormData';

import 'styles/libs/select.scss';

interface FormSelectProps {
  name: Path<IFormData>;
  options: IOption[];
  placeholder?: string;
  control: Control<IFormData>;
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
  options,
  placeholder,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          className={'select'}
          classNamePrefix={'select'}
          styles={colourStyles}
          placeholder={placeholder ? placeholder : 'Выберите'}
          value={options.find((c) => c.value === value)}
          onChange={(val) => onChange(val?.value)}
          options={options}
        />
      )}
    />
  );
};
