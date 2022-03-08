import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from 'components/shared/button/Button';
import { IFilter } from 'model/IFilter';
import { ButtonType, FormElementLabelType } from 'app.constants';
import { SelectForm } from 'components/shared/forms/SelectForm';
import { FormElement } from 'components/shared/forms/FormElement';
import { InputForm } from 'components/shared/forms/InputForm';
import { IFormData } from 'model/IFormData';

import styles from './Filter.module.scss';

interface FilterProps {
  filter: IFilter;
  isReset?: boolean;
  isMap?: boolean;
  filterType?: string;
  buttonTypes?: ButtonType;
  inputLabelTypes?: string;
}

export const Filter: FC<FilterProps> = ({
  filter,
  isReset,
  isMap,
  filterType,
  buttonTypes,
  inputLabelTypes,
}) => {
  const { handleSubmit, control, register } = useForm<IFormData>({});
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form className={styles.filter} onSubmit={onSubmit}>
      {filter.locations ? (
        <div className={styles.box}>
          <FormElement
            name={'location'}
            label={'Город'}
            labelTypes={[
              FormElementLabelType.COLUMN,
              FormElementLabelType.LIGHT,
            ]}
          >
            <SelectForm
              control={control}
              name={'location'}
              options={filter.locations}
            />
          </FormElement>
        </div>
      ) : (
        ''
      )}

      {filter.rooms ? (
        <div className={styles.box}>
          <FormElement
            name={'room'}
            label={'Комнаты'}
            labelTypes={[
              FormElementLabelType.COLUMN,
              FormElementLabelType.LIGHT,
            ]}
          >
            <SelectForm
              control={control}
              name={'room'}
              options={filter.rooms}
            />
          </FormElement>
        </div>
      ) : (
        ''
      )}

      <div className={styles.box}>
        <FormElement
          name={'price'}
          label={'Цена за сутки (BYN)'}
          labelTypes={[FormElementLabelType.COLUMN, FormElementLabelType.LIGHT]}
        >
          <InputForm name={'price'} placeholder={'От'} register={register} />
        </FormElement>
      </div>

      <Button types={[ButtonType.YELLOW]} isSubmit>
        Отправить
      </Button>
    </form>
  );
};
