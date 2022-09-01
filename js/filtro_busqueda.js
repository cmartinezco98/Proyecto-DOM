const d = document;

export default function searchFilter(input,selector){

    d.addEventListener("input",e=>{

if(e.target.matches(input)){

if(e.key === "Escape"){
    e.target.value="";
}


d.querySelectorAll(selector).forEach(el => {
   // console.log(el.textContent);  
    el.textContent.toLowerCase().includes(e.target.value)
    ?el.classList.remove("filter")
    :el.classList.add("filter")
})
}}
    )
}