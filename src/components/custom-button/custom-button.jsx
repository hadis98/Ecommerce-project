import React from "react";

import './custom-button.scss';

const CustomButton = ({children,isGoogleSignIn,...otherProps})=>(
    console.log(isGoogleSignIn+'is it true?'),
    <button 
    // className='google-sign-in custom-button'
    className={`${isGoogleSignIn?'google-sign-in':''} custom-button`}
    {...otherProps}>
        {children}
    </button>

);


export default CustomButton;