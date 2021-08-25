import React, { Component } from 'react';
class LifeCycle2 extends Component {
    constructor(props) {
        super(props);
        this.state = { uname:"smith" }
        console.log("Constructor of lifecycle 2 invoked")
    }
    onClickHandler = ()=>{
        this.setState({
            uname: "john"
        })
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps of Lifecycle 2 invoked")
        return null
    }
    componentDidMount(){
        console.log("componentDidMount of LifeCycle2 invoked")

    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate of LifeCycle2 invoked")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate of LifeCycle2 invoked")
        return null
    }

    componentDidUpdate(){
        console.log("componentDidUpdate of LifeCycle2 invoked")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount of LifeCycle2 invoked")
   
    }


    render() { 
        console.log("render of lifecycle2 invoked")
        return (
            <div><h1>Render of LifeCycle2</h1>
            <h2>{this.state.uname}</h2>
            <button onClick={this.onClickHandler}>Click</button></div>
        
            );
    }
}
 
export default LifeCycle2;



// import React, { Component } from 'react'

// export default class LifeCycle2 extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             uname :"John"
//         }
//         console.log("---------Constrctor of LifeCycle2 invoked")
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log("---------getDerivedStateFromProps of LifeCycle2 invoked")
//         return null
//     }

//     componentDidMount(){
//         console.log("---------componentDidMount of LifeCycle2 invoked")
//     }

//     shouldComponentUpdate(){
//         console.log("---------shouldComponentUpdate of LifeCycle2 invoked")
//         return true
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log("---------getSnapshotBeforeUpdate of LifeCycle2 invoked")
//         return null
//     }

//     componentDidUpdate(){
//         console.log("---------componentDidUpdate of LifeCycle2 invoked")
//     }
//     componentWillUnmount(){
//         console.log("---------componentWillUnmount of LifeCycle2 invoked")
   
//     }
//     onClickHandler = ()=>{
//         this.setState({
//             uname:"Sham"
//         })
//       }
//     render() {
//     return (
//       <div>
//        {this.state.uname}
//                 <h1>Render of LifeCycle2</h1>
//                 <button onClick ={this.onClickHandler} >Click</button>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class LifeCycle2 extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             uname :"John"
//         }
//         console.log("---------Constrctor of LifeCycle2 invoked")
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log("---------getDerivedStateFromProps of LifeCycle2 invoked")
//         return null
//     }

//     componentDidMount(){
//         console.log("---------componentDidMount of LifeCycle2 invoked")
//     }

//     shouldComponentUpdate(){
//         console.log("---------shouldComponentUpdate of LifeCycle2 invoked")
//         return true
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log("---------getSnapshotBeforeUpdate of LifeCycle2 invoked")
//         return null
//     }

//     componentDidUpdate(){
//         console.log("---------componentDidUpdate of LifeCycle2 invoked")
//     }
//     componentWillUnmount(){
//         console.log("---------componentWillUnmount of LifeCycle2 invoked")
   
//     }
//     onClickHandler = ()=>{
//         this.setState({
//             uname:"Sham"
//         })
//       }
//     render() {
//     return (
//       <div>
//        {this.state.uname}
//                 <h1>Render of LifeCycle2</h1>
//                 <button onClick ={this.onClickHandler} >Click</button>
//       </div>
//     )
//   }
// }