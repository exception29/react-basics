import React, {Component} from  'react';
import { HOC } from './HOC';

// as constructor, state is repeated in both, click and hover we keep it common in HOC and call HOC for adding additional featres
// and do click and hover whatever needed by passing props
// export default class ClickCounter extends Component{

//     constructor(props){
//         super(props)

//         this.state = {
//             counter : 0   
//         }
//     }

//     //prevState passed as parameter
//     incrementCounter = () =>{
        
//         this.setState(prevState => {
//                 return {counter : prevState.counter + 1}
//         }
            
//         )
      
//     }
//}

class ClickCounter extends Component{


// calling event handler method must mot contain any () just method name
render(){
    // now state is not here.
    // as no state variables available so destructure as this. can't be used 
//props come from constructor even if we don't write
//here we get props from HOC
    const {counter, incrementCounter} = this.props;
    return(
        <div>
            <button onClick = {incrementCounter}> This text is hovered {counter} times</button>
        </div>
    )//binding the event using fat arrow function in render() method and passing this..
}
}


//pass ClickCounter as a wrappercomponent/basecomponent to HOC
export default HOC(ClickCounter)