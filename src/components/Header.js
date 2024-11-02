import {useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header =()=>{
    const onlineStatus=useOnlinestatus();
    const {loggedInUser}=useContext(UserContext);

    const[btnNameR,setBtnNameR]=useState("LOGIN");
    const cartItems=useSelector((store)=>store.cart.items);
    return(
        <div className="header">
        <div className="logo">
        <img  className="logoIt w-44 h-28" src="https://r2.erweima.ai/imgcompressed/compressed_32e7d3a8b7551aa9f2b3f2e7406646df.webp"  />
        </div>
        <div className="navItems">
            <p ><Link to="/" className="Links" >Home</Link></p>
            <p><Link to="/about" className="Links">About Us</Link></p>
            <p><Link to="/Cart" className="Links">
            <i className="fa-solid fa-cart-shopping">
                ( {cartItems.length} )</i>
                </Link>
                </p>
            <button className="login-btn"onClick={()=>{
                btnNameR==="LOGIN"
                ? setBtnNameR("LOGOUT")
                : setBtnNameR("LOGIN")}}>{btnNameR}</button>
            {/* <p id="username"><i className="fa-regular fa-user"></i> {" "} {loggedInUser}</p>     */}
           
        </div>
        </div>
    );
};
export default Header;