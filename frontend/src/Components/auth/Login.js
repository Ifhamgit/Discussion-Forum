import React from 'react'
import "./Login.css"
import { signInWithPopup } from 'firebase/auth';
import logo from "../../Images/Graphic-Blog-Marketing-Clio-Ap-unscreen.gif";
import {auth, provider} from "../../Firebase"


function Login() {

    const handleLogin = async()=>{
       await signInWithPopup(auth, provider).then((result)=>{
        console.log(result)

        }).catch((error)=>{
            console.log(error)
        })
       

    }

  return (
    <div className='login-container'>
        <div className="login-content">
            <img src={logo} alt="logo" />
            <button onClick={handleLogin} className = "btn-login">Login To continue</button>
        </div>
      
    </div>
  )
}

export default Login
