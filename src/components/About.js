import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="about">
            <UserClass/>
        </div>

        )
    }
}




export default About;