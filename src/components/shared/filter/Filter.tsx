import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import { IFilter } from 'model/interfaces/IFilter';
import { IFormData } from 'model/interfaces/IFormData';
import { Button } from 'components/shared/button/Button';
import { SelectForm } from 'components/shared/forms/SelectForm';
import { FormElement } from 'components/shared/forms/FormElement';
import { InputForm } from 'components/shared/forms/InputForm';
import {
  ArrowSVG,
  LocationSVG,
  OptionsSVG,
} from 'components/shared/svg/components.svg';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { FormLabelStyleType } from 'model/enum/FormLabelStyleType';
import { FormInputStyleType } from 'model/enum/FormInputStyleType';
import { COLORS } from 'model/enum/Colors';
import { FORM_CONSTANTS } from 'constants/forms.constants';
import { FilterStyleType } from 'model/enum/FilterStyleType';

import styles from './Filter.module.scss';

interface FilterProps {
  filter: IFilter;
  isReset?: boolean;
  isMap?: boolean;
  filterType?: FilterStyleType;
  buttonTypesShow?: ButtonStyleType;
  buttonTypesReset?: ButtonStyleType;
  inputLabelTypes?: FormLabelStyleType[];
  arrowColor?: string;
  buttonHeaderShow?: string;
}

/*todo: filter - доделать функционал + подменю "больше опций"*/
export const Filter: FC<FilterProps> = ({
  filter,
  isReset,
  isMap,
  filterType,
  buttonTypesShow = ButtonStyleType.YELLOW,
  buttonTypesReset = ButtonStyleType.BASE_V4,
  inputLabelTypes = [FormLabelStyleType.COLUMN, FormLabelStyleType.LIGHT],
  arrowColor = COLORS.BLACK,
  buttonHeaderShow = FORM_CONSTANTS.buttons.show,
}) => {
  const { handleSubmit, control, register } = useForm<IFormData>({});
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form
      className={clsx(styles.filter, filterType && styles[filterType])}
      onSubmit={onSubmit}
    >
      <div className={styles.options}>
        {filter.locations ? (
          <div className={styles.box}>
            <FormElement
              name={'location'}
              label={FORM_CONSTANTS.labels.location}
              labelTypes={inputLabelTypes}
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
              label={FORM_CONSTANTS.labels.rooms}
              labelTypes={inputLabelTypes}
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
            name={'priceFrom'}
            label={FORM_CONSTANTS.labels.priceDay}
            labelTypes={inputLabelTypes}
          >
            <div className={styles.doubleInputBox}>
              <InputForm
                name={'priceFrom'}
                placeholder={FORM_CONSTANTS.labels.from}
                register={register}
                inputStyles={[FormInputStyleType.MIDDLE]}
              />
              <span className={styles.separator}>-</span>
              <InputForm
                name={'priceTo'}
                placeholder={FORM_CONSTANTS.labels.to}
                register={register}
                inputStyles={[FormInputStyleType.MIDDLE]}
              />
            </div>
          </FormElement>
        </div>

        <div className={styles.optionsBox}>
          <button type="button" className={styles.optionsButton}>
            <p className={styles.text}>{FORM_CONSTANTS.filters.options}</p>
            <OptionsSVG color={COLORS.PURPLE} height={18} width={16} />
          </button>
        </div>

        {isMap ? (
          <div className={styles.optionsBox}>
            <button type="button" className={styles.optionsButton}>
              <p className={styles.text}>{FORM_CONSTANTS.filters.map}</p>
              <LocationSVG color={COLORS.PURPLE} height={15} width={12} />
            </button>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className={styles.buttons}>
        {isReset ? (
          <Button types={[buttonTypesReset]}>
            {FORM_CONSTANTS.buttons.reset}
          </Button>
        ) : (
          ''
        )}

        <Button types={[buttonTypesShow]} isSubmit>
          <span>{buttonHeaderShow}</span>
          <ArrowSVG color={arrowColor} width={10} height={11} />
        </Button>
      </div>
    </form>
  );
};
