import React, {Component} from  'react';

export default class EvenHandlingConstructor extends Component{

    constructor(props){
        super(props)

        this.state = {
            uname: "Mukta"
        }

        //binding the event using constructor as constructor gets called only once so useful than doing thru render
        this.clickHandler = this.clickHandler.bind(this) //binding this.
    }

clickHandler(){
    alert("Button is clicked")
    this.setState(
        {
            uname: "Mira"
        }
    )
  
}


// calling event handler method must mot contain any () just method name
// without parathesis means we are just passing the function as props 
render(){
    return(
        <div>
            uname : {this.state.uname}
            <button onClick ={this.clickHandler} > Click </button>
        </div>
    )//binding the event using constructor as constructor gets called only once so useful 
}
}
