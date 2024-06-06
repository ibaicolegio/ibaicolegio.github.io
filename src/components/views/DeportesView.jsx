import { TVCard } from "../card/TVCard";

function DeportesView ({setVentana,setNumero}) {
  const canales=[{canal:60,nombre:"Sky Sports F1 UK"},{canal:577,nombre:"Sky Sport F1 Italy"}
  ]
  const html =  canales.map((canal) => <TVCard nombre={canal.nombre} color={"light"} numero={canal.canal} setNumero={setNumero} setVentana={setVentana}/>);
  
  return <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {html}
      </div>
  </>
}

export default DeportesView;