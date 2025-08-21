import React, { useState } from 'react';
import './LoginPopup.css';
import { FaTimes } from 'react-icons/fa';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {

  const {url,setToken} = React.useContext(StoreContext)

  const [currState, setCurrentState] = useState("login");
  const [data,setdata] = useState({
    name:"",
    email:"",
    password:"",

  })
   const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setdata(data=>({...data,[name]:value}))
   }

   const onLogin = async (event) => {
     event.preventDefault()
     let newUrl = url;
     if(currState==="login") {
      newUrl += "/api/user/login"

     }
     else{
      newUrl += "/api/user/register"
     }

    const response = await axios.post(newUrl,data);
    

    if (response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)

    }
    else{
      alert(response.data.message)
    }
   }

  

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

        <form onSubmit={onLogin} className="login-form">
          {currState === "sign up" && (
            <div className="form-group">
              <label htmlFor="name">User Name</label>
              <input 
                 name="name" onChange={onChangeHandler} value={data.name}
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
             name='email' onChange={onChangeHandler} value={data.email}
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              name='password' onChange={onChangeHandler} value={data.password}
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <button  type="submit" className="submit-btn">
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