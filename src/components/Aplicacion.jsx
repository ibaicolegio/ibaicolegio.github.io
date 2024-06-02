import React from 'react'

export const Aplicacion = (props) => {
  return (
        <div className="col">
          <div className="card">
            <a
              href={"https://ibaicolegio.github.io/"+props.nombre}
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              {props.nombre} <span className="badge text-bg-secondary">V{props.version}</span>

            </a>
          </div>
        </div>
  )
}
