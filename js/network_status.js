const d = document,
n = navigator,
w = window;

export default function networkStatus(divNetwork){

const $divNetwork = d.getElementById(divNetwork);

w.addEventListener("online",goOnline);
w.addEventListener("offline",goOffline);

function removeMessageStatus (){

    setTimeout(()=>{ 
       $divNetwork.classList.remove('red-status-mensaje-activado');      
   },4000);
    }  
   

function goOnline(){
console.log("Online");
$divNetwork.classList.add('red-status-mensaje-activado');
$divNetwork.style.background = 'green'
    $divNetwork.innerHTML= "";
    $divNetwork.textContent = "Conexion restablecida";
   removeMessageStatus();
   
}


function goOffline(){
    console.log("Offline");
    $divNetwork.classList.add('red-status-mensaje-activado');
    $divNetwork.style.background = 'red'
    $divNetwork.innerHTML= "";
    $divNetwork.textContent = "Conexion perdida";
    removeMessageStatus();
    
    }
}