const d = document,
n = navigator;

export default function geolocalizacion(id, idbuttonMaps) {

const $div = d.getElementById(id),
$buttonMaps = d.getElementById(idbuttonMaps),


/** Objeto que contiene las opciones para la geolocalizacion**/
options = {
    enableHighAccuracy:true,
    timeout:5000,
    maximunAge:0
};

const success = position => { 
    const coords = position.coords;
        console.log(position);
        $div.insertAdjacentHTML("beforebegin",
        `<p> <b>Latitud:</b> ${coords.latitude} </p> 
        <p> <b>Longitud:</b> ${coords.longitude} </p>
        <p> <b>Precision:</b> ${coords.accuracy} metros </p>`
        )
    
    $buttonMaps.setAttribute("href",`https://maps.google.com/?q=${coords.latitude},${coords.longitude}`);
    } ;
    
    const error = err =>{
        $div.innerHTML = `<p> <mark> Error: ${err.code}: ${err.message} </mark> </p>`;
        console.log(`Error: ${err.code}: ${err.message}`);
    }
    
    n.geolocation.getCurrentPosition(success,error,options);
    
    }