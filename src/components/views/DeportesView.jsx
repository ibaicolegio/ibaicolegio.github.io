import React from "react";

function DeportesView () {


 function pullJson(){
  fetch("https://www.codebeautify.com/URLService", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,es-ES;q=0.8,es;q=0.7",
      "content-type": "application/x-www-form-urlencoded",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Microsoft Edge\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "Referer": "https://codebeautify.org/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "path=https%3A%2F%2Fdlhd.so%2Fschedule%2Fschedule-generated.json",
    "method": "POST"
  }); ;
  fetch("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==", {
    "referrer": "",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
  }); ;
  fetch("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==", {
    "referrer": "",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
  });
    
  }


  return <>
      <div>{pullJson()}</div>
        
      
  </>
}

export default DeportesView;