import React, {Component} from  'react';

export default class ConditionalShortCircuitOperator extends Component{

    constructor(props){
        super(props)

        this.state = {

            username : "Admin",
            isUserValid : true       
         }
    }

/* It works because in JavaScript, true && expression always evaluates to expression
 and false && expression always evaluates to false.

 Therefore, if the condition is true, the element right after && will appear in the output.
 If it is false, React will ignore and skip it. */
 
    render(){
      
       return this.state.isUserValid && <div>Welcome {this.state.username}</div>
    }

}