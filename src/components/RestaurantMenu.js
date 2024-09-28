import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    console.log(resInfo);

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="resDetails w-[50%] m-auto text-center">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="text-xl text-slate-500">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <div className="itemList flex justify-center">
                <ul>
                    {itemCards.map(
                        (items) => <li key={items.card.info.id} className="shadow-md p-4 m-x-3 w-96">
                            {items.card.info.name} -  {" Rs."} {items.card.info.defaultPrice / 100| items.card.info.price / 100}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;