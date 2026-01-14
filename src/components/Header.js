import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import {useSelector} from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus =useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  // subscribing to the store using a Selector 
  const cartItems = useSelector((store) => store.cart.items);

  console.log("Cart Items:", cartItems);


  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is [btnNameReact] = > called everytime btnNameReact is updated

  useEffect(() => {
    console.log("useEffect Called");
  },[btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:to-blue-50">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✔" : "📛" }</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/home">Home</Link></li>
          <li className="px-4"><Link to="/about">About-Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact-Us</Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length} Items)</Link></li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
