import React, {Component} from  'react';
import { HOC } from './HOC';

//commmon part included in HOC functin component

// export default class HoverCount extends Component{

//     constructor(props){
//         super(props)

//         this.state = {
//             counter : 0   
//         }
//     }

//     //prevState passed as parameter 
    // this is property binding 
//     incrementCounter = () =>{
        
//         this.setState(prevState => {
//                 return {counter : prevState.counter + 1}
//         }
            
//         )
      
//     }

//}


// calling event handler method must mot contain any () just method name
class HoverCount extends Component{

render(){

    //destructuring
    // we are getting these props from HOC
    const {counter, incrementCounter}  =this.props; //as state variable is not there  now in coonstructor
    return(
        <div>
            <h2 onMouseOver = {incrementCounter}> This text is hovered {counter} times</h2>
        </div>
    )//binding the event using fat arrow function in render() method and passing this..
}
}

export default HOC(HoverCount)
