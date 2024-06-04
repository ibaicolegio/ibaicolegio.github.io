import React from "react";
import { useAuth } from "../context/AuthContext";
import { GoogleIcon } from "../components/icon/GoogleIcon";
import PWAInstallComponent from "../components/PWAInstall";

function Login() {
   const auth = useAuth();
  

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  }; 


   return <>

    <div className="m-auto text-center">
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
      <PWAInstallComponent/>
      <br/>
      </div>
    </div>
  </> 
}

export default Login;