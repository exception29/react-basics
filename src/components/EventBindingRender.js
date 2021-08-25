import React, {Component} from  'react';

export default class EvenHandlingRender extends Component{

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

//this.clickHandler.bind(this) has () means calling thru props
//this.clickHandler= no () means just passing as props

// calling event handler method must mot contain any () just method name
render(){
    return(
        <div>
            uname : {this.state.uname}
            <button onClick ={this.clickHandler.bind(this)} > Click </button>
        </div>
    )//binding the event using bind method in render() method and passing this.. here, the methid clickhandler
    //is called thru props and not just passed
}
}
