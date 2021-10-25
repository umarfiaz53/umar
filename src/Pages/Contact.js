import React, { useState } from "react";
// import Input from "../Inputs";
// import ContLinks from '../Navlink.js/ContLinks';
import './Contact.css';

const Contact=()=>{

    const [myContact, setContact]=useState({
        fullName:'',
        phone:'',
        email:'',
        message:'',
    });

    const EventInput=(event)=>{
        const {name, value}=event.target;
        setContact((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    }

    const formEvent=(e)=>{
        e.preventDefault();
        alert(`Thanks! ${myContact.fullName}. 
        We received your message "${myContact.message}"
        Your phone no is ${myContact.phone}. 
        and email is ${myContact.email}.`);
    
    }

    return(<>


        <div className='contact_main'>
           <h1 className='contHead'>Contact US</h1>

               <form className='contact_form' onSubmit={formEvent}>
<>
               {/* {ContLinks.map((cont, index)=>{
                       return(<Input key={index}
                        idfor={cont.id}
                        divName={cont.divClass}
                        label={cont.label}
                        plzhold={cont.placeHold}
                        typ={cont.type}/>)
                   })} */}
</>

                 <div className='marginB'>
                     <label >Full Name</label>
                     <input onChange={EventInput} name={'fullName'}  
                     value={myContact.fullName} type='text'
                      placeholder='Enter your name' required/>
             </div>
                 <div className='marginB'>
                     <label >Phone no</label>
                     <input onChange={EventInput} name={'phone'} 
                      value={myContact.phone} type='number'
                       placeholder='Enter your mobile no' required/>
                 </div>
                 <div className='marginB'>
                     <label >Email Address</label>
                     <input onChange={EventInput} name={'email'} 
                      value={myContact.email} type='email'
                       placeholder='example@gmail.com' required/>
                 </div>


               <div className='marginB'>
                   <label >Message</label>
                   <textarea  onChange={EventInput} name={'message'}
                    value={myContact.message} type='text'
                    placeholder='type a message'
                     rows={3} required/>
                   </div>

                   <div className='marginB btn'>
                       <button  className='sbBtn'>Submit form</button>
                   </div>

               </form>
           </div>

    </>)
}

export default Contact;