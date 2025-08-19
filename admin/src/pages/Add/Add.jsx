import React, { useState, useRef } from 'react';
import './Add.css';
import { upload_area } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

function Add() {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad"
  });
  const fileInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({...prev, [name]: value}));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Check if all required fields are filled
    if (!image || !data.name || !data.price) {
      toast.error("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("price", Number(data.price));
    formdata.append("category", data.category);
    formdata.append("image", image);
    
    try {
      const response = await axios.post(`${url}/api/food/add`, formdata);
      if(response.data.success){
        setData({
          name: "",
          description: "",
          price: "",
          category: "salad"
        });
        setImage(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error adding food:", error);
      toast.error(error.response?.data?.message || "Failed to add food item");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandle}>
           <div className="add-img-upload flex-col">
            <p>Upload Image</p>
             <label htmlFor="image">
             <img 
               src={image ? URL.createObjectURL(image) : upload_area} 
               className="img-fluid" 
               alt="" 
             />
             </label>
             <input 
               ref={fileInputRef}
               onChange={handleImageChange}
               type="file" 
               id="image" 
               hidden 
               required 
             />
            </div> 
            <div className="add-product-name flex-col">
              <p>product name</p>
              <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type Here' required/>
            </div>
            <div className="add-product-description flex-col">
              <p>product description</p>
              <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write the here'></textarea>
            </div>
            <div className="add-category-parice">
              <div className="add-category flex-col">
                <p>product category</p>
                <select onChange={onChangeHandler} value={data.category} name="category">
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
                <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='$20' required/>
              </div>
            </div>
            <button type='submit' className='add-btc' disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'ADD'}
            </button>
        </form>
    </div>
  );
}

export default Add;