import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import Navlinks from "./NavLinks";
const Navbar=()=>{
        const navList=Navlinks.map(({url, title}, index)=>{
            return (  <li className='list' key={index}> <NavLink exact activeClassName='active' to={url}>{title}</NavLink> </li>)
        })
       return(<> 
       <nav className='navigation'> 

              <div className='logo'>
              <h1>Umar Fiaz</h1>
              </div>

              <ul className='navList'>{navList}
                  {/* <li className='list home' ><NavLink exact activeClassName='active' className='yr' to='/'>Home</NavLink> </li>
                  <li className='list service' ><NavLink exact activeClassName='active' className='nlinks' to='/service'>Services</NavLink> </li>
                  <li className='list about' ><NavLink exact activeClassName='active' className='nlinks' to='/about'>About</NavLink> </li>
                  <li className='list contact' ><NavLink exact activeClassName='active' className='nlinks' to='/contact'>Contact US</NavLink> </li> */}
              </ul>

              <div className='toggleBtn'>
                  <div className='toggle top'></div>
                  <div className='toggle middle'></div>
                  <div className='toggle bottom'></div>
              </div>

              </nav>
    </>)
}

export default Navbar;