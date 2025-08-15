import React, { useState } from 'react';
import './LoginPopup.css';
import { FaTimes } from 'react-icons/fa';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrentState] = useState("login");

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        <div className="login-popup-header">
          <button 
            className="close-btn" 
            onClick={() => setShowLogin(false)}
          >
            <FaTimes />
          </button>
          <h2>{currState === "login" ? "Login " : "Create Account"}</h2>
        </div>

        <form className="login-form">
          {currState === "sign up" && (
            <div className="form-group">
              <label htmlFor="name">User Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your name" 
                required 
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <button type="submit" className="submit-btn">
            {currState === "sign up" ? "Create Account" : "Login"}
          </button>

          <div className="login-popup-condition">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy.</label>
          </div>

          <div className="toggle-auth-state">
            {currState === "login" ? (
              <p>Don't have an account? <span onClick={() => setCurrentState("sign up")}>Sign up</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setCurrentState("login")}>Login</span></p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;