import React, { Component } from 'react'

//Control Components

// name of state variable and control must be same 
// the value entered by user is stored in state variable and then it is displyed
// REact controls what should be displayed
export default class FormDemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : "",
             address : "",
            value: 'reactjs'};
            
             this.techChange = this.techChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    

    //event is param to arrow function

    //event is passed by default...when you just mention the function and not call it
    // so onChange passes the event thru {this.usernameChange}
    // for every letter we type, there is change so the state changes for every type and render is rerendered again
    // this can be a usecase for recommending the entire word when we are typing to search

    //only a single common method can also be used

    // from the event, name will be taken and corr value
    // handleChange=(e)=>{
    //     const {name,value}=e.target
    //     this.setState({[name]:value})
    // }


    // we are binding using property
    usernameChange = event =>{
        this.setState({

            username : event.target.value

        },console.log(this.state.username))

    }

    //event was passed thru props from <textarea>
    addressChange = event =>{
        this.setState({

            address : event.target.value

        },console.log(this.state.address))

    }
    
    // we are using binding thru constructor 
    //callback function so shows one value behind
    techChange(event){
        this.setState({
            value: event.target.value
        });
       console.log(this.state.value) 
     }

    handleSubmit(event) {
      alert('Form Submitted:' + " " + this.state.username + " " + this.state.address + " " + this.state.value);
   
    }
    //value is taken from state and displayed
    //name = " " is the control
    
    //event is passed by default...when you just mention the function and not call it
    // onsubmitting the form show alert 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   <div>
                        Name: <input type = "text" name="username" value={this.state.username} onChange = {this.usernameChange} /> 
                    </div>
                    <div>
                        Address : <textarea  name="address" value={this.state.address} onChange = {this.addressChange}></textarea>
                    </div>
                    <div>
                        Technologies:
                        
                    <select value={this.state.value} onChange={this.techChange}>           
                        <option value="reactjs"> React JS </option>
                        <option value="angular"> Angular</option>
                        <option value="python"> Python </option>
                        <option value="java"> JAVA </option>
                     </select>
                    </div>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}


    //onChange={(event) => this.handleUserInput(event)}
    // fat arrow can be used in this way. here we have to pass event explicitly as we are calling the function and not passing
    // so event is not sent automatically/implicitly
