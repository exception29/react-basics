import React, {Component} from  'react';

export default class EvenHandlingConstructor extends Component{

    constructor(props){
        super(props)

        this.state = {
            uname: "Mukta"
        }

       
    }

    //clickhandler acts as a property now
    clickHandler = () =>{
    alert("Button is clicked")
    this.setState(
        {
            uname: "Mira"
        }
    )
  
}


// calling event handler method must mot contain any () just method name
//here clickhandler is not called but only passed as props

/// changing state, updation is mounted and rendered
render(){
    return(
        <div>
            uname : {this.state.uname}
            <button onClick ={this.clickHandler} > Click </button> 
        </div>
    )//binding the event using property
}
}
