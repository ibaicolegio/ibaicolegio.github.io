import { TVCard } from "../card/TVCard";

function TVView ({setVentana, setNumero}) {
  const fotos=["MVF1.png","DAZNLI.png","DAZNL2.png","M1SD.png","M2SD.png","DAZN3.png","DAZN4.png","MLIGA.png","MLIGS.png","CHAPIO.png","GOLF+.png","CPDEP.png","ARTHUR.png","USOP2.png","USOP3.png","VAMOSD.png","MPLUS.png","ESP.png","ESP2.png"];

  const html = fotos.map((item,i) => (<TVCard foto={item} color={i>6? "light" : "secondary"} numero={i} setNumero={setNumero} setVentana={setVentana}/>));
  
  return <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {html}
      </div>
  </>
}

export default TVView;