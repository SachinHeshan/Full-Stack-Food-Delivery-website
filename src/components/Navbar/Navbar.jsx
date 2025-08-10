import React, { useState } from 'react';
import './navbar.css';
import { FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [cartItems, setCartItems] = useState(3); // Example cart item count

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!sw800" alt="Food Delivery Logo" />
          <span>FoodExpress</span>
        </div>
        
        <div className="navbar-links">
          <a 
            href="/" 
            className={activeMenu === "home" ? "navbar-link active" : "navbar-link"}
            onClick={() => setActiveMenu("home")}
          >
            Home
          </a>
          <a 
            href="/menu" 
            className={activeMenu === "menu" ? "navbar-link active" : "navbar-link"}
            onClick={() => setActiveMenu("menu")}
          >
            Menu
          </a>
          <a 
            href="/app" 
            className={activeMenu === "mobile-app" ? "navbar-link active" : "navbar-link"}
            onClick={() => setActiveMenu("mobile-app")}
          >
            Mobile App
          </a>
          <a 
            href="/contact" 
            className={activeMenu === "contact" ? "navbar-link active" : "navbar-link"}
            onClick={() => setActiveMenu("contact")}
          >
            Contact
          </a>
        </div>
        
        <div className="navbar-actions">
          <button className="navbar-cart">
            <span className="cart-icon">
              <img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="Cart Icon" />
            </span>
          </button>
          <button className="navbar-search">
            <FaSearch />
          </button>
          <button className="navbar-signin">
            <FaUser />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;