import { useDispatch } from "react-redux";
import { IMAGE_LOGO } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const CategoryItems = ({items}) => {
    // console.log(items)

    const dispatch = useDispatch();
    const handleItemAdd = (itemDetails) => {
        console.log(itemDetails)
        dispatch(addItems(itemDetails));
    };

    return (
        <div>
            {items.map(
                (itemDetails) => (
                    <div key={itemDetails?.card?.info?.id} className="py-3 my-2 border-b-2 text-left">
                        <div className="flex justify-between">
                            <div className="w-10/12">
                                <span>{ itemDetails?.card?.info?.name}</span> - <span>₹ { itemDetails?.card?.info?.price/100 | itemDetails?.card?.info?.defaultPrice/100}</span>
                                <p className="text-slate-500 text-xs">{itemDetails?.card?.info?.description}</p>
                            </div>
                            <div className="w-[150px] h-auto">
                                {(itemDetails?.card?.info?.imageId)?<div className="absolute "><button className="bg-white rounded-lg shadow-md px-1" onClick={() => handleItemAdd(itemDetails)}>Add +</button></div>:""}
                                {(itemDetails?.card?.info?.imageId)?<img className="" src={IMAGE_LOGO + itemDetails?.card?.info?.imageId} />:""}
                                
                            </div>
                        </div>
                    </div>
                    
                )
            )}
        </div>
    );
};

export default CategoryItems;
