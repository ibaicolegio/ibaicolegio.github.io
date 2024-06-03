import React from 'react'

export const CanalView = ({setVentana,numero}) => {
  const src="https://dlhd.sx/embed/stream-"+numero+".php";
  return (
    <div>
      <div className="card bg-secondary" onClick={() => setVentana("TV")}>
        <h1>TV</h1>
      </div>
      <hr/>
      <iframe className="video responsive" src={src} name="iframe_a" allowFullScreen="yes" width="100%" height="500px"/>
      <a href={src}>
        <div class="alert alert-info" role="alert">
          Link
        </div>
      </a>
    </div> 
  )
}
