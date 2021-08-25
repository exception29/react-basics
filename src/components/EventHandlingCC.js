import React, {Component} from  'react';

export default class EvenHandlingCC extends Component{

    constructor(props){
        super(props)

        this.state = {
            uname: "John"
        }
    }

clickHandler(){
    alert("Button is clicked")
   // this.state.uname  ="Smith";
   //state can't be changed this way ,we need to use setState and binding 
}


// calling event handler method must mot contain any () just method name
render(){
    return(
        <div>
            uname : {this.state.uname}
            <button onClick ={this.clickHandler} > Click </button>
        </div>
    )
}
}
