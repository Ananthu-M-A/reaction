import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import MainRouter from '../ReactRouter/MainRouter';

const Layout = (  ) => {
  return (
    <div>
      <NavBar />
      <MainRouter />
      <Footer />
    </div>
  );
};

export default Layout;