import React, { useState, useEffect } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

function List({url}) {
  
  const [list,setlist] = useState([]);
  const fetchList =async () => {
    const  response =  await axios.get(`${url}/api/food/list`);
  
    if(response.data.success){
      setlist(response.data.data);

    }
    else
    {
      toast.error("Error")
    }
  }

  useEffect(()=>
    {fetchList()}
  , [])

 const removeFood = async (foodId) => {
  const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
  if(response.data.success){
    toast.success("Food removed successfully");
    await fetchList();
  } else {
    toast.error("Failed to remove food");
  }
}


  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-form title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>

        </div>
        {list.map((item,index)=>{
          return (
            <div key={index}  className="list-table-format">
              <img src={`${url}/uploads/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>x</p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default List
