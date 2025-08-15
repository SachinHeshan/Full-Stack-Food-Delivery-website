import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/Fooddisplay'
import AppDownload from '../../components/AppDownload/AppDownload'


const Home =() =>{
  const [category,setcategory] = useState("All");
return (
    <div className="home-container">
      <header />
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
      </div>
  )
}

export default Home