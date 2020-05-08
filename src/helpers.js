import shortid from 'shortid';

// GET JSON (NO WAITING)
export function getJSON(url, callback){
  return fetch(url, {headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    callback (myJson);
  });
}

// URL FRIENDLY STRING ID
export function getUID(){
  return shortid.generate();;
}

export function toTitleCase(str) {
  if (str === null || str === undefined) return "";
  return str.toString().replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}


  