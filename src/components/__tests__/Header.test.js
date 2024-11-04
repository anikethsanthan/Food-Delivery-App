import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from"../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


    it("should render header component with a login button",()=>{
       
        render (
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);
        //querying
        const button=screen.getByRole("button");
        //assertion
        expect(button).toBeInTheDocument();
    });

    it("should render header component with a Home button)",()=>{
       
        render (
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);
        //querying
        const Home=screen.getByText("Home");
        //assertion
        expect(Home).toBeInTheDocument();
    });

    it("should render header component with a Login Button that changes to Logout When clicked)",()=>{
       
        render (
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);

        //querying
        const loginButton=screen.getByRole("button",{name:"LOGIN"});

        fireEvent.click(loginButton);

        const logoutButton=screen.getByRole("button",{name:"LOGOUT"});
        
        //assertion
        expect(logoutButton).toBeInTheDocument();
    })

