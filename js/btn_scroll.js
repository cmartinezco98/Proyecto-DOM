const d = document;

//****************************** Funciones ******************************/

/************************************************************************
 * Esta función lleva el scroll de la pagina al las coordenadas x=0 y=0 *
 * al inicio de la pagina.                                              *
 ***********************************************************************/
function toGoToStartPage() {
  window.scroll(0, 0);
}

/************************************************************************
 * Esta funcion hace visible el boton Scroll cuando la pagina se        *
 * encuentre en las coordenadas Y=650 agregando la clase disabled al    *
 * al elemento $btnScroll                                               *
 ***********************************************************************/
function showButtonScroll($btnScroll) {
  window.scrollY <= 650
    ? $btnScroll.classList.add("disabled")
    : $btnScroll.classList.remove("disabled");
}

/************************************************************************
 * Esta funcion agrega o remueve la clase "active" del elemento         *
 * la cual recibe como parametro el evento y un valor booleano para     *
 * usarlo con el metodo toggle                                          *
 ***********************************************************************/
function classArrowScroll(e, bool) {
  e.target.firstElementChild.classList.toggle("active", bool);
}

//*************************** export default ************************************//

export default function btnScroll(btnScroll) {
  const $btnScroll = d.querySelector(btnScroll);

  //****************************** Delegacion de eventos ******************************/
  d.addEventListener("click", (e) => {
    //? Metodo matches() valida si contiene el string, si coincide se activa el evento

    if (e.target.matches(btnScroll)) {
      toGoToStartPage();
    }
  });

  d.addEventListener("scroll", (e) => {
    showButtonScroll($btnScroll);
  });

    $btnScroll.addEventListener("mouseover", (e) => {
      classArrowScroll(e, true);
    });
    $btnScroll.addEventListener("mouseleave", (e) => {
      classArrowScroll(e, false);
    });
  
}
