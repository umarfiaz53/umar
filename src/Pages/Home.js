import React from "react";
import './Home.css';
import Common from "./Common";
import homeAnim from '../Images/homeimg.svg';
const Home=()=>{
    return(<>
          <Common heading={'Grow Your Business With'}
          brandName={'Umar Fiaz'}
          sologan={'We are the team of talented developers making websites'}
          btnText={'Get Started'}
          path={'/service'}
          imgsrc={homeAnim}/>
    </>)
}

export default Home;