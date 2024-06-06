import React from 'react'

export const TVCard = ({foto,color,numero,setNumero,setVentana,nombre}) => {
    const clase="btn btn-"+color;
    const urlFoto="https://www.movistarplus.es/recorte/m-NEO/ficha_m/"+foto;
  return (
    <div className="col" onClick={() => {setNumero(numero);setVentana("Canal")}}>
        <div className="card">
        <a type="button" className={clase}>{foto ? <img src={urlFoto}/> : nombre}</a>
        </div>
    </div>
  )
}
