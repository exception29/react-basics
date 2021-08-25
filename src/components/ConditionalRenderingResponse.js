import React, {Component} from  'react';

export default class ConditionalRenderingResponse extends Component{

    constructor(props){
        super(props)

        this.state = {
            username : "Admin",
            isUserValid : true       
         }
    }

    render(){
      //instead of  2 return statements we can return onlu once
      let response
       if(this.state.isUserValid){
          response = 'Welcome' + this.state.username;
       }
       else{
          response = 'Invalid user'
       }
       return <div>{response}</div>
    }

}