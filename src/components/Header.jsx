export const Header = ({setVentana,ventana}) => {
  return (
      <div className="row row-cols-1 g-4">
        <div className="col">
          <div className="card bg-secondary text-white" onClick={() => setVentana("Home")}>
            <h1>{ventana=="Home" ? "Inicio" : "Volver al inicio"}</h1>
          </div>
          <hr/>
        </div>
      </div>

  )
}
