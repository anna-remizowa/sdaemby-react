import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { ICatalog } from 'model/interfaces/ICatalog';
import { API_URL, REST_API } from 'app.constants';
import { Container } from 'layouts/container/Container';
import { Breadcrumbs } from 'components/shared/breadcrumbs/Breadcrumbs';
import { Button } from 'components/shared/button/Button';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { Filter } from 'components/shared/filter/Filter';
import { FilterStyleType } from 'model/enum/FilterStyleType';
import { COLORS } from 'model/enum/Colors';
import { FormLabelStyleType } from 'model/enum/FormLabelStyleType';
import { FORM_CONSTANTS } from 'constants/forms.constants';
import { CATALOG_ADS_DATA as dataAds } from 'mock/data/catalog.data';
import { Ads } from 'components/shared/ads/Ads';

import styles from './Catalog.module.scss';

export const Catalog: FC = () => {
  const [catalogData, setCatalogData] = useState<ICatalog>({});

  useEffect(() => {
    axios.get<ICatalog>(API_URL + REST_API.catalog).then((resp) => {
      setCatalogData(resp.data);
    });
  }, []);

  return (
    <div className={styles.catalog}>
      <div className={styles.content}>
        <Container className={styles.wrapper}>
          <Breadcrumbs
            breadcrumbs={catalogData.breadcrumbs ? catalogData.breadcrumbs : []}
          />
          <h1 className={styles.header}>{catalogData.header}</h1>
          {catalogData.recommend && (
            <>
              <h3 className={styles.headerRecommend}>
                {catalogData.recommend.header}
              </h3>
              <div className={styles.recommend}>
                {catalogData.recommend.items?.map((item, index) => {
                  return (
                    <Button
                      types={[ButtonStyleType.BASE_V3, ButtonStyleType.MINI]}
                      key={index}
                    >
                      {item}
                    </Button>
                  );
                })}
              </div>
            </>
          )}
        </Container>
      </div>

      <div className={styles.filter}>
        <Container className={styles.filterWrapper}>
          {catalogData.filter && (
            <Filter
              filter={catalogData.filter}
              buttonTypesShow={ButtonStyleType.PURPLE}
              filterType={FilterStyleType.FULL}
              inputLabelTypes={[
                FormLabelStyleType.ROW,
                FormLabelStyleType.PURPLE,
              ]}
              arrowColor={COLORS.WHITE}
              buttonHeaderShow={FORM_CONSTANTS.buttons.showFull}
              isReset
            />
          )}
        </Container>
      </div>

      <Container className={styles.itemsWrapper}>Items</Container>

      <Ads
        header={dataAds.header}
        text={dataAds.content}
        buttonText={dataAds.button}
        buttonHref={dataAds.href}
      />
    </div>
  );
};
