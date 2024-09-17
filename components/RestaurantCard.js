import { IMAGE_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const {deliveryTime, lastMileTravelString} = resData?.info.sla;

    
    return (
        <div className="res-card">
            <img className="res-logo" alt="No image" src={IMAGE_LOGO+cloudinaryImageId} /> 
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
            <h4>{lastMileTravelString}</h4>
        </div>
    );
}

export default RestaurantCard;