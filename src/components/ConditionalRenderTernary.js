import React, {Component} from  'react';

export default class ConditionalRenderTernary extends Component{

    constructor(props){
        super(props)

        this.state = {
            username : "Admin",
            isUserValid : true       
         }
    }

    render(){
      
      return(
           this.state.isUserValid ? <div>Welcome {this.state.username}</div> :  <div> Invalid user</div>
      )
        
 }

}