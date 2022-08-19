import React from "react";
import { useNavigate } from "react-router";
import '../Components/facebook.css'

function Facebook(props : any) {
    const {log} = props;
    const navigate = useNavigate();

    const handleLog = async  () => {
        await log().then(() => {
            navigate('/home');
           
        }).catch ((error: any) => {
            console.log(error)
        })
    }
    
    return(
        <>
        <div className="bouton">
                <button type="button" className="second" onClick={handleLog}>
                    <i className="fab fa-facebook"></i>
                    <h3 className="clic">Facebook</h3>
                </button>
        </div>
            
        </>
    )
}

export default Facebook;