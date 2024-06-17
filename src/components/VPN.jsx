import React, {useState} from "react";
import { checkAdBlock } from "adblock-checker";
import Alert from 'react-bootstrap/Alert';

const Adblock = async (setAdBlockDetected) => {
  setAdBlockDetected(await checkAdBlock());
  console.log(await checkAdBlock());
  };

export const VPN = () => {
  const [adBlockDetected, setAdBlockDetected] = useState (false);
  Adblock(setAdBlockDetected);

  const openInNewTab = (url) => {
    window.open(url);
  };
    if(adBlockDetected){
        return (
          <Alert variant="success" onClick={() => openInNewTab('https://adguard.com/en/download.html')} >
              AdGuard instalador correctamente!
          </Alert>
        )
    }
    return (
      <Alert variant="danger" onClick={() => openInNewTab('https://adguard.com/en/download.html')} >
        Instala AdGuard para evitar anuncios
      </Alert>
      
    )
  }