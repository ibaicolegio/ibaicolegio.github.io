import React from 'react'

export const GasolineraCard = (props) => {
  return (
      <div class="col w-75 mx-auto">
        <div class="card mt-2 fs-6 mt-4 bg-secondary bg-gradient">
          <a href="https://maps.google.com/?q=43.731806,-7.878278" class="btn btn-light btn-lg active fs-6 bg-success bg-gradient" role="button" aria-pressed="true">
            {props.nombre}
            <span class="badge text-bg-secondary gasolina" style="display:none">95: {props.gasolina} €/L</span>
            <span class="badge text-bg-secondary diesel" style="display:none">A: {props.diesel} €/L</span>
            <span class="badge text-bg-warning">{props.distancia}</span>
            <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">Mas cercana</span>
          </a>{props.horario}
        </div>
      </div>
  )
}
