import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';
import Wallet from '../Wallet/Wallet';
import Footer from '../Footer/Footer';

const MainRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element ={<Home />} />
        </Routes>
    </>
  )
}

export default MainRouter