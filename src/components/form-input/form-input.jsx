import React from "react";
import SignIn from "../sign-in/sign-in";

import './form-input.scss';

const FormInput = ({handleChange,label,...otherProps}) =>(
    
    <div className='group'>
        
        <input className='form-input' onChange={handleChange}  {...otherProps} />
        {console.log(label,otherProps.defaultValue.length)}
        {label ? 
            (<label
            className={`${otherProps.defaultValue.length ? 'shrink' :''}shrink form-input-label `}
            >
                {label}
            </label>)
        :null}
    </div>
)

export default FormInput;