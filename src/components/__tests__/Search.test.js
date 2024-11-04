import { render } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom"



it ("should render body with search button",()=>{
    render (<Body />)
})