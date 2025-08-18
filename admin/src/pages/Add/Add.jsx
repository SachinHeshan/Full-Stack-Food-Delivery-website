import React from 'react';
import './Add.css';

function Add() {
  return (
    <div className='add'>
        <form className='flex-col'>
           <div className="add-img-upload flex-col">
            <p>Upload Image</p>
             <label htmlFor="image">
             <img src="" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
               </label>
               <input type="file" id="image" hidden required />
            
            </div> 
            <div className="add-product-name flex-col">
              <p>product name</p>
              <input type="text" name=""  placeholder='Type Here'/>
            </div>
            <div className="add-product-description flex-col">
              <p>product description</p>
              <textarea name="description"  rows="6" placeholder='write the here'></textarea>

            </div>
            <div className="add-category-parice">
              <div className="add-category flex-col">
                <p>product category</p>
                
                <select name="category">
                <option value="salad">salad</option>
                <option value="rolls">rolls</option>
                <option value="desert">desert</option>
                <option value="sandwich">sandwich</option>
                <option value="cake">cake</option>
                <option value="pure veg">pure veg</option>
                <option value="pasta">pasta</option>
                <option value="noodles">noodles</option>
                </select>

              </div>
              <div className="add-price flex-col">
                <p>product price</p>
                <input type="number"  name='price' placeholder='$20'/>
              </div>

            </div>
            <button type='submit' className='add-btc'>ADD</button>
        </form>
    </div>
  )
}

export default Add;