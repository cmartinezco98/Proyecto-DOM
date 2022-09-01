const d = document;

export default function sorteo(listaSorteo,btnSorteo){

const $listaSorteo = d.getElementById(listaSorteo),
$btnSorteo = d.getElementById(btnSorteo);

const lenguajes =["Python","Java","Rust","C","C#","JavaScript","C++","PHP","GO"];

lenguajes.forEach(el=>{
    $listaSorteo.innerHTML += `<li> ${el} </li>`;
    });

   

d.addEventListener("click",(e)=>{

    if(e.target.matches(btnSorteo)){

    lenguajes.sort(()=> Math.random() - 0.5);
    $listaSorteo.innerHTML = " ";
    lenguajes.forEach(el=>  $listaSorteo.innerHTML += `<li> ${el} </li>`);

    }
    });

}

