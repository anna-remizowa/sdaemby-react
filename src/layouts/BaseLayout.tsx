import React, { FC } from 'react';

import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

interface BaseLayoutProps {
  children: React.ReactChild | React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
