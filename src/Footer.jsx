import React from "react";
import './Footer.css';
const Footer=()=>{
    const year=new Date().getFullYear();
    return(<>
          <div className='footer'>
               <p>© Copyright {year} all rights reserved terms & conditions</p>
               </div>
    </>)
}

export default Footer; 