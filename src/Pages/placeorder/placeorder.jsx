import React from 'react'
import './placeorder.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';



function placeorder() {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className='titel'>Delivery Information</p>
        <div className="muli-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street'/>
         <div className="muli-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='State'/>
        </div>
         <div className="muli-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country'/>
        </div>
           <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
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
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button className="proceed-btn">PROCEED TO PAYMENT</button>
        </div>


      </div>
    </div>
  )
}

export default placeorder
