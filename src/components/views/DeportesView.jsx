import { TVCard } from "../card/TVCard";

function DeportesView ({setVentana,setNumero}) {
  const F1=[{canal:60,nombre:"Sky Sports F1 UK"},{canal:577,nombre:"Sky Sport F1 Italy"}
  ]
  const Futbol=[{canal:415,nombre:"SuperSport LaLiga"}
  ]
  const Otros=[{canal:375,nombre:"ESPN Deportes"},{canal:643,nombre:"FOX Deportes USA"}
  ]
  const htmlF1 =  F1.map((canal) => <TVCard nombre={canal.nombre} color={"light"} numero={canal.canal} setNumero={setNumero} setVentana={setVentana}/>);
  const htmlFutbol =  Futbol.map((canal) => <TVCard nombre={canal.nombre} color={"light"} numero={canal.canal} setNumero={setNumero} setVentana={setVentana}/>);
  const htmlOtros =  Otros.map((canal) => <TVCard nombre={canal.nombre} color={"light"} numero={canal.canal} setNumero={setNumero} setVentana={setVentana}/>);
  return <>
      <h2>F1</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {htmlF1}
      </div>
      <hr/>
      <h2>Futbol</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {htmlFutbol}
      </div>
      <hr/>
      <h2>Otros</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {htmlOtros}
      </div>
  </>
}

export default DeportesView;