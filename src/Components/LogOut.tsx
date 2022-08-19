import React, {useContext} from "react";
import { useNavigate } from "react-router";
import {auth} from "../GetAuth";


function LogOut () {
    const navigate = useNavigate();
    const signOut = async () => {
        await auth.signOut().then(()=> {
            navigate("/")
        });
      };

      return(
        <>
            <div className='logOut'>
            <h1>Log Authentication</h1>
            <button className='out' onClick={signOut}>Sign Out</button>
            </div>
        </>
      )
}
export default LogOut;