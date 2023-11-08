import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import ProductDetail from '../ProductDetail/ProductDetail';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';
import Wallet from '../Wallet/Wallet';
import Error from '../Error/Error';

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/productDetail' element={<ProductDetail />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default MainRouter;