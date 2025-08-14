import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import { BsBootstrap } from 'react-icons/bs'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home.jsx'
import Cart from './Pages/cart/cart.jsx'
import PlaceOrder from './Pages/placeorder/placeorder.jsx'
import Header from './components/Header/header.jsx'  // Changed to capital H
import Footer from './components/Footer/Footer.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Header />  {/* Added Header component here */}
      
      <Routes>
        <Route path="/" element={<Home />} />  {/* Changed /home to / for main route */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
     
      <Footer />  {/* Added Footer component here */}
    </>
  )
}

export default App