import { TVCard } from "../card/TVCard";

function DeportesView ({setVentana,setNumero}) {
  const F1=[{canal:537,nombre:"DAZN F1 ES"},{canal:60,nombre:"Sky Sports F1 UK"},{canal:577,nombre:"Sky Sport F1 IT"},{canal:274,nombre:"Sky Sport F1 DE"},{canal:273,nombre:"Canal+ F1 FR"}
  ]
  const Futbol=[{canal:84,nombre:"Movistar Laliga"},{canal:435,nombre:"Movistar Liga de Campeones"},{canal:415,nombre:"SuperSport LaLiga"}
  ]
  const Golf=[{canal:318,nombre:"GOLF Channel USA"},{canal:70,nombre:"Sky Sports Golf UK"},{canal:574,nombre:"Sky Sports Golf Italy"},{canal:422,nombre:"SuperSport Golf"}
  ]
  const Tenis=[{canal:40,nombre:"Tennis Channel"},{canal:576,nombre:"Sky Sport Tennis Italy"},{canal:423,nombre:"SuperSport Tennis"}
  ]
  const Otros=[{canal:38,nombre:"Sky Sports Main Event"},{canal:375,nombre:"ESPN Deportes"},{canal:643,nombre:"FOX Deportes USA"},
    {canal:51,nombre:"ABC USA"},{canal:52,nombre:"CBS USA"},{canal:53,nombre:"NBC USA"}
  ]
  const htmlF1 =  F1.map((canal) => <TVCard nombre={canal.nombre} color={"light"} numero={canal.canal} setNumero={setNumero} setVentana={setVentana}/>);
  const htmlFutbol =  Futbol.map((canal) => <TVCard nombre={canal.nombre} color={"light"} numero={canal.canal} setNumero={setNumero} setVentana={setVentana}/>);
  const htmlTenis =  Tenis.map((canal) => <TVCard nombre={canal.nombre} color={"light"} numero={canal.canal} setNumero={setNumero} setVentana={setVentana}/>);
  const htmlGolf =  Golf.map((canal) => <TVCard nombre={canal.nombre} color={"light"} numero={canal.canal} setNumero={setNumero} setVentana={setVentana}/>);
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
      <h2>Tenis</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {htmlTenis}
      </div>
      <hr/>
      <h2>Golf</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {htmlGolf}
      </div>
      <hr/>
      <h2>Otros</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {htmlOtros}
      </div>
  </>
}

export default DeportesView;