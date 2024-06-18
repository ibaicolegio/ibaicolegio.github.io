import React, {useState} from "react";
import { checkAdBlock } from "adblock-checker";
import Alert from 'react-bootstrap/Alert';

const Adblock = async (adBlockDetected,setAdBlockDetected,setAdText,setAdColor) => {
  setAdBlockDetected(await checkAdBlock());
  if(adBlockDetected){
    setAdText("AdGuard 👌");
    setAdColor("success");
  }
  };

export const VPN = () => {
  const [adBlockDetected, setAdBlockDetected] = useState (false);
  const [adColor, setAdColor] = useState ("danger");
  const [warpColor, setWarpColor] = useState ("danger");
  const [adText, setAdText] = useState ("Instala AdGuard para evitar anuncios 🤨");
  const [warpText, setWarpText] = useState ("Instala WARP para evitar bloqueos 😑");

  Adblock(adBlockDetected,setAdBlockDetected,setAdText,setAdColor);

  fetch("https://cloudflare.com/cdn-cgi/trace")
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n');
    const warpLine = lines.find(line => line.startsWith('warp'));
    const warp = warpLine.split('=');
    if(warp[1]=="on"){
      setWarpText("WARP 😊");
      setWarpColor("success");
    }
  })

  const openInNewTab = (url) => {
    window.open(url);
  };

    return (
        <div className="row">
          <div className="col">
            <Alert className="m-0" variant={adColor} onClick={() => openInNewTab('https://adguard.com/en/download.html')} >
              {adText}
            </Alert>
          </div>
          <div className="col">
            <Alert className="m-0" variant={warpColor} onClick={() => openInNewTab('https://one.one.one.one/')} >
              {warpText}
            </Alert>
          </div>
        </div>
    )
  }