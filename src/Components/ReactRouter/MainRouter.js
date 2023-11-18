import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Products from '../Products/Products';
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
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Products />} />
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