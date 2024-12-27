import React,{useState} from "react";
const  Button=()=>{
    const [login,setLogin]=useState(false);
    const handleAlert=()=>{
        if(login){
            alert("Button Clicked for login")
        }
        else{
            alert("Button Clicked for logout")
        }
        
    }
    return(
        <div>
            <button onClick={()=>{
                setLogin(!login)
                handleAlert()
                }}>
                {login ? "Login":"Logout"}
            </button>
        </div>
    )
}
export default Button;