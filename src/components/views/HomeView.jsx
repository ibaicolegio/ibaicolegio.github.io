import React, {useState} from "react";
import { useAuth } from "../../context/AuthContext";
import { AplicacionCard } from "../card/AplicacionCard";
import { AplicacionUrlCard } from "../card/AplicacionUrlCard";

function HomeView({setVentana}) {
   const auth = useAuth();
  const {displayName} = auth.user
  const [vpn, setVpn] = useState(false);
  const response = fetch("https://https-filtering-check.adtidy.org/");
  if(response=="OK"){
    setVpn(true);
  }
  


  return <>
      <h1>Hola {displayName}</h1>
      <hr/>
      <button type="button" class="btn position-relative">
        AdGuard
        {vpn ? <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span class="visually-hidden"></span>
        </span> : <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span class="visually-hidden"></span>
        </span>}
        
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