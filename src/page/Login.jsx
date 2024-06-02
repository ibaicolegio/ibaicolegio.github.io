import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { GoogleIcon } from "../components/GoogleIcon";

function Login() {
   const auth = useAuth();
  

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  }; 


   return (

    <body className="m-auto text-center">
      <div className="container">
      
      <h1>Bienvenido a IRM</h1>
      <h2>Iniciar sesion:</h2>
      <div className="col">
        <div className="card">
        <button className="btn btn-white btn-lg active" onClick={(e) => handleGoogle(e)}>
        <GoogleIcon/>
        Iniciar sesion con Google
      </button>
        </div>
      </div>
      
      </div>
    </body>
  ); 
}

export default Login;