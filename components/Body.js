import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import {resObj} from "../utils/mockData";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resObj);
    
    return (
        <div className="body">
            <button className="filter-btn" onClick={() => 
                {
                    const restaurantsData = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    //console.log(listOfRestaurant)
                    setListOfRestaurant(restaurantsData);
                }
            }>Top Rated Restaurant</button>
            <button className="lessTimeDeliveryRes-btn"
            onClick={
                () => {
                    const lessTimeDeliveryRestaurant = listOfRestaurant.filter(
                        (res) => res.info.sla.deliveryTime < 20
                    )
                    setListOfRestaurant(lessTimeDeliveryRestaurant)
                }
                
            }
            >Less Time Delivery Restaurant</button>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
}

export default Body;