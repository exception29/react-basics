import React from 'react';


clickHandler()
    alert("Button is clicked")
   


export default function EventHandlingFC(){

    //setting state variable usename 
    //useState intrenally calls setUserName and sets the state username as John
    const [username,  setUserName]  = useState("John");


   
    return(
        <div>
        uname : {this.state.uname};
        <button onClick ={this.clickHandler} > Click </button>
    </div>
    )
}



