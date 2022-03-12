import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import { HomeContext } from 'components/pages/home/Home';
import { SelectForm } from 'components/shared/forms/SelectForm';
import { useForm } from 'react-hook-form';
import { IFormData } from 'model/interfaces/IFormData';
import { FormElement } from 'components/shared/forms/FormElement';
import { FormIconType } from 'model/enum/FormIconType';
import { LocationCard } from 'components/shared/location-card/LocationCard';
import { CustomSwiper } from 'components/shared/swiper/CustomSwiper';
import { Button } from 'components/shared/button/Button';
import { ArrowSVG } from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { ROUTING } from 'app.constants';

import styles from './HomeApartmentRentSection.module.scss';

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

        {dataHome.rent?.items && (
          <CustomSwiper
            slidesPerView={3}
            spaceBetween={30}
            items={dataHome.rent?.items?.map((apart) => (
              <LocationCard {...apart} key={apart.id} />
            ))}
            classNameSwiper={styles.slider}
            navStyle={styles.navSlider}
          />
        )}

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
                    <span>Посмотреть все</span>
                    <ArrowSVG color={COLORS.WHITE} width={10} height={11} />
                  </>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
