import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const totalPrice= cartItems.reduce((sum,item)=>sum+item.card.info.price||item.card.info.defaultPrice,0);
    console.log(cartItems);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return <div className="cart-bom" id="cart">
        <div >
        <h1 className="CartHead"> My Cart</h1>
        <div className="CartItemList"><ItemList items={cartItems}/></div>
        {cartItems.length===0&& <p className="Ed-card cartP">
            Oops!! <br></br>
            Your cart seems to be empty. Add items in your cart to proceed!!
            </p>}
        <button id="clear" onClick={handleClearCart}>Clear Cart</button>
        </div>

        {/* second div */}
        <div className="price-bek" id="cart-Summary">
        {cartItems.length>0&&(
            <h1 className="CartHead-SUmmary">Cart Summary</h1>
        )}
        {cartItems.map((item,index)=>(
            <div key={index}>
                <ul>
                    <li>
                    <p id="nameIt">{item.card.info.name}</p>
                    <p>Price:{item.card.info.price/100||item.card.info.defaultPrice/100}</p>

                    </li>
                </ul>
                
                <div className="Line"></div>
            </div>
        ))}
         {cartItems.length>0&&(
            <p className="TotalPrice">Total Price :Rs.{totalPrice/100} </p>
        )}
         </div>
            
        
        </div>
}
export default Cart;