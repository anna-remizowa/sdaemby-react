import React, { FC } from 'react';

import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
