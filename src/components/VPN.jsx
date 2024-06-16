import React from "react";
import { useDetectAdBlock } from "adblock-detect-react";

export const VPN = () => {
  const adBlockDetected = useDetectAdBlock();
    if(adBlockDetected){
        return (
            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
              <span className="visually-hidden"></span>
            </span>
        )
    }
    return (
        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span className="visually-hidden"></span>
        </span>
    )
  }