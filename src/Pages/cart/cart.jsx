import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                <img 
                  src={`${url}/uploads/${item.image}`} 
                  alt={item.name} 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/50?text=Image';
                  }}
                />
                <p className="food-name">{item.name}</p>
                <p className="price">${item.price}</p>
                <p className="quantity">{cartItems[item._id]}</p>
                <p className="item-total">${item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className="remove-item">×</p>
              </div>
            )
          }
          return null;
        })}
      </div>
      
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="totals-container">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className="proceed-btn">
            PROCEED TO CHECKOUT
          </button>
        </div>
        
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-input-container">
            <input type="text" placeholder='promo code' />
            <button className="promo-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;