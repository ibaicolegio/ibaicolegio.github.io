import React from 'react'
import { useAuth } from "../context/AuthContext";

export const Footer = () => {
    const auth = useAuth();
  return (
    <div className="col">
      <hr/>
        <div className="card">
            <button className="btn btn-light btn-lg active" onClick={()=> auth.logout()}>Cerrar sesión</button>
        </div>
        <br/>
    </div>
  )
}
