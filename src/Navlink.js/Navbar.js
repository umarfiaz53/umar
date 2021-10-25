import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import Navlinks from "./Navlinks";
import {GiHamburgerMenu} from 'react-icons/gi';
import { IoMdClose } from "react-icons/io";

const Navbar=()=>{
    const [clicked, setClicked]=useState(false);
    const EventBtn=()=>{
        return(
            setClicked(!clicked)
        )
    }
    const menuList=Navlinks.map(({url, title}, index)=>{
        return(<li key={index} className='list'> <NavLink exact to={url} activeClassName='active'>{title}</NavLink></li>)
    });
    return(<>
             <nav className={'navigation'}>

                 <div className='inner'>

                 <div className='logo'>
                     Umar<font>Fiaz</font>
                 </div>

                 <div className='icon' onClick={EventBtn}>
                     {clicked?<IoMdClose/>:<GiHamburgerMenu/>}
                 </div>

                 </div>

                 <ul className={clicked ? "menu_list":"menu_list close" }>
                     {menuList}
                 </ul>

             </nav>
    </>)
}

export default Navbar;