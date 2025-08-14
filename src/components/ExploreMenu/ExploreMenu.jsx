import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/asset.js';  

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore Our Menu</h1>
            <p className="explore-menu-text">
                Browse through our diverse selection of delicious dishes crafted with 
                the finest ingredients and culinary expertise.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div 
                        key={index} 
                        className={`explore-menu-list-item ${category === item.category ? "active":""}`}
                        onClick={() => setCategory(prev => prev === item.category ? "All": item.category)}
                    >
                        <img
                            className="menu-item-image"
                            src={item.menu_image} 
                            alt={item.category} 
                            loading="lazy"
                        />
                        <h3>{item.category}</h3>
                    </div>
                ))}
            </div>
            <hr className="menu-divider" />
        </div>
    );
};

export default ExploreMenu;