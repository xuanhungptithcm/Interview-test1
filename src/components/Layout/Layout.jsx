import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// components
import Header from 'components/Header';
import Footer from 'components/Footer';
import { createContext } from 'react';
import { useContext } from 'react';
import { useLayoutEffect } from 'react';
import useQueryString from 'hooks/useQueryString';

export const HomeContext = createContext();

function Layout() {
  // React.useLayoutEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }, [location]);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export const useHomeContext = () => useContext(HomeContext);
export default Layout;
