import React from "react";
import Card from "../Cards";
import Sdata from '../Navlink.js/Sdata';
import './Services.css';
const Service=()=>{

    return(<>
           <div className='service_main'>
               <h1>Our Services</h1>
               <div className='container'>
             {Sdata.map((value, index)=>{
               return(  <Card key={index}  
                              title={value.heading}
                              imgSource={value.imgsrc}/>)
             })}
               </div>
           </div>
    </>)
}

export default Service;