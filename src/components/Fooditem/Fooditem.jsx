import React, { useContext } from 'react';
import './Fooditem.css';
import { rating_star, remove_icon, add_icon } from '../../assets/asset';
import { StoreContext } from '../../context/StoreContext';


const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  
  // Debug logging
  console.log('Fooditem props:', { id, name, price, description, image });
  console.log('URL:', url);
  console.log('Full image URL:', url + "/uploads/" + image);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img 
          className="food-item-img" 
          src={url+"/uploads/"+image} 
          alt={name}
          onError={(e) => {
            console.error('Image failed to load:', e.target.src);
            e.target.style.display = 'none';
          }}
          onLoad={() => {
            console.log('Image loaded successfully:', url+"/uploads/"+image);
          }}
        />
        {!cartItems[id] ? (
          <img
            className="add-icon"
            onClick={() => addToCart(id)}
            src={add_icon}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              className="counter-btn"
              onClick={() => removeFromCart(id)}
              src={remove_icon}
              alt="Remove item"
            />
            <span className="counter-value">{cartItems[id]}</span>
            <img
              className="counter-btn add-btn"
              onClick={() => addToCart(id)}
              src={add_icon}
              alt="Add item"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={rating_star} alt="Rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;