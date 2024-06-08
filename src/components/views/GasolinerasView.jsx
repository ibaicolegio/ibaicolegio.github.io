import React,{useState} from 'react'
import { GasolineraCard } from '../card/GasolineraCard';

export default function GasolinerasView() {
  
  navigator.geolocation.getCurrentPosition(showPosition);

  const [html, setHtml] = useState (null);
  
  let latitud,
    longitud,
    gasolinerasProvincia = [],
    todasGasolinerasProvincia = [];
  function showPosition(position) {
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
    // Json
    fetch(
      "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/"
    )
      .then((resp) => resp.json())
      .then(function (data) {
        document.getElementById("cargando").style.display="none";
        let gasolineras = data.ListaEESSPrecio;
        gasolinerasProvincia = [];
        gasolineras.forEach((element) => {
          let latitud2 = element.Latitud.replace(",", ".");
          let longitud2 = element["Longitud (WGS84)"].replace(",", ".");
          const gasolinera = {
            datos: element,
            km: Dist(latitud, longitud, latitud2, longitud2),
          };
          todasGasolinerasProvincia.push(gasolinera);
        });
        todasGasolinerasProvincia.sort((a, b) => {
          return a.km - b.km;
        });
  
        gasolinerasProvincia = todasGasolinerasProvincia.slice(0, 50);
        console.log(gasolinerasProvincia);
        setHtml(gasolinerasProvincia.map((gasolinera) =><GasolineraCard gasolina={"gasolinera.datos.Precio Gasolina 95 E5"} horario={gasolinera.datos.Horario}/>));
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }
  
  // Calcular distancia
  function Dist(lat1, lon1, lat2, lon2) {
    let rad = function (x) {
      return (x * Math.PI) / 180;
    };
  
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) *
        Math.cos(rad(lat2)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(2);
  }
  

  return <>
      <h1>Gasolineras cercanas</h1>
      <button type="button" class="btn btn-secondary" >Gasolina</button>
      <button type="button" class="btn btn-secondary" >Diesel</button>
      <button type="button" class="btn btn-light" >20</button>
      <button type="button" class="btn btn-light" >50</button>
      <button type="button" class="btn btn-light" >100</button>
      <br/>
      <div id="cargando" class="spinner-border mt-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      {html}
  </>
}