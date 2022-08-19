import React, { useState } from 'react';
import './Body.css';
import { AuthContext } from '../Context/AuthContext';
import {auth} from "../GetAuth";
import SignUp from '../Components/SignUpButton';
import SignIn from '../Components/SignInButton';
import Google from '../Components/GoogleButton';
import Facebook from '../Components/FacebookButton';
import Github from '../Components/GithubButton';
import { createUser, signInWithEmailAndPassword, signInWithFacebook, signInWithGitHub, signInWithGoogle } from '../SigninMethod/Auth_get_providers';


function Body() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
  return (
    <>
        
            <div className='container'>
                <div className='header'>
                  <h1>Log Authentication</h1>
                  
                  <SignUp log={createUser} email={email} password={password}/>
                </div>
        
                <div className='content'>
                  <h2>LOGIN</h2>
                  <p>Hey, Enter your details to get sign in to your account</p>
                  <input  value={email} type="email" placeholder="Email" onChange={(e) => (setEmail(e.target.value))}/>
                  <input  value={password} type="password"  placeholder="Password" onChange={(e) => (setPassword(e.target.value))}/>
                  <div className='one'>
                    <SignIn log={signInWithEmailAndPassword} email={email} password={password}/>
                  </div>
                  <p className='color'>- Or Sign in with -</p>
                  <div  className='contour'>
                    <Google  log={signInWithGoogle}/>
                    <Facebook  log={signInWithFacebook}/>
                    <Github  log={signInWithGitHub}/>
                  </div>

                  <footer className='foot'>
                    <p className='foot'>☻hei school 2022</p>
                  </footer>

                </div>
              </div>
         
    </>
  );
}

export default Body;
