import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { GoogleIcon } from "../components/GoogleIcon";
import { AppleIcon } from "../components/AppleIcon";

function Login() {
   const auth = useAuth();
  

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  }; 

  const handleApple = (e) => {
    e.preventDefault();
    auth.loginWithApple();
  }; 


   return (

    <body className="m-auto text-center">
      <div className="container">
      <h1>Bienvenido a <img src="favicon.png" height={100} width={100}/></h1>
      
      <hr/>
      <h2>Iniciar sesion:</h2>
      <br/>
      <div className="col">
        <div className="card">
          <button className="btn btn-white btn-lg active" onClick={(e) => handleGoogle(e)}>
            <GoogleIcon/>
            Iniciar sesion con Google
          </button>
        </div>
      </div>
      <br/>
      </div>
      <pwa-install></pwa-install>
    </body>
  ); 
}

export default Login;