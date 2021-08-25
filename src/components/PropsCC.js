import React,{Component} from 'react';

//Props are immutable JS objects passed from Parent Component to Child Component
//use  {} for inserting Js in HTml of .js file


{/*Our child component is not aware pf whether the incoming props are state or
 coming as props from our parent component. The child component just consumes that data as props.
Also, the child component re-renders whenever the incoming props get updated. */}

{/* every time our props or state get changed, the rendering of the corresponding component gets triggered again. 
This is how our overall app becomes interactive as state gets passed as props to the child component.
 Once state changes for a component which is passed as props down to the child component,
 then we see the app re-render again.*/}

export default class PropsCC extends Component{

    constructor(props){
        super(props)
    } // even if we don't use this constructor its ok. we can use props directly
    // constructor is used to set the state of component

    render(){
        // destructuring props so that no need to write this.props.uname etc , directly write uname
       const  {uname, city, children}  = this.props;
        return (
        <div>

        <p> Hello {this.props.uname}, From {this.props.city}</p>
        {this.props.children}

        <p> Hello {uname}, From {city}, {children} </p>
        </div>)
    }

}

PropsCC.defaultProps = {

    uname : "Ayush"
}