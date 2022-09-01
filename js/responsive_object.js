const d = document,
  w = window;

export default function responsiveMedia(id, mq, mobileContent, DesktopContent) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = DesktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakpoint.addListener(responsive);
  //? Evento resize que devuelve el ancho de la ventana interna del navegador
  /*  w.addEventListener("resize", (e) => {
    console.log("Evento resize", e.target.innerWidth);
  }); */
  responsive(breakpoint);
}
