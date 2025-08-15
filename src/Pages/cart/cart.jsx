import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  // Calculate subtotal
  const subtotal = food_list.reduce((total, item) => {
    if (cartItems[item._id] > 0) {
      return total + item.price * cartItems[item._id];
    }
    return total;
  }, 0);

  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

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
                <img src={item.food_image} alt={item.food_name} />
                <p className="food-name">{item.food_name}</p>
                <p className="price">${item.price.toFixed(2)}</p>
                <p className="quantity">{cartItems[item._id]}</p>
                <p className="item-total">${(item.price * cartItems[item._id]).toFixed(2)}</p>
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
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button className="proceed-btn">PROCEED TO CHECKOUT</button>
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