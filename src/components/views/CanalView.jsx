import React from 'react'

export const CanalView = ({setVentana,numero}) => {
  
  const src="https://dlhd.sx/embed/stream-"+numero+".php";

  return (
    <div>
      <div class="row">
        <div class="col">
          <div className="card bg-secondary text-white" onClick={() => setVentana("TV")}>
            <h2>TV</h2>
          </div>
        </div>
        <div class="col">
          <div className="card bg-secondary text-white" onClick={() => setVentana("Deportes")}>
            <h2>Deportes</h2>
          </div>
        </div>
      </div>
      
      <hr/>
      <iframe className="video responsive" src={src} name="iframe_a" allowFullScreen="yes" width="100%" height="500px"/>
      <a href={src}>
        <div className="alert alert-info" role="alert">
          Link
        </div>
      </a>
    </div> 
  )
}
