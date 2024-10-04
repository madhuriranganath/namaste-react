import { useState } from "react";
import CategoryItems from "./CategoryItems";

const Category = ({data, showItems, setShowIndex, index}) => {
    // console.log(showItems);
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // setShowItems(!showItems);
        console.log(typeof index);
        showItems === true ? setShowIndex(null): setShowIndex(index);

        // console.log(showItems);
        
    }

    return (
        <div className="itemList justify-center ">
            
            <div key={data.title} className="shadow-md p-4 m-x-3 w-full rounded-lg" >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
                    {showItems?<span>⬇️</span>:<span>⬆️</span>}
                </div>
                {(showItems) && <CategoryItems items = {data.itemCards}/>}
            </div>
        </div>
    );
};

export default Category;