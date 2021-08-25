import React from 'react';

//props is the variable/argument u can use any name
// props is array and can take all passed values
export default function PropsFC(properties){

    //destructuring Props
    const  {uname, city, children}  = properties; //directly use the props name now no need of properties.

    return(
         <div>
           <p>Hello {properties.uname}. You are from {properties.city}  {properties.children}</p>
            <p>Hello {uname}. You are from {city}  {children}</p> 
        </div>
    )
}

//the keyword uname in PropsFC and App.js while passing value must be same

PropsFC.defaultProps = {
    uname : "Ankita", 
    city : "Goa"
}