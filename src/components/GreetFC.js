import React from 'react'
//Functional Component
//One .js file can export multiple functional components.
// It can have only one default export and multiple named exports

  // JSX ie. embedding javascript in html
// for business logic we use ECMAScript 6
// Functional Component

//DEfault export
// we can change the name of default exports while importing them 
function Greeting(){

    return <h1> Hello World, I am default export</h1>
  

}

export default Greeting

// non-default or named export
// fat ES6 function
export const Greet = () => {

    //multiple elements can't be returned so we use return (<div> ... </div>) or (<> ... </>) as if we are returning one element
    // or return <div> ... </div> no paranthesis then div must be in line of return 

    return (
    
    <div>
        <h1> Hello World</h1>
        <p> This is paragraph</p>
        <Hello/>
     </div>

    )

}

export const Hello = () =>{
    return <>
        <h1> This is hello component called from Greet</h1>
        <h1> This is not exported</h1>
    </>
}