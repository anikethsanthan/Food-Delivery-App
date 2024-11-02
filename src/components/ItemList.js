import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../utils/cartSlice";



const ItemList=({items})=>{
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    }
    const handleDelItem=(item)=>{
        dispatch(removeItem(item));
    }
    return (
        <div className="menuItemsList" >
       {items.map((item)=>(<div key={item.card.info.id}>
        <div className="foodContainerBox food-items">
        <div id="menuH">{item.card.info.name}
            <br></br>
           <p className="price">Price-Rs.{item.card.info.price/100||item.card.info.defaultPrice/100}</p> 

            <p className= " desc"> {item.card.info.description}</p>
            </div>
        <div key={item.card.info.id}>
        <img className=" menu-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId||null}></img>
        <button className="add-btn" onClick={()=>handleAddItem(item)}>
            Add+
            </button>
            <button className="add-btn" onClick={()=>handleDelItem(item)}>
            <i className="fa-solid fa-trash"></i>
            </button>
        </div>
        
       
        </div>
        
       </div>
       
                        
                    ))}
        </div>
    );

}
export default ItemList;