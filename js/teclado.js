const d = document;
let stepX = 0,
  stepY = 0;
//************* Movimiento de pelota *************//
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    collisionStage = $stage.getBoundingClientRect(),
    collisionBall = $ball.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      if (collisionBall.left > collisionStage.left + 5) {
        e.preventDefault();
        stepX--;
      }
      break;

    case 38:
      if (collisionBall.top > collisionStage.top + 10) {
        e.preventDefault();
        stepY--;
      }
      break;

    case 39:
      if (collisionBall.right < collisionStage.right - 5) {
        e.preventDefault();
        stepX++;
      }
      break;

    case 40:
      if (collisionBall.bottom < collisionStage.bottom - 10) {
        e.preventDefault();
        stepY++;
      }
      break;
    default:
      break;
  }

  $ball.style.setProperty(
    "transform",
    `translate(${stepX * 10}px,${stepY * 10}px)`
  );
}

//************* atajos del teclado *************//
export function shortcurts(e) {
  //* Propiedades de eventos del teclado
  /*
  console.log(e.type); //tipo de evento
  console.log(e.key); // devuelve el nombre de la tecla presionada
  console.log(e.which); // devuelve el numero estandar de la tecla 
  console.log(e.ctrlKey); //envia un valor booleano si la tecla "control"es presionada
  console.log(e.altKey); // envia un valor booleano si la tecla "alt" es presionada
  */

  if (e.altKey && e.which == "65") {
    alert("Presionaste 'alt+a'");
  }

  if (e.altKey && e.which == "80") {
    prompt("Presionaste 'alt+p', ingresa tu nombre");
    alert("Igual no hace nada XD");
  }
}
