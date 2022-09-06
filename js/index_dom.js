import menuHamburguesa from "./menu_hamburguesa.js";
import { relojdigital, alarma } from "./reloj.js";
import { moveBall, shortcurts } from "./teclado.js";
import btnScroll from "./btn_scroll.js";
import countdown from "./countdown.js";
import darkTheme from "./dark_theme.js";
import responsiveMedia from "./responsive_object.js";
import responsiveTester from "./responsive_tester.js";
import networkStatus from "./network_status.js";
import userDevice from "./device_info.js";
import webCam from "./webcam.js";
import geolocalizacion from "./geolocalizacion.js";
import searchFilter from "./filtro_busqueda.js";
import sorteo from "./sorteo.js";
import carrusel from "./carrusel.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./smart_video.js";
//192.168.39.114 puerto wifi

document.addEventListener("DOMContentLoaded", (e) => {
  //window.scrollTo(0, 50); // El Scroll de la pagina inicia en estas coordenadas,mas exactamente en la Seccion 1
  menuHamburguesa("#btn-nav-hamburguesa", "#nav-principal", "#btn-enlace");
  relojdigital("#reloj-digital", "#btn-inciarReloj", "#btn-detenerReloj");
  alarma("assets/alarma.mp3", "#btn-iniciaAlarma", "#btn-detenerAlarma");
  countdown(
    "#seccion3",
    "December , 2022 00:00:00 ",
    "FELIZ AÑO, TU PUEDES BRO"
  );
  btnScroll("#btn-scroll");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    '<a href="https://youtu.be/mPbclTnMLlc" target="blank">Bohemian Rhapsody</a>',
    '<iframe width="560" height="300" src="https://www.youtube.com/embed/mPbclTnMLlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    '<a href="https://www.google.com/maps/dir//Cra.+16a+%2312-2+a+12-88+Mosquera,+Cundinamarca/@4.722707,-74.2269339,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e3f780ef8b3a133:0x7c5aaf0ff3124aba!2m2!1d-74.2269339!2d4.722707" target="blank">Mi Casita</a>',
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2721995671836!2d-74.2291225851585!3d4.722712342781149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f780ef8b3a133%3A0x7c5aaf0ff3124aba!2sCra.%2016a%20%2312-2%20a%2012-88%2C%20Mosquera%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1643303136525!5m2!1ses!2sco" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  );

  responsiveTester("#formRT", "#btn-open-RW", "#btn-close-RW");
  networkStatus("network");
  userDevice("user-device");
  webCam("webcam", "btn-photo");
  geolocalizacion("geolocalizacion", "maps");
  searchFilter(".card-filter", ".card");
  sorteo("lista-sorteo", "#btn-sorteo");
  carrusel();
  scrollSpy();
  smartVideo();
});

darkTheme("#btn-dark-theme", "dark-theme", "panel");

//* Eventos del teclado
//? keydown = Se ejecuta cuando la tecla es presionada
//? keyup = Se ejecuta cuando la tecla es terminada de presionar
//? keypress = Se ejecuta mientras la tecla se encuentre presionada
document.addEventListener("keydown", (e) => {
  shortcurts(e);
  moveBall(e, ".ball", ".stage");
});
