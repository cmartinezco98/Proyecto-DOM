const d = document,
  w = window;

export default function validacionFormulario() {

  const $inputs = d.querySelectorAll(".contact-form [required]"),
    $form = d.querySelector(".contact-form");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern,
        regExp = new RegExp(pattern);

      if (pattern && $input.value !== "") {
        return !regExp.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        $input.value == ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });


  //Envio de formulario 
  d.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Enviado formulario");

  });

}
