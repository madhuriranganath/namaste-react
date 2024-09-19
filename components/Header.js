import { APP_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    let [btnName, setbtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={APP_LOGO}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className="log-btn" onClick={
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