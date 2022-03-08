import { FC, useContext } from 'react';
import { TabsCustom } from 'components/shared/tabs/TabsCustom';
import { Filter } from 'components/shared/filter/Filter';
import { HomeContext } from 'components/pages/home/Home';

/*todo: заголовки табов явно должны приходить с сервера, что тогда делать с контентом табов?*/
export const HomeTabs: FC = () => {
  const dataHome = useContext(HomeContext);
  return (
    <TabsCustom
      tabs={[
        {
          title: 'Квартиры на сутки',
          content: dataHome.filters ? (
            <Filter filter={dataHome.filters} />
          ) : (
            <></>
          ),
        },
        {
          title: 'Квартиры на сутки',
          content: <p>Коттеджи и усадьбы</p>,
        },
        {
          title: 'Бани и сауны',
          content: <p>Бани и сауны</p>,
        },
        {
          title: 'Авто напрокат',
          content: <p>Авто напрокат</p>,
        },
      ]}
    />
  );
};
