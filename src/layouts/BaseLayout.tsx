import React, { FC } from 'react';

import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

export const BaseLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
