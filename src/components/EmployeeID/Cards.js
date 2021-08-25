import React, { Component } from 'react'

import CardE from "./Card";

class Cards extends Component {
  state = {
    employees: [
      {
        employeeId: 64973,
        fullName: "Sourav Gupta",
        designation : "Associate Software Engineer",
        empImage: "https://cdn.xxl.thumbs.canstockphoto.com/golden-matt-letter-a-jewellery-font-collection-stock-photo_csp19258520.jpg",
        address: "Kalash Homes, Pirangut, Pune 412115",
      },
      {
        employeeId: 64974,
        fullName: "Ankita Walunj",
        designation : "Associate Software Engineer",
        empImage: "https://cdn.xxl.thumbs.canstockphoto.com/golden-matt-letter-a-jewellery-font-collection-stock-photo_csp19258520.jpg",
        address: "Pune",
      },
      {
        employeeId: 64975,
        fullName: "Sample",
        designation : "Associate Software Engineer",
        empImage: "https://cdn.xxl.thumbs.canstockphoto.com/golden-matt-letter-a-jewellery-font-collection-stock-photo_csp19258520.jpg",
        address: "Pune",
      },
    ],
  };
  render() {
    const { employeeId } = this.props;
    // const employees = this.state.employees.filter(
    //   (employee) => employee.employeeId === Number(employeeId)
    // );
    //employess refer to new array of filtered employees
//     return employees.map((employee) => {
//       return (
//         <CardE
//           key={employee.employeeId}
//           employeeId={employee.employeeId}
//           fullName={employee.fullName}
//           address={employee.address}
//         />
//       );
//     });
//   }


  //Or no filter directly map , check each employee with that props code and return one which matches
/* It works because in JavaScript, true && expression always evaluates to expression
 and false && expression always evaluates to false.

 Therefore, if the condition is true, the element right after && will appear in the output.
 If it is false, React will ignore and skip it. */

//     return this.state.employees.map((employee) => {
//       return  employee.employeeId === Number(employeeId) &&(
//         <CardE
//           key={employee.employeeId}
//           employeeId={employee.employeeId}
//           fullName={employee.fullName}
//           address={employee.address}
//         />
//       );
//     });
//   }


//or


return this.state.employees.map(emp => {
    if(emp.employeeId === Number(employeeId))
        return(

            <CardE
          key={emp.employeeId}
          employeeId={emp.employeeId}
          fullName={emp.fullName}
          address={emp.address}
          designation = {emp.designation}
          empImage = {emp.empImage}
        />

        )


  });

}}



export default Cards;