import { useEffect, useState } from "react";
import {MENU_URL} from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(
        () => {
            fetchData();
        }, []
    );

    const fetchData = async () => {
        const itemList = await fetch(MENU_URL + resId);

        const jsonData = await itemList.json();

        setresInfo(jsonData.data)

    }

    return resInfo;
}

export default useRestaurantMenu;