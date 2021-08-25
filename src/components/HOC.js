import React , {Component} from 'react'

//High Order Component
// increases reusability
//Wrapped component is original passed component (common feature)
//Hoc using newComponent adds additional features and returns wrapped + New Component
// HOC is a function (arrow function with wrappedcomponent as a param and returns new component)
export const HOC =  (WrappedComponent)=> {
    class NewComponent extends Component{

        constructor(props){
            super(props)
    
            this.state = {
                counter : 0   
            }
        }
    
        //prevState passed as parameter
        incrementCounter = () =>{
            //prevstate will have all attributes of state ie.. couter so use '.'to access the the counter attribute 
            this.setState(prevState => {
                    return {counter : prevState.counter + 1} // as we want to return the value to newComponent
            }
                
            )
          
        }

       // render and incrementCounter are props passed with WrappedComponent
       // we can also send props froom App.js but for that we need to do ...this.props
       render(){
           return <WrappedComponent
                    counter = {this.state.counter}
                    incrementCounter = {this.incrementCounter}

           />
       }

    }

    return NewComponent
}
