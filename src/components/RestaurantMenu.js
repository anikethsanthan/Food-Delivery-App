import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu =()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const[showIndex,setShowIndex]=useState(0);
    if (resInfo===null){
        return <Shimmer/>
    }
     const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     const {name,avgRating,costForTwoMessage,areaName}=resInfo?.cards[2]?.card?.card?.info;

    const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        c=> c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log("Categories is-",categories);


    return(
       
        <div className="restroInfo">
            <h1 className="ResHead">{name}</h1>
            <p className="Iter">{avgRating}<i id="star"className="fa-regular fa-star"></i>, Area Name-{areaName}</p>
            <p className="Iter">{costForTwoMessage}</p>
                <div className="menuItems">
                {categories.map((category,index)=>
                    (<RestaurantCategory 
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                        showItems={index==showIndex?true:false}
                        setShowIndex={()=>setShowIndex(index)}
                        />
                    ))}


                <div>  
                </div>
                
            </div>
        </div>

    )
}
export default RestaurantMenu;