import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
        // return <Shimmer />;
    // }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus===false) {
        return <h1>Looks like you're offile. Please check your internet connection.</h1>
    }

    console.log(listOfRestaurant);

    // return <Shimmer />;
    
    // Ternary operator for conditional rendering
    return listOfRestaurant.length === 0 ? <Shimmer />: (
        <div className="body">
            <div className="filter flex">
                <div className="search-container m-4">
                    <input className="search-input border border-solid border-black mr-4" onChange={
                        (e) => {
                            setsearchText(e.target.value);

                        }
                    } value={searchText}/>
                    <button className="search-btn px-3 py-1 bg-green-200 rounded-md" onClick={
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
                <div className="flex items-center">
                    <button className="filter-btn mr-4 px-3 py-1 bg-red-200 rounded-md" onClick={() => 
                        {
                            const restaurantsData = listOfRestaurant.filter(
                                (res) => res.info.avgRating > 4
                            );
                            //console.log(listOfRestaurant)
                            setfilteredRestaurant(restaurantsData);
                        }
                    }>Top Rated Restaurant</button>
                    <button className="lessTimeDeliveryRes-btn mr-4 px-3 py-1 bg-red-200 rounded-md"
                    onClick={
                        () => {
                            const lessTimeDeliveryRestaurant = listOfRestaurant.filter(
                                (res) => res.info.sla.deliveryTime < 25
                            )
                            setfilteredRestaurant(lessTimeDeliveryRestaurant)
                        }
                        
                    }
                    >Less Time Delivery Restaurant</button>
                </div>
                
             </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id} className="resLink"><RestaurantCard  resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;