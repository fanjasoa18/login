import React, {useRef} from "react";
import { UserCredential } from "firebase/auth";
import {auth} from "../GetAuth";
import { useNavigate } from "react-router";

type SignUpType = {
    log(email: string, pasword: string): Promise<UserCredential>;
    email: string;
    password: string;
  }
function SignUp(props:SignUpType) {
        const {log, email, password} = props;
        const navigate = useNavigate();
              
        const createAccount = async () => {
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

            <button type="button" className="up" onClick={createAccount}>
                Sign Up
            </button>
        </>
    )
}

export default SignUp;