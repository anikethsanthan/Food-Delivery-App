import { useState } from "react";
 let [resList,setresList]=useState([

    {  
        resName:"Gourmet Ice Cream Cakes by Baskin Robbins",
        cuisine:"Ice Cream Cakes,Desserts",
        rating:"5",
        Id:1234,
        cloudinaryImageID:"d679c532ca07a6f3fd6d89d603861412"
    },
    
    {   resName:"Dominos, Civil-lines",
        cuisine:"Fast-Food, Puffs",
        rating:"4",
        Id:1235,
        cloudinaryImageID:"80355befb12f52c22eb75c6f865ca328"
    },
    {   resName:"Pizza-Hut, The king of Pizzas",
        cuisine:"Pizza, Puffs and what not",
        rating:"3",
        Id:1236,
        cloudinaryImageID:"n7wbtvlifwbw5y4a7rrv"
    },
    {   resName:"Belgian Waffle",
        cuisine:"Waffle, Desserts, Ice-cream",
        rating:"3.5",
        Id:1237,
        cloudinaryImageID:"5116a385bac0548e06c33c08350fbf11"
    },
    {   resName:"Raja Dhaba",
        cuisine:"Thali &North-Indian",
        rating:"4.5",
        Id:1238,
        cloudinaryImageID:"rvxp5xbniat84r6efku2"
    },
    {
        resName: "Bakery World",
        cloudinaryImageID: "mt2aggiscfl3yviatwng",
        cuisine:" Bakery, IceCream, Snacks, Beverages",
        rating:"2.3",
        Id:1249,
    }, 
    {
        resName: "Adil Hotel",
        cloudinaryImageID: "gp1ityra6utvzqn6ghnv",
        cuisine:"North-Indian, Biriyani, Tandoor",
        rating:"3.5",
        Id:1259,
    },
    {
        Id: 321517,
        resName: "FOOD PLANET RESTAURANT",
        cloudinaryImageID: "ykboewqeoxnne8fgrnui",
        cuisine: "Indian, Chinese, Tandoor, Thalis, Fast Food",
        rating:4.2
    },
    {
        Id: "311806",
        resName: "Burger King",
        city: "22",
        area: "Anand Vihar Colony",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageID: "iqh7ew5ldfgvpd5dpz60",
        cuisine: ["Burgers", "American"],
        rating:3.5

    }

]);

export default resList;