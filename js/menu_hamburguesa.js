const d = document;

//****************************** Funciones ******************************/

/************************************************************************************ 
 Esta funcion desabilitara el scroll cuandoel menu este en pantalla
*************************************************************************************/
function deshabilitarScroll() {
  const $html = document.documentElement;

  if ($html.style.overflow == "hidden") {
    $html.style.setProperty("overflow", "auto");
  } else {
    $html.style.setProperty("overflow", "hidden");
  }
}

/************************************************************************************ 
 Esta funcion esta relacionado a la Navegacion Principal y al Boton Hamburguesa
 se hace el cambio de la clase ".activado" con el metodo toggle()
*************************************************************************************/
function cambioClaseActivado(btnHamburguesa, menuPanel) {
  d.querySelector(menuPanel).classList.toggle("activado");
  d.querySelector(btnHamburguesa).firstElementChild.classList.toggle(
    "activado"
  );
}

/************************************************************************************ 
 
*************************************************************************************/
function toChangeColorOfHamburguerBtnBars(e, bool) {
  e.target.firstElementChild.classList.toggle("active", bool);
}

export default function menuHamburguesa(btnHamburguesa, menuPanel, btnMenu) {
  //****************************** Delegacion de eventos ******************************/

  d.addEventListener("click", (e) => {
    //? Metodo matches() valida si contiene el string, si coincide se activa el evento
    if (e.target.matches(btnHamburguesa) || e.target.matches(btnMenu)) {
      cambioClaseActivado(btnHamburguesa, menuPanel);
      deshabilitarScroll();
    }
  });

  
    d.addEventListener("mouseover", (e) => {
      if (e.target.matches(btnHamburguesa)) {
        toChangeColorOfHamburguerBtnBars(e, true);
      }
      e.target.addEventListener("mouseleave", (e) => {
        if (e.target.matches(btnHamburguesa)) {
          toChangeColorOfHamburguerBtnBars(e, false);
        }
      });
    });
  
}
