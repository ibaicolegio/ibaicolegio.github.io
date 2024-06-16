import React, {useState} from "react";
import { useAuth } from "../../context/AuthContext";
import { AplicacionCard } from "../card/AplicacionCard";
import { AplicacionUrlCard } from "../card/AplicacionUrlCard";
import { VPN } from "../VPN";

function HomeView({setVentana}) {
   const auth = useAuth();
  const {displayName} = auth.user

  
  


  return <>
      <h1>Hola {displayName}</h1>
      <hr/>
      <button type="button" className="btn position-relative">
        AdGuard
        <VPN/>
      </button>
      
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <AplicacionUrlCard nombre="Gasolineras" version="0.1"/>
        {/* <AplicacionCard nombre="Gasolineras" version="0.1" setVentana={setVentana}/> */}
        {/* <AplicacionUrlCard nombre="Bus" version="0.1"/> */}
        <AplicacionCard nombre="TV" version="0.2" setVentana={setVentana}/>
        <AplicacionCard nombre="Deportes" version="0.1" setVentana={setVentana}/>
      </div>
      <hr/>
      <h2>Empresas:</h2>
      <hr/>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <AplicacionUrlCard nombre="Paquetes" version="0.1"/>
        <AplicacionUrlCard nombre="Materiales" version="0.1"/>
      </div>
      
  </>
}


export default HomeView;