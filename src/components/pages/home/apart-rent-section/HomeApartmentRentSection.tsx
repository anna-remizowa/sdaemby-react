import React, { FC, useContext } from 'react';

import { HomeContext } from 'components/pages/home/Home';
import { SelectForm } from 'components/shared/forms/SelectForm';
import { useForm } from 'react-hook-form';
import { IFormData } from 'model/interfaces/IFormData';
import { FormElement } from 'components/shared/forms/FormElement';
import { FormIconType } from 'model/enum/FormIconType';

import styles from './HomeApartmentRentSection.module.scss';
import { LocationCard } from '../../../shared/location-card/LocationCard';

/*todo: при смене значения в селектах должен вызываться onSubmit для формы, как сделать?*/
export const HomeApartmentRentSection: FC = () => {
  const dataHome = useContext(HomeContext);
  const { handleSubmit, control } = useForm<IFormData>({});
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <div className={styles.wrapper}>
        <p className={styles.label}>{dataHome.rent?.label}</p>

        <div className={styles.box}>
          <h2 className={styles.header}>{dataHome.rent?.header}</h2>
          <form className={styles.filters}>
            <FormElement icon={FormIconType.METRO}>
              <SelectForm
                control={control}
                name={'metro'}
                placeholder={'Метро'}
                options={dataHome.rent?.metro}
                classes={'rent icon'}
              />
            </FormElement>
            <SelectForm
              control={control}
              name={'district'}
              placeholder={'Район'}
              options={dataHome.rent?.districts}
              classes={'rent'}
            />
          </form>
        </div>

        <div className={styles.slider}>
          {dataHome.rent?.items?.map((apart) => {
            return <LocationCard {...apart} />;
          })}
        </div>
      </div>
    </div>
  );
};
