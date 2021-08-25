import React, { Component, Fragment } from "react";
import {Card, CardTitle, CardText, CardBody} from 'reactstrap';

class CardE extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { employeeId, fullName, address, designation, empImage } = this.props;
    return (
        <div style={{textAlign: 'center', margin : "0 624px"}}>
        <Card style={{ width: "18rem", height: "21rem", backgroundColor: "cyan" }}>
            <CardBody>
                <CardTitle style={{ color: "darkblue", fontWeight:'bold' }}>
                    Emp Code: {employeeId}
                </CardTitle>
                <img src = {empImage} style={{ width: "4rem", height: "5rem"}}/>
                <CardText className = "CardName">
                   
                    Name : {fullName} <br/>
                    {/* Designation : {employee.designation}<br/> */}
                    Employee Designation : {designation}<br/>
                    Address : {address} <br/>
                </CardText>
            </CardBody>
        </Card>
        
    </div>
    );
  }
}

export default CardE;