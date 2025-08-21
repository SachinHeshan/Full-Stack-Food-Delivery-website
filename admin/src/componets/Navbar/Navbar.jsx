import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <img 
        className="logo" 
        src="https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!sw800" 
        alt="FoodExpress Logo" 
      />
      <img 
        className="profile-icon" 
        src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="  // Update with your profile image path
        alt="User Profile" 
      />
    </div>
  )
}

export default Navbar;