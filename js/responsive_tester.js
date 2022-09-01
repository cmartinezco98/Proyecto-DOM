const d = document;

function toOpenNewWindow(URL, Width, height) {}

export default function responsiveWindow(form, open, close) {

  const $formRT = d.querySelector(form),
    $inputs = $formRT.children;
  let ventana;

  d.addEventListener("click", (e) => {
    if (e.target.matches(open)) {
      e.preventDefault();
      const url = $inputs.url.value,
        alto = $inputs.alto.value,
        ancho = $inputs.ancho.value;

      ventana = window.open(
        url,
        "",
        `popup,width=${ancho},height=${alto},left=-10,top=0`
      );
    }

    if (e.target.matches(close)) {
      e.preventDefault();
      ventana.close();
    }
  });
}
