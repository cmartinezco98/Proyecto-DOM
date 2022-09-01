const d = document,
n = navigator;

export default function webCam(id,button){

    const $divCamaraWeb = d.getElementById(id);  //Elemento de video en el HTML

    //console.log(n.mediaDevices.getDisplayMedia); Funcion que tiene de dispositivos multi media

    n.mediaDevices.getUserMedia({video:true,audio:false})
    .then((stream)=>{
        
        console.log(stream);
        $divCamaraWeb.srcObject = stream; //Igualamos el Objecto al elemento HTML
        $divCamaraWeb.play(); //Mantenemos la conexion de entre la camara y el elemento HTML para que se vea una imagen fluida
        
    })
    .catch((err) => {//Atrapamos el error
        $divCamaraWeb.insertAdjacentHTML("beforebegin",`<p> <mark>¡Sucedio este error! :${err}</mark> </p>`) //Insertamos el mensaje de error en el elemento HTML
        console.log(`¡Sucedio un error!: ${err}`) 
    });


    d.addEventListener("click",(e)=>{

        if(e.target.matches(`#${button}`)){
                $divCamaraWeb.pause();
        }
    })
}