import { CDN_URL } from "./utiles/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    
    const cartItems = useSelector((store)=> store.cart.items);
    //console.log(cartItems);

    return (
        <div className="flex space-x-4 justify-between shadow-lg w-full ">
            <div className="logo-container">
                <img alt="" className="w-32" src={CDN_URL}/>
            </div>
            <div className="nav-item">
                <ul className="flex p-4 m-4 content-center text-lg ">
                    <li className="px-7 hover:text-orange-500 font-medium text-gray-600"><Link className="nav-link" to="/about">🍕 Foodie Faster</Link></li>
                    <li className="px-7 hover:text-orange-500 font-medium text-gray-600"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="px-7 hover:text-orange-500 font-medium text-gray-600"><Link className="nav-link" to="/help"> Help</Link> </li>
                    <li className="px-7 hover:text-orange-500 font-medium text-gray-600"><Link className="nav-link" to="/offers">Offers</Link></li>
                    <li className="px-7 hover:text-green-500 font-medium text-gray-600"><Link className="nav-link" to="/cart">🛒Cart [{cartItems.length}]</Link> </li>
                    <button className="Login"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login");
                        }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;