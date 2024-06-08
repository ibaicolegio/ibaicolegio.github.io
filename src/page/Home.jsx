import React, { useState } from "react";
import { Ventana } from "../components/Ventana";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Home() {
  const [ventana, setVentana] = useState ("Home");
  const [numero, setNumero] = useState (null);
  return <>
  <div className="m-auto text-center">
    <div className="container">
      <br/>
      <Header setVentana={setVentana} ventana={ventana}/>
      <Ventana ventana={ventana} setVentana={setVentana} numero={numero} setNumero={setNumero} />
      <Footer/>
    </div>
  </div>
  </>
}

export default Home;