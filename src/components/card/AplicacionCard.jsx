import React from 'react'

export const AplicacionCard = (props) => {
  return (
        <div className="col">
          <div className="card">
            <button
              onClick={() => props.setVentana(props.nombre)}
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              {props.nombre} <span className="badge text-bg-secondary">V{props.version}</span>
            </button>
          </div>
        </div>
  )
}
