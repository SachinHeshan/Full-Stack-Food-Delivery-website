import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content-left">
        <img src="https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!sw800" alt="Food Delivery Logo" /> 
        <p>© 2024 Food Delivery. All rights reserved.</p>
        <div className="footer-social-icons">
          <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          <img src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png" alt="TikTok" />
        </div>
      </div>
      <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Delivery</li>
          <li>Blog</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+94 0721374907</li>
          <li>sachindelivery@gmail.com</li>
        </ul>
        <hr />
        <p className='footer-copyright'>copyright 2024 © sachin.com - All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer