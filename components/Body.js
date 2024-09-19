import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import {resObj} from "../utils/mockData";

const Body = () => {

    // const [listOfRestaurant, setListOfRestaurant] = useState(resObj);
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("");

    // Whenever the state variable update, react triggers a reconcilation cycle (re-renders the component)
    console.log("body rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.2958104&lng=76.6393805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();

        // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        // optional chaining
        setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditional rendering - rendering based on the codition
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer />;
    // }
    
    // Ternary operator for conditional rendering
    return listOfRestaurant.length === 0 ? <Shimmer />: (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input className="search-input" onChange={
                        (e) => {
                            setsearchText(e.target.value);

                        }
                    } value={searchText}/>
                    <button className="search-btn" onClick={
                        () => {
                            // Filter the restaurant cards and update the UI
                            // searchText
                            console.log(searchText);
                            
                            const searchedData = listOfRestaurant.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setfilteredRestaurant(searchedData);
                        }
                    }>Search</button>
                </div>
           
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
             </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
}

export default Body;