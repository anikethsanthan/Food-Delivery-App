import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error  from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import{useState,useEffect} from "react";
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


//Main app
const AppLayout=()=>{
const [userName,setUserName]=useState();
    useEffect(()=>{
        const data= {
            name:"Aniketh Santhan"
        }
        setUserName(data.name);
    },[]);

    return (
        <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="App">  
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider> 
    </Provider> 
);
};

const appRouter =createBrowserRouter([
    {   
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/restaurantMenu/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            }
        ]
    },
   
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)