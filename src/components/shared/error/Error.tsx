import React, { FC } from 'react';

interface ErrorProps {
  error?: string;
}

/*todo: добавить компонент для обработки ошибок*/
export const Error: FC<ErrorProps> = ({
  error = 'При обработке данных возникли ошибки',
}) => {
  return <h1>{error}</h1>;
};
