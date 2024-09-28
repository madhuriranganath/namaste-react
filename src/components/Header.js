import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    let [btnName, setbtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header flex justify-between border border-solid border-black m-1 shadow-md bg-pink-50">
            <div className="logo-container ">
                <img className="logo w-36" src={APP_LOGO}/>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex text-lg mr-4">
                    <li className="pr-4">Online Status:  {onlineStatus === false ? "🔴" : "🟢"} </li>
                    <li className="pr-4"><Link to="/">Home</Link></li>
                    <li className="pr-4"><Link to="/about">About Us</Link></li>
                    <li className="pr-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="pr-4">Cart</li>
                    <li className="pr-4"><Link to="/grocery">Grocery</Link></li>
                    <li><button className="log-btn px-3 py-1 bg-green-200 rounded-md" onClick={
                        () => {
                            (btnName === "Login") ? setbtnName("Logout") : setbtnName("Login");
                        }
                    }>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};

//Example to show we can use both default export and named export in the same file
//export const TEST = 100;

export default Header;