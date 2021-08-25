import React, {useState} from 'react';

// use hook useState... it is predefined functional component
// setting props as state value

export default function StateFC(props){

    
    const  {uname, city}  = props; // destructuring // the name here and the one used while passing value from App must be the same
    
    //setting state attributes
    const [username,  setUserName]  = useState(uname);
    const [password,  setPassword]  = useState("admin2479");


    return(
        <div>
            <h1> Hi {uname} , You from {city}</h1>
            username:  { username} <br/>
            password  : {password}
            <br/>
           
        </div>
    )
}

StateFC.defaultProps = {
    uname:"guest",
    city : "Pune"
}