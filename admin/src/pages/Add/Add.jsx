import React, { useState, useRef } from 'react';
import './Add.css';
import { upload_area } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

function Add({url}) {
  
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad"
  });
  const fileInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Allowed image types and maximum file size (5MB)
  const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({...prev, [name]: value}));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error('Please select a valid image file (JPEG, PNG, GIF, WebP)');
        e.target.value = ''; // Reset file input
        setImage(null);
        return;
      }
      
      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error('File size too large. Maximum size is 5MB');
        e.target.value = ''; // Reset file input
        setImage(null);
        return;
      }
      
      setImage(file);
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
      const response = await axios.post(`${url}/api/food/add`, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 second timeout
        onUploadProgress: (progressEvent) => {
          // Optional: Add progress indicator
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(`Upload progress: ${percentCompleted}%`);
        }
      });
      
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
      
      // Enhanced error handling
      if (error.code === 'ECONNABORTED') {
        toast.error("Request timeout. Please try again.");
      } else if (error.response) {
        // Server responded with error status
        if (error.response.status === 413) {
          toast.error("File too large. Please choose a smaller image.");
        } else if (error.response.status === 415) {
          toast.error("Unsupported file type.");
        } else {
          toast.error(error.response.data?.message || "Failed to add food item");
        }
      } else if (error.request) {
        // Network error
        toast.error("Network error. Please check your connection.");
      } else {
        // Other errors
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to compress image (client-side compression)
  const compressImage = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 600;
          
          let width = img.width;
          let height = img.height;
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob(
            (blob) => {
              resolve(new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              }));
            },
            'image/jpeg',
            0.7 // Quality: 0.7 (70%)
          );
        };
      };
    });
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
               accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
             />
             <p className="file-info">
               Supported formats: JPEG, PNG, GIF, WebP | Max size: 5MB
             </p>
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
                <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='$20' required min="0" step="0.01"/>
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