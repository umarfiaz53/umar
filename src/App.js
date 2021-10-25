import React from "react";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import { Route, Switch, Redirect } from "react-router";
import Navbar from "./Navlink.js/Navbar";
import Footer from './Footer';
const App=()=>{
  return(<>   
             
             <Navbar/>
             <Switch> 
             <Route exact path='/' component={Home}/>
             <Route exact path='/service' component={Service}/>
             <Route exact path='/about' component={About}/>
             <Route exact path='/contact' component={Contact}/>
             <Redirect to='/'/>
             </Switch>
             <Footer/>
  </>)
}

export default App;
