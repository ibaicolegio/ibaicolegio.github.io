import React from 'react'

export const TVCard = ({foto,color,numero,setNumero,setVentana}) => {
    const canales=[537,538,43,445,446,447,448,84,539,435,528,436,438,526,527,521,437,524,525];
    const clase="btn btn-"+color;
    const urlFoto="https://www.movistarplus.es/recorte/m-NEO/ficha_m/"+foto;
  return (
    <div className="col" onClick={() => {setNumero(canales[numero]);setVentana("Canal")}}>
        <div className="card">
        <a type="button" className={clase}><img src={urlFoto}/></a>
        </div>
    </div>
  )
}
