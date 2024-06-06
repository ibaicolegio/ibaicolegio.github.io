import { CanalView } from "./views/CanalView";
import DeportesView from "./views/DeportesView";
import HomeView from "./views/HomeView";
import TVView from "./views/TVView";


export function Ventana({ventana,setVentana,numero,setNumero}){
    switch (ventana) {
      case "TV":
        return <TVView setVentana={setVentana} setNumero={setNumero}/>;
      case "Deportes":
        return <DeportesView setVentana={setVentana} setNumero={setNumero}/>;
      case "Canal":
        return <CanalView setVentana={setVentana} numero={numero}/>;
      default:
        return <HomeView setVentana={setVentana}/>;
    }
}