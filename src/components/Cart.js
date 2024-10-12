import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { removeItems } from "../utils/cartSlice";

const Cart = () => {

    const items = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleRemoveItems = () => {
        dispatch(removeItems());
    }

    return <div className="text-center w-6/12 m-auto">
        <h1 className="font-bold text-2xl mt-2">Cart</h1> 
        <button className="bg-black text-white p-1 m-2 rounded-lg" onClick={() => handleRemoveItems()}>Clear Cart</button>
        <CategoryItems items={items}/>
    </div>
};

export default Cart;