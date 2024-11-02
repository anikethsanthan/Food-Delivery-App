import React from "react";

class UserClass extends React.Component{
    constructor (props){
     super(props);
     this.state={
        userInfo:{
            name:"Dummy",
            location:"DUmmy",
            avatar_urlurl:"Dummy",
        }
        
     }
    }
    async componentDidMount(){
        const data= await fetch(" https://api.github.com/users/anikethsanthan");
        const json= await data.json();
        this.setState({
            userInfo:json,
        })
    }
    render(){
        const {name,avatar_url,location}=this?.state?.userInfo;
        return(
            <div className="about-box " >
                <div>
                <img id ="git-img"src={avatar_url}></img>
                </div>
                
            <div className="InfoCards">
            <div className="user-card"> 
            <h3>{name}</h3>
            <p>Location:{location}</p>
            <p>Crafting Digital Experience | Building modern interactive Web Applications</p>
            </div> 
            <div className="Ed-card">
            <h3>My Educational Background</h3>
            <p>I hold a B.tech degree in Computer Science from Sharda University,Greater Noida-India.</p>
            </div>
            </div> 
            <div className="Project-info">
            <h3>Project Information</h3>
            <p>I developed a dynamic frontend web application that utilizes Swiggy’s live API to fetch and display restaurant data. <br></br>
                <br></br>
                This project features interactive restaurant cards,
                 each showing essential details about a restaurant.
                  By clicking on a card, users are seamlessly redirected to a dedicated menu page for the selected restaurant. 
                  Throughout this project, I focused on creating a user-friendly interface and explored configurable,
                   data-driven UI components to enhance the overall user experience.
                    This hands-on project deepened my understanding of API integration,
                     responsive design, and dynamic content rendering in web development.</p>
            </div>

            </div>
        )
    }
}

export default UserClass;