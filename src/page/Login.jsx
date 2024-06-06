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
      <h2>Iniciar sesión:</h2>
      <br/>
      <div className="col">
        <div className="card">
          <button className="btn btn-white btn-lg active text-center" onClick={(e) => handleGoogle(e)}>
            <GoogleIcon/>
          </button>
        </div>
        <hr/>
        <div className="card">
          <PWAInstallComponent/>
        </div>
        <hr/>
        <a href="whatsapp://send?text=irm.eus" className="text-decoration-none">
          <div className="card">
            <button className="btn btn-success btn-lg active text-center">
              Compartir
            </button>
          </div>
        </a>
      </div>
      <br/>
      </div>
    </div>
  </> 
}

export default Login;