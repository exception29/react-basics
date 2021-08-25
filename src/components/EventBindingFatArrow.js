import React, {Component} from  'react';

export default class EvenBindingFatArrow extends Component{

    constructor(props){
        super(props)

        this.state = {
            uname: "Mukta"
        }
    }

clickHandler(){
    alert("Button is clicked")
    this.setState(
        {
            uname: "Mira"
        }
    )
  
}


// we are using () in clickHandler() ie. we are calling the function thru props and not just passing
//and so there is no need of binding this here as the call goes from current instance itself
render(){
    return(
        <div>
            uname : {this.state.uname}
            <button onClick ={() => this.clickHandler()} > Click </button>
        </div>
    )//binding the event using fat arrow function in render() method and passing this..
}
}
