import React from "react";
import Common from "./Common";
import AboutAnim from '../Images/aboutImg.jpg';
const About=()=>{
    return(<>
          <Common heading={'Welcome to About page'}
          brandName={'Umar Fiaz'}
          sologan={'We are the team of talented developers making websites'}
          btnText={'Contact Now'}
          path={'/contact'}
          imgsrc={AboutAnim}/>
    </>)
}

export default About;