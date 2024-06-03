export const Header = ({setVentana}) => {
  return (
      <div className="row row-cols-1 g-4">
        <div className="col">
          <div className="card bg-light" onClick={() => setVentana("Home")}>
            <h1>Programas</h1>
          </div>
          <hr/>
        </div>
      </div>

  )
}
