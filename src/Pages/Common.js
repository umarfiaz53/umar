import React from "react";
import './Home.css';
import { NavLink } from "react-router-dom";
const Common=(props)=>{
    return(<>
           <div className='main'>
               <div className='left'>

                   <div className='left_inner'>
                   <h1 className='lef_inn_head'>{props.heading}</h1>
                   <strong>{props.brandName}</strong>
                   <p>{props.sologan}</p>
                   <NavLink className='lefBtn' to={props.path}>{props.btnText}</NavLink>

                   </div>
               </div>
               <div className='right'>
                   <img className='animaImg' src={props.imgsrc} alt='web development'/>
               </div>
           </div>
    </>)
}

export default Common;