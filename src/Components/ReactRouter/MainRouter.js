import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';
import Wallet from '../Wallet/Wallet';

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/wallet' element={<Wallet />} />
    </Routes>
  );
};

export default MainRouter;