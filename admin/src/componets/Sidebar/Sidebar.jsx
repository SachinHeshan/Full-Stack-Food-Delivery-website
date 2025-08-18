import React from 'react';
import './sidebar.css';
import { FiPlus, FiList, FiShoppingBag, FiUsers, FiSettings } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      
      <div className="sidebar-menu">
        <NavLink to="/add" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <FiPlus className="menu-icon" />
          <span>Add Items</span>
        </NavLink>
        
        <NavLink to="/list" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <FiList className="menu-icon" />
          <span>List Items</span>
        </NavLink>
        
        <NavLink to="/orders" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <FiShoppingBag className="menu-icon" />
          <span>Orders</span>
          <span className="badge">12</span>
        </NavLink>
        
        <NavLink to="/customers" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <FiUsers className="menu-icon" />
          <span>Customers</span>
        </NavLink>
        
        <NavLink to="/settings" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <FiSettings className="menu-icon" />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;