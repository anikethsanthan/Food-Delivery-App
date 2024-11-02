import Restrocard ,{withPromotedLabel}from "./RestroCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { useState,useEffect} from "react";
import useOnlinestatus from "../utils/useOnlineStatus";



const Body =()=>{
    let [resList,setresList]=useState([ ]);
    let [searchText,setsearchText]=useState("");
    let [filteredRestro,setfilteredRestro]=useState([ ]);

    const RestauarntCardPromoted =withPromotedLabel(Restrocard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data= await fetch( 
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        
        );
        const json =await data.json();
        // console.log(json.data);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const restrosis=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setresList(restrosis);
        setfilteredRestro(restrosis); 
    }

    const onlineStatus=useOnlinestatus();

    if (onlineStatus===false){
        return(
            <h3 id="errorThrottle">
            <i className="fa-solid fa-triangle-exclamation"></i> It seems like you've lost your internet connection!!!
            <br></br>
            <i className="fa-solid fa-triangle-exclamation"></i> Please try again after some time!!!</h3>
        )
    }

    if (resList===0){
        return <Shimmer/>
    }

    return(
        <div className="body">
            <div className="searchbar">
            <input  id="imp" type="text" placeholder="search your fav food here" value ={searchText} onChange={(e)=>{
                setsearchText(e.target.value);

            }}/>
            <button id="srch" onClick={()=>{
                console.log(searchText);
              const filteredRes= resList.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())||res.info.cuisines.join(', ').toLowerCase().includes(searchText.toLowerCase()));
               setfilteredRestro(filteredRes);
               
            }}>Search</button>
            <button id="filter" onClick={()=>{
                const filtereddata=resList=resList.filter(
                    (res)=>res.info.avgRating>4
            );
            setfilteredRestro(filtereddata);
             console.log(resList);
            }}>Top-Rated Restuarants</button>
            </div>
            <div className="res-container">
                {
               filteredRestro.map((restuarant)=>(
                <Link className="Cardhref" key={restuarant.info.id} 
                to={"/restaurantMenu/"+restuarant.info.id} >
                     
                     {restuarant.info.aggregatedDiscountInfoV3?
                     (< RestauarntCardPromoted resData={restuarant}/>):
                     ( <Restrocard  resData={restuarant}/>)
                     }
                    
                    </Link>
               )) 
            }   
            </div>

        </div>

    );
};

export default Body;