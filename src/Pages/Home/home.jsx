import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/header'
import ExploreMenu from '../../components/exploremenu/exploremenu'

const Home =() =>{
  const [category,setcategory] = useState("All");
return (
    <div className="home-container">
      <header />
      <ExploreMenu category={category} setcategory={setcategory} />
    </div>
  );
};

export default Home