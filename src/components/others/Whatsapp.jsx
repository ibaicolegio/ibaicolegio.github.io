import React from 'react'

export const Whatsapp = () => {
    const openInNewTab = (url) => {
        window.open(url);
      };

  return (
    <div>
        <a onClick={() => openInNewTab('whatsapp://send?text=https://www.irm.eus')} className="text-decoration-none">
          <div className="card">
            <button className="btn btn-success btn-lg active text-center">
              Compartir
            </button>
          </div>
        </a>
    </div>
    
  )
}
