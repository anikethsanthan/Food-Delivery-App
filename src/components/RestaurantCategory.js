import ItemList from "./ItemList";
const RestaurantCategory=({data , showItems, setShowIndex})=>{

    const handleClick=(()=>{
        setShowIndex();
        
    })
    return(
        <div>
            <div className="menuItems-heading" onClick={handleClick}>
                {data.title}({data.itemCards.length})
                <i className="fa-solid fa-chevron-down"></i>
                
                </div>
                
               { showItems&& <ItemList items={data.itemCards}/>}
            
        </div>
    )
}
export default RestaurantCategory;