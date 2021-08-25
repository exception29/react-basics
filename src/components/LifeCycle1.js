import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2'

export default class LifeCycle1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uname: "John",
            isClicked: true
        }
        console.log("Constrctor of LifeCycle1 invoked")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps of LifeCycle1 invoked")
        return null
    }

    componentDidMount() {
        console.log("componentDidMount of LifeCycle1 invoked")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate of LifeCycle1 invoked")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate of LifeCycle1 invoked")
        return null
    }

    componentDidUpdate() {
        console.log("componentDidUpdate of LifeCycle1 invoked")
    }

    onClickHandler = () => {
        let newflag = this.state.isClicked ? false : true
        this.setState({
            uname: "Sham",
            isClicked: newflag
        })
    }
    render() {
        console.log("render of LifeCycle1 invoked")
        if (this.state.isClicked) {
            return (<div>
                {this.state.uname}
                <h1>Render of LifeCycle1</h1>
                <button onClick={this.onClickHandler} >Click</button>
                <LifeCycle2 />
            </div>)
        } else {

            return (<div>
                { this.state.uname }
                < h1 > Render of LifeCycle1</h1 >
                    <button onClick={this.onClickHandler} >Click</button>
            </div>  
        )
        }
    }
}

// import React, { Component } from 'react'
// import LifeCycle2 from './LifeCycle2'

// export default class LifeCycle1 extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             uname: "John",
//             isClicked: true
//         }
//         console.log("Constrctor of LifeCycle1 invoked")
//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log("getDerivedStateFromProps of LifeCycle1 invoked")
//         return null
//     }

//     componentDidMount() {
//         console.log("componentDidMount of LifeCycle1 invoked")
//     }

//     shouldComponentUpdate() {
//         console.log("shouldComponentUpdate of LifeCycle1 invoked")
//         return true
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log("getSnapshotBeforeUpdate of LifeCycle1 invoked")
//         return null
//     }

//     componentDidUpdate() {
//         console.log("componentDidUpdate of LifeCycle1 invoked")
//     }
    
//     onClickHandler = () => {
//         let newflag = this.state.isClicked ? false : true
//         this.setState({
//             uname: "Sham",
//             isClicked: newflag
//         })
//     }
//     render() {
//         console.log("render of LifeCycle1 invoked")
//         if (this.state.isClicked) {
//             return (<div>
//                 {this.state.uname}
//                 <h1>Render of LifeCycle1</h1>
//                 <button onClick={this.onClickHandler} >Click</button>
//                 <LifeCycle2 />
//             </div>)
//         } else {

//             return (<div>
//                 { this.state.uname }
//                 < h1 > Render of LifeCycle1</h1 >
//                     <button onClick={this.onClickHandler} >Click</button>
//             </div>  
//         )
//         }
//     }
// }


// // import React, { Component } from 'react'

// // export default class LifeCycle1 extends Component {
// //     constructor(props) {
// //         super(props)

// //         this.state = {
// //             uname : 'John'

// //         }
// //         console.log("Constrctor of LifeCycle1 invoked")
// //     }

// //     onClickHandler = () =>{
// //         this.setState({
// //             uname:'Smith'
// //         })
// //     }
// //     static getDerivedStateFromProps(props, state){
// //         console.log("getDerivedStateFromProps of LifeCycle1 invoked")
// //         return null
// //     }

// //     componentDidMount(){
// //         console.log("componentDidMount of LifeCycle1 invoked")
// //     }

// //     shouldComponentUpdate(){
// //         console.log("shouldComponentUpdate of LifeCycle1 invoked")
// //         return true
// //     }

// //     getSnapshotBeforeUpdate(prevProps, prevState){
// //         console.log("getSnapshotBeforeUpdate of LifeCycle1 invoked")
// //         return null
// //     }

// //     componentDidUpdate(){
// //         console.log("componentDidUpdate of LifeCycle1 invoked")
// //     }



// //     render() {
// //         console.log("render of LifeCycle1 invoked")
// //         return (
// //             <div>
// //                 <h1>Render of LifeCycle1</h1>
// //             </div>
// //         )
// //     }
// // }


// import React, { Component } from 'react';
// import LifeCycle2 from './Lifecycle2';
// export default class LifeCycle1 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { uname:"smith" }
//         console.log("Constructor of lifecycle 1 invoked")
//     }
//     onClickHandler = ()=>{
//         this.setState({
//             uname: "john"
//         })
//     }
//     static getDerivedStateFromProps(props,state){
//         console.log("getDerivedStateFromProps of Lifecycle 1 invoked")
//         return null
//     }
//     componentDidMount(){
//         console.log("componentDidMount of LifeCycle1 invoked")

//     }
//     shouldComponentUpdate(){
//         console.log("shouldComponentUpdate of LifeCycle1 invoked")
//         return true
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log("getSnapshotBeforeUpdate of LifeCycle1 invoked")
//         return null
//     }

//     componentDidUpdate(){
//         console.log("componentDidUpdate of LifeCycle1 invoked")
//     }

//     render() { 
//         console.log("render of lifecycle1 invoked")
//         return (
//             <div><h1>Render of LifeCycle1</h1>
//             <h2>{this.state.uname}</h2>
//             <button onClick={this.onClickHandler}>Click</button>
//             <LifeCycle2/>
//             </div>
        
//             );
//     }
// }
 
