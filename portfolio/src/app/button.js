'use client'
import React from "react";

import { useState } from 'react'


export default function Button({ call_to_action, phone_number, email, download }) {
    let [state, setState] = useState('contact_details hide')
    //let contact_div = document.getElementById("contact_details");

    const handleClick = (event) => {
        console.log('className:', event.currentTarget.title);
        if (event.currentTarget.title.includes('hide')) {
            //contact_details = "contact_details";
            //contact_div.classList.remove('hide');
            setState("contact_details");
        } else {
            //contact_details = "contact_details hide";
            //contact_div.classList.add('hide');
            setState("contact_details hide");
        }
    };

    return (<>
        <button className="contact_btn" title={state} download onClick={handleClick}>{call_to_action}</button>
        <div id="contact_details" className={state}><p>{phone_number} | {email}</p></div>
    </>);

}