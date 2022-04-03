import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SingleValue } from 'react-select';
import { useDispatch } from 'react-redux';

import { Section } from 'components/shared/section/Section';
import { HomeContext } from 'pages/home/Home';
import { SelectForm } from 'components/shared/forms/SelectForm';
import { useForm } from 'react-hook-form';
import { IFormData } from 'model/interfaces/IFormData';
import { FormElement } from 'components/shared/forms/FormElement';
import { FormIconType } from 'model/enum/FormIconType';
import { Button } from 'components/shared/button/Button';
import { ArrowSVG } from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { ROUTING } from 'app.constants';
import { IOption } from 'model/interfaces/IOption';
import { setRentDistrict, setRentMetro } from 'store/action-creator/rent';
import { HomeRentSlider } from './HomeRentSlider';
import { CONSTANTS } from 'constants/common.constants';
import { FORM_CONSTANTS } from 'constants/forms.constants';

import styles from './HomeRentSection.module.scss';

/*todo: изображение на бэкграунде*/
export const HomeRentSection: FC = () => {
  const dataHome = useContext(HomeContext);
  const { control } = useForm<IFormData>({});
  const dispatch = useDispatch();

  return (
    <Section
      label={dataHome.rent?.label}
      header={dataHome.rent?.header ? dataHome.rent?.header : CONSTANTS.rents}
      className={styles.wrapper}
      headerChildren={
        <form className={styles.filters}>
          <FormElement icon={FormIconType.METRO}>
            <SelectForm
              control={control}
              name={'metro'}
              placeholder={FORM_CONSTANTS.placeholders.metro}
              options={dataHome.rent?.metro}
              classes={'rent icon'}
              onChangeCustom={(value: SingleValue<IOption>) => {
                dispatch(setRentMetro(Number(value?.value)));
              }}
            />
          </FormElement>
          <SelectForm
            control={control}
            name={'district'}
            placeholder={FORM_CONSTANTS.placeholders.district}
            options={dataHome.rent?.districts}
            classes={'rent'}
            onChangeCustom={(value: SingleValue<IOption>) => {
              dispatch(setRentDistrict(Number(value?.value)));
            }}
          />
        </form>
      }
    >
      <HomeRentSlider />

      {dataHome.rent?.numberOffers && (
        <div className={styles.offers}>
          <div>
            <p className={styles.bigText}>
              {dataHome.rent?.numberOffers} <span>{' +'}</span>
            </p>
            <p className={styles.smallText}>{dataHome.rent?.titleOffers}</p>
          </div>
          <div className={styles.button}>
            <Link to={`/${ROUTING.catalog}/${dataHome.rent?.id}`}>
              <Button types={[ButtonStyleType.HIGHLIGHT]}>
                <>
                  <span>{CONSTANTS.seeAll}</span>
                  <ArrowSVG color={COLORS.WHITE} width={10} height={11} />
                </>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Section>
  );
};
