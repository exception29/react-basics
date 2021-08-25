
import React, { useState } from 'react'
import Card from "react-bootstrap/Card"; //npm install react-bootstrap-validation --save

export default function Icard(props) {

    const {employeeCode} = props;

    const [employee,setEmployee] = useState([
        { empCode :  101 , empName : 'Ankita', empDesgination: 'Associate Software Employee', empAddress: 'Baner, Pune'},
        
        { empCode :  102 , empName : 'Ayush', empDesgination: 'Associate Software Employee', empAddress: 'Baner, Pune'},
    ]);

    //map entire array of emp and where the condition is satisfied, return that card
    /* It works because in JavaScript, true && expression always evaluates to expression
 and false && expression always evaluates to false.

 Therefore, if the condition is true, the element right after && will appear in the output.
 If it is false, React will ignore and skip it. */

//  1- Use {} to put expressions inside jsx (to put map inside div).

// 2- you are using {} means block body of arrow function, so you need to use return inside the function body, 
//otherwise by default map returns undefined.

// 3- You are using {} twice, so 2nd {} will be treated as object and not array
// and that key is not valid, thats why you are getting error.

    return employee.map((emp)=>  (
            emp.empCode === Number(employeeCode) && (

            <div key={emp.empCode} style={{textAlign: 'center'}}>
                <Card style={{ width: "18rem", height: "21rem", backgroundColor: "cyan" }}>
                    <Card.Body>
                    <br/><br/>
                        <Card.Title style={{ color: "darkblue" }}>Employee ID: {emp.empCode} </Card.Title>
                        <br/>
                        <Card.Img src="https://cdn.xxl.thumbs.canstockphoto.com/golden-matt-letter-a-jewellery-font-collection-stock-photo_csp19258520.jpg" style={{ width: "4rem", height: "5rem"}}/>
                        <Card.Text>
                            Name: {emp.empName}
                            <br/><br/>
                            Designation: {emp.empDesgination}
                            <br/><br/>
                            Address: {emp.empAddress}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            )
        )

    );

    
   
}





