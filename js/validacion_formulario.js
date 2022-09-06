const d = document,
w = window;

export default function validacionFormulario(){
const $inputs = d.querySelectorAll(".contact-form [required]"),
$form = d.querySelector(".contact-form");

$inputs.forEach((input)=>{
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error","none");
    input.insertAdjacentElement("afterend",$span);
}
)


}