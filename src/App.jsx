import React, { useState } from 'react'; // Added useState import from react
import { Routes, Route } from 'react-router-dom'; // Added Routes import
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './Pages/Home/home.jsx';
import Cart from './Pages/cart/cart.jsx';
import PlaceOrder from './Pages/placeorder/placeorder.jsx';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.JSX';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Navbar setShowLogin={setShowLogin} />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder/>} />
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;