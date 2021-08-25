import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardBody} from 'reactstrap';

export default class EmployeeCard extends Component {

    // when it is array of objects then Each child in a list should have a unique "key"

    constructor(props) {
        super(props)

   
        this.state = {
            
            employees :[

           { empCode : 2904,
            empPhoto : " ",
            empPhotoPath : " ",
            empName : 'Ankita Walunj',
            designation : "Associate Software Engineer",
            address : 'Baner Pune'},

            { empCode :2905,
            empPhoto : " ",
            empPhotoPath : " ",
            empName : 'Ayush',
            designation : "Associate Software Engineer",
            address : 'Baner Pune'},

            ]
        }
}
    //first filter that employee and now using map funtion iterate thru the list of filtered employees
    
    render() {
        const { empCode } = this.props;
       // empls is array thay contains only elements which satisfy condition mentioned in filter 
        const empls = this.state.employees.filter((employee) => employee.empCode === Number(this.props.empCode));
        console.log(empls)
        if(empls.length!=0){
        return empls.map((employee) => {

          return (

      
            <div key={employee.empCode}>
        <div style={{textAlign: 'center', margin : "0 624px"}}>
                    <Card style={{ width: "18rem", height: "21rem", backgroundColor: "cyan" }}>
                        <CardBody>
                            <CardTitle style={{ color: "darkblue", fontWeight:'bold' }}>
                                Emp Code: {employee.empCode}
                            </CardTitle>
                            <img src = "https://cdn.xxl.thumbs.canstockphoto.com/golden-matt-letter-a-jewellery-font-collection-stock-photo_csp19258520.jpg" style={{ width: "4rem", height: "5rem"}}/>
                            <CardText className = "CardName">
                               
                                Name : {employee.empName} <br/>
                                Designation : {employee.designation}<br/>
                                Address : {employee.address} <br/>
                            </CardText>
                        </CardBody>
                    </Card>
                    
                </div>
                </div>
            )});
    }
    else {
            return(

            <div>Invalid</div>)
        }

    }
} 
        
   

   
    


