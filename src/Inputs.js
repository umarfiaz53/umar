import React from "react";
const Inputs=(props)=>{
    return(<>
                 <div className={props.divName}>
                     <input for={props.idfor}>{props.label}</input>
                     <input id={props.idfor}
                            type={props.typ}
                            placeholder={props.plzhold}/>
                 </div>
    </>)
}

export default Inputs;