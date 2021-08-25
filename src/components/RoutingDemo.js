import React from 'react'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
//import { Navbar,Nav} from 'react-bootstrap';
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

export default function RoutingDemo() {

    //wrap entire code into browser router component

    //Routing allows to render only changed component

    //using bootstrap in React js, replace bootstrap class with className and for= with htmlFor= 
   
    return(
        <div>
        <BrowserRouter>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light my-3" >
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                             <li> <img src="http://content.timesjobs.com/img/83205996/Master.jpg" height = "40px" width = "100px"></img></li>
                                    <li className="nav-item">
                                        <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <Link to={'/aboutus'} className="nav-link active" aria-current="page" href="#">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/contactus'} className="nav-link active" aria-current="page" href="#">Contact Us</Link>
                                    </li>
                                </ul>
                                </div>
                        </div>
                    </nav>
                <Switch>
                
                    <Route path="/home" component={Home} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/contactus" component={ContactUs} />
                </Switch>
            </BrowserRouter>
            </div>
    )
}



// {/* <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//                              <Navbar.Brand href="/xor"><img src=""></img></Navbar.Brand> 
//                             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                             <Navbar.Collapse id="basic-navbar-nav">
//                                 <Nav className="mr-auto">
//                                     <Nav.Link to='/home'>Home</Nav.Link>
//                                     <Nav.Link to='/aboutus'>About Us</Nav.Link>
//                                     <Nav.Link href='/contactus'>Contact Us</Nav.Link>
//                                 </Nav>
//                             </Navbar.Collapse>
//                             </Navbar>

//  */}

