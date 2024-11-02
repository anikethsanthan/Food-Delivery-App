
const Restrocard=(props)=>{
    const {resData}=props;
    const{cloudinaryImageId,name,cuisines,isOpen,avgRating,sla,aggregatedDiscountInfoV3}=resData?.info;
    console.log(resData);
    return(
        <div className="res-card">
            <img id="food-img"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
                +cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{avgRating} <i id ="star"className="fa-regular fa-star"></i></p>
            <p>{cuisines.join(', ')}</p>
            <p>{isOpen}</p>
            <p>Delivering in-{sla.deliveryTime}-mins</p>
            {/* <p>Discount:{aggregatedDiscountInfoV3?.header&&aggregatedDiscountInfoV3?.subHeader}</p> */}
          
        </div>

    );
};


export const withPromotedLabel =(Restrocard)=>{
   
    return(props)=>{
        const{aggregatedDiscountInfoV3}=props.resData.info
        return(
        <div>
            {aggregatedDiscountInfoV3&& (
                <label className="Discount">
                   {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
                    </label>
            )}
            

            <Restrocard {...props}/>
        </div>
        );
    };
};
export default Restrocard;