import { TVCard } from "../card/TVCard";

function TVView ({setVentana, setNumero}) {
  const canales=[{canal:537,foto:"MVF1.png"},{canal:538,foto:"DAZNLI.png"},{canal:43,foto:"DAZNL2.png"},{canal:445,foto:"M1SD.png"},{canal:446,foto:"M2SD.png"},
    {canal:447,foto:"DAZN3.png"},{canal:448,foto:"DAZN4.png"},{canal:84,foto:"MLIGA.png"},{canal:539,foto:"MLIGS.png"},{canal:435,foto:"CHAPIO.png"},
    {canal:528,foto:"GOLF+.png"},{canal:436,foto:"CPDEP.png"},{canal:438,foto:"ARTHUR.png"},{canal:526,foto:"USOP2.png"},{canal:527,foto:"USOP3.png"},
    {canal:521,foto:"VAMOSD.png"},{canal:437,foto:"MPLUS.png"},{canal:524,foto:"ESP.png"},{canal:525,foto:"ESP2.png"},{canal:533,foto:"TVE.png"},
    {canal:536,foto:"LA2.png"},{canal:531,foto:"A3.png"},{canal:535,foto:"C4.png"},{canal:532,foto:"T5.png"},{canal:534,foto:"SEXTA.png"}
  ]
  const html =  canales.map((canal) => <TVCard foto={canal.foto} color={"light"} numero={canal.canal} setNumero={setNumero} setVentana={setVentana}/>);
  
  return <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {html}
      </div>
  </>
}

export default TVView;