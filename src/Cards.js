import React from "react";
import { NavLink } from "react-router-dom";
import './Pages/Services.css';
const Card=(props)=>{
    return(<>

               <div className='card_main'>
                   <div className='card_img'>
                       <img src={props.imgSource} alt={props.imgSource}/>
                   </div>
                   <div className='card_content'>
                       <h3>{props.title}</h3>
                       <p className='rantext'>Some quick example text to build on the card title and make up the bulk of the card's content</p>
                       <NavLink className='ServBtn' to='/'>Click Here</NavLink>
                   </div>
               </div>

    </>)
}

export default Card;