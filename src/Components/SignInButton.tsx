import { UserCredential } from "firebase/auth";
import React, {useRef} from "react";
import { useNavigate } from "react-router";
import {auth} from "../GetAuth";

type SigninType = {
  log(email: string, pasword: string): Promise<UserCredential>;
  email: string;
  password: string;
}

function SignIn(props:SigninType) {
  const {log, email, password} = props;
  const navigate = useNavigate();
        
  const handleSubmit = async () => {
    await log(email, password)
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.error(error)
      })
      
  }

    return(
        <>
            <button type="button" className="In" onClick={handleSubmit}>
                Sign In
            </button>
        </>
    )
}

export default SignIn;