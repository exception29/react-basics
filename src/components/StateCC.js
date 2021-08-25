import React, {Component} from  'react';

// whenever our state changes, the corresponding React component is re-rendered.
//state can be passed down as props to any child component. 

export default class StateCC extends Component{


    constructor(props){
        super(props)

        this.state = {
            username : "Admin",
            password: "admin2479"       
         }
    }

    render(){

        //destructuring
        const {username, password} = this.state 
        return(
            <div>
                username:  { this.state.username}
                password  : {this.state.password}
                <br/>
                username:  { username} password  : {password}
            </div>
        )
    }

}