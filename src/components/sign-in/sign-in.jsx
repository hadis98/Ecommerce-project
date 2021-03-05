import React from "react";
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-out/sign-in-and-sign-up";
import CustomButton from "../custom-button/custom-button";
import './sign-in.scss';
import { signInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input";
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
handleSubmit =(event)=>{
event.preventDefault();

this.setState({email:'',password:''});
}

handleChang =(event)=>{
const {value,name} = event.target;

this.setState({[name]:value});
}
    render(){

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email"
                    name="email" defaultValue={this.state.email} required
                    handleChange={this.handleChange}
                    label="email"
                    />
                    
                    <FormInput name="password" 
                    type="password"
                    defaultValue={this.state.password} required
                    handleChange={this.handleChange}
                    label="password"
                    />
                    <div className='buttons'>
                    <CustomButton type='submit' value="submit Form" >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;