import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);


    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="resDetails">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <div className="itemList">
                <ul>
                    {itemCards.map(
                        (items) => <li key={items.card.info.id}>
                            {items.card.info.name} -  {" Rs."} {items.card.info.defaultPrice / 100}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;