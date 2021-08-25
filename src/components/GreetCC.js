//class component

import React,{Component} from 'react';

// we can have only one default export
export default class GreetClassC extends Component{
    render(){
        return (
            <div>
                <h1> Hello</h1>
                <p> from Class Component</p>
            </div>
        )
    }
}

// multiple named Class components 
export class GCC extends Component{
    render(){
        return <p> from GCC named component</p>
            
        
    }
}

export class ClassComponent extends Component{
    render(){
        return <p>Hello from Class Component</p>
            
    }
}


