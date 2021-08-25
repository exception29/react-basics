import React, {Component} from  'react';

export default class ConditionalRenderingIfElse extends Component{

    constructor(props){
        super(props)

        this.state = {
            username : "Admin",
            isUserValid : true       
         }
    }

    render(){
      
       if(this.state.isUserValid){
           return <div>Welcome {this.state.username}</div>
       }
       else{
           return <div> Invalid user</div>
       }
    }

}