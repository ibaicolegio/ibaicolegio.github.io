import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Aplicacion } from "../components/Aplicacion";
import { Header } from "../components/Header";

function Home() {
   const auth = useAuth();
  const {displayName} = auth.user


  return <>
  <body className="m-auto text-center">
    <div className="container">
      <br/>
      <Header/>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Aplicacion nombre="Gasolineras" version="0.1"/>
        <Aplicacion nombre="Bus" version="0.1"/>
        <Aplicacion nombre="TV" version="0.2"/>
      </div>
      <hr/>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Aplicacion nombre="Paquetes" version="0.1"/>
        <Aplicacion nombre="Materiales" version="0.1"/>
      </div>
      <hr/>
      <div className="col">
        <div className="card">
          <button className="btn btn-light btn-lg active" onClick={()=> auth.logout()}>Logout</button>
        </div>
      </div>
    </div>
  </body>
  </>
}

export default Home;