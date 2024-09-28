import { IMAGE_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality} = resData?.info;
    const {deliveryTime, lastMileTravelString} = resData?.info.sla;

    return (
        <div className="res-card w-[245px] m-4 bg-gray-100 p-3 rounded-lg h-[345px] relative hover:bg-gray-300 hover:shadow-2xl">
            <img className="res-logo rounded-lg w-full h-44 flex justify-center" alt="No image" src={IMAGE_LOGO+cloudinaryImageId} /> 
            <h3 className="my-2 font-bold text-lg">{name}</h3>
            <h4 className="text-sm flex justify-between">⭐️ {avgRating}<span className="font-semibold">*</span> <span className="font-bold">{deliveryTime} mins</span> <span className="font-semibold">*</span> <span className="text-slate-400 text-xs">{costForTwo}</span></h4>
            <h4 className="text-slate-500 text-sm overflow-hidden text-nowrap h-5">{cuisines.join(", ")}</h4>
            <h4 className="text-sm text-slate-500">📍 {locality}</h4>
            <h4 className="text-sm text-slate-500 absolute bottom-2 right-2">{lastMileTravelString}</h4>
        </div>
    );
}

export default RestaurantCard;