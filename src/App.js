import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainRouter from './Components/ReactRouter/MainRouter';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Wishlist from './Components/Wishlist/Wishlist';
import Cart from './Components/Cart/Cart';
import Orders from './Components/Orders/Orders';
import Wallet from './Components/Wallet/Wallet';
import Footer from './Components/Footer/Footer';

function App() {
  return (
      <div className="App">
        <MainRouter />
      </div>
  );
}

export default App;