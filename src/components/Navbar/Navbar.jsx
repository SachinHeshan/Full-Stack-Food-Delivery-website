import React, { useContext, useState, useRef, useEffect } from 'react';
import './navbar.css';
import { FaSearch, FaUser, FaSignOutAlt, FaClipboardList } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  
  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const logout = () => {
    // Clear all storage
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear token state
    setToken("");
    
    // Close dropdown
    setShowDropdown(false);
    
    // Navigate and reload
    navigate("/");
    window.location.reload();
  }

  const handleProfileClick = () => {
    if (token) {
      setShowDropdown(!showDropdown);
    } else {
      setShowLogin(true);
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/"></Link>
          <img src="https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!sw800" alt="Food Delivery Logo" />
          <span>FoodExpress</span>
        </div>
        
        <div className="navbar-links">
          <Link 
            to="/" 
            className={activeMenu === "home" ? "navbar-link active" : "navbar-link"} 
            onClick={() => setActiveMenu("home")}
          >
            Home
          </Link>
          <a 
            href='#explore-menu' 
            className={activeMenu === "menu" ? "navbar-link active" : "navbar-link"}
            onClick={() => setActiveMenu("menu")}
          >
            Menu
          </a>
          <a 
            href='#app-download'
            className={activeMenu === "mobile-app" ? "navbar-link active" : "navbar-link"}
            onClick={() => setActiveMenu("mobile-app")}
          >
            Mobile App
          </a>
          <a 
            href='#footer'
            className={activeMenu === "contact" ? "navbar-link active" : "navbar-link"}
            onClick={() => setActiveMenu("contact")}
          >
            Contact
          </a>
        </div>
        
        <div className="navbar-actions">
          <Link to="/cart">
            <button className="navbar-cart">
              <span className="cart-icon">
                <img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="Cart Icon" />
                {getTotalCartAmount() > 0 && (
                  <div className="cart-count">{getTotalCartAmount()}</div>
                )}
              </span>
            </button>
          </Link>
          <button className="navbar-search">
            <FaSearch />
          </button>
          
          <div className="profile-container" ref={dropdownRef}>
            <button 
              className="navbar-signin" 
              onClick={handleProfileClick}
            >
              <FaUser />
              <span>{token ? "Profile" : "Sign In"}</span>
            </button>
            
            {token && showDropdown && (
              <div className="profile-dropdown">
                <Link 
                  to="/my-orders" 
                  className="dropdown-item"
                  onClick={() => setShowDropdown(false)}
                >
                  <FaClipboardList className="dropdown-icon" />
                  <span>My Orders</span>
                </Link>
                <button className="dropdown-item" onClick={logout}>
                  <FaSignOutAlt className="dropdown-icon" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;