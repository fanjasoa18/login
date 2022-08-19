import React from "react";
import { useNavigate } from "react-router";

function Google(props : any) {
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
            <button type="button" className="second" onClick={handleLog}>
                <i className="fab fa-google"></i>
                <h3 className="clic">Google</h3>
            </button>
        </>
    )
}

export default Google;