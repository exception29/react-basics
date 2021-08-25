import React, { Component } from 'react'
import {BrowserRouter, Link, Switch, Route,useParams, useRouteMatch, matchPath, useLocation} from 'react-router-dom';
import Email from './Email'
import Contact from './Contact'
import ReachUs from './ReachUs'

//make it a function

export default function ContactUs()  {
   
        // let { slug } = useParams()
        return (
            
        <div>
        <BrowserRouter>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light my-3">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                             
                                    <li className="nav-item">
                                        <Link to= {'/email'} className="nav-link active" aria-current="page" href="#">Email US</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/contact'} className="nav-link active" aria-current="page" href="#">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/reachout'} className="nav-link active" aria-current="page" href="#">Reach Out To Us</Link>
                                    </li>
                                </ul>
                                </div>
                        </div>
                    </nav>
                <Switch>
                    <Route path="/email" component={Email} />
                    <Route path="/contact" component={Contact} />
                    
                    <Route path="/reachout" component={ReachUs} />
                </Switch>
            </BrowserRouter>
            </div>
        )
    }


{/* <div>
            <BrowserRouter>
            <nav>
                <div><Link to = {'/email'}> Email Us </Link> </div>
                <div><Link to = {'/contact'}>  Contact Us</Link></div>
                <div><Link to = {'/reachout'}> Reach out to Us</Link></div>
            </nav>
            <Switch>
                <Route path = "/email" component = {Email}/>
                <Route path = "/contact" component = {Contact}/>
                <Route path = "/reachout" component = {ReachUs}/>
            </Switch>
            
            </BrowserRouter>
        </div> */}