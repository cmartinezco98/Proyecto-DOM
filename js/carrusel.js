const d = document;

//****************************** Funciones ******************************/

/*********************************************************************** 
Nombre: removerClasesMovimientoSliders
Paramtros: Sliders(NodeElement), positionSlider(Contador posicion actual del Carrusel)

Este metodo remueve las clases "active","slide-prev" y "slide-next" del 
elemento HTML
***********************************************************************/

function removerClasesMovimientoSliders(sliders, positionSlider) {
  sliders[positionSlider].classList.remove("active");

  // remover clase prev
  if (positionSlider - 1 < 0) {
    sliders[sliders.length - 1].classList.remove("slide-prev");
  } else {
    sliders[positionSlider - 1].classList.remove("slide-prev");
  }

  // remover clase next
  if (positionSlider + 1 > sliders.length - 1) {
    sliders[0].classList.remove("slide-next");
  } else {
    sliders[positionSlider + 1].classList.remove("slide-next");
  }
}

/*********************************************************************** 
Nombre: agregarClaseSliderNext
Parametros: Sliders(NodeElement), positionSlider(Contador posicion actual del Carrusel)
Return: Retorna el numero del contador menos 1

Este metodo agrega las clases "active","slide-prev" y "slide-next" al
elemento HTML cuando es presionado el boton Next del carrusel
***********************************************************************/

function agregarClaseSliderNext(sliders, positionSlider) {
  sliders[positionSlider].classList.add("slide-prev");

  // agregar clase active
  if (positionSlider + 1 > sliders.length - 1) {
    sliders[0].classList.add("active");
    positionSlider = 0;
  } else {
    sliders[positionSlider + 1].classList.add("active");
    positionSlider++;
  }

  //agergar clase next
  if (positionSlider + 1 > sliders.length - 1) {
    sliders[0].classList.add("slide-next");
  } else {
    sliders[positionSlider + 1].classList.add("slide-next");
  }

  return positionSlider;
}

/*********************************************************************** 
Nombre: agregarClaseSliderNext
Parametros: Sliders(NodeElement), positionSlider(Contador posicion actual del Carrusel)
Return: Retorna el numero del contador menos 1

Este metodo agrega las clases "active","slide-prev" y "slide-next" al
elemento HTML cuando es presionado el boton Prev del carrusel
***********************************************************************/

function agregarClaseSliderPrev(sliders, positionSlider) {
  sliders[positionSlider].classList.add("slide-next");

  // agregar clase active
  if (positionSlider - 1 < 0) {
    sliders[sliders.length - 1].classList.add("active");
    positionSlider = sliders.length - 1;
  } else {
    sliders[positionSlider - 1].classList.add("active");
    positionSlider--;
  }

  //agergar clase prev
  if (positionSlider - 1 < 0) {
    sliders[sliders.length - 1].classList.add("slide-prev");
  } else {
    sliders[positionSlider - 1].classList.add("slide-prev");
  }

  return positionSlider;
}

//****************************** Function default ******************************/

export default function carrusel() {
  const $btnPrev = d.querySelector("#prev"),
    $btnNext = d.querySelector("#next"),
    $contentSliders = d.querySelectorAll(".slider-slide");
  let positionSlider = 0;

//****************************** Delegacion de eventos ******************************/
  d.addEventListener("click", (e) => {
    if (e.target === $btnNext) {
      e.preventDefault();
      removerClasesMovimientoSliders($contentSliders, positionSlider);
      positionSlider = agregarClaseSliderNext($contentSliders, positionSlider);
      console.log(positionSlider);
    }
    if (e.target === $btnPrev) {
      e.preventDefault();
      removerClasesMovimientoSliders($contentSliders, positionSlider);
      positionSlider = agregarClaseSliderPrev($contentSliders, positionSlider);
      console.log(positionSlider);
    }
  });
}
