import React, { useContext } from 'react';
import './Fooddisplay.css'; 
import { StoreContext } from '../../context/storecontext.jsx';
import Fooditem from '../Fooditem/Fooditem.jsx';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list
                    .filter((item) => category === "All" || item.category === category)
                    .map((item, index) => (
                        <Fooditem
                            key={index} 
                            id={item._id}
                            name={item.food_name}
                            price={item.price}
                            description={item.description} 
                            image={item.food_image}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default FoodDisplay;