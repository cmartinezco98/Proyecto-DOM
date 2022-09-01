const d = document;
//****************************** Funciones ******************************/

export function relojdigital(reloj, btnIniciar, btnDetener) {
  let clockTempo;

  //****************************** Delegacion de eventos ******************************/
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnIniciar)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(reloj).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnDetener)) {
      clearInterval(clockTempo);
      d.querySelector(btnIniciar).disabled = false;
      d.querySelector(reloj).innerHTML = `<h3>00:00:00</h3>`;
    }
  });
}

export function alarma(sonido, btnIniciar, btnDetener) {
  let alarmaTempo;
  const $alarma = d.createElement("audio");
  $alarma.setAttribute("src", sonido);

  //****************************** Delegacion de eventos ******************************/
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnIniciar)) {
      alarmaTempo = setTimeout(() => {
        $alarma.play();
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnDetener)) {
      clearTimeout(alarmaTempo);
      $alarma.pause();
      $alarma.currentTime = 0;
      d.querySelector(btnIniciar).disabled = false;
    }
  });

  d.addEventListener("keydown", (e) => {
    if (e.keyCode == "83" && e.altKey) {
      clearTimeout(alarmaTempo);
      $alarma.pause();
      $alarma.currentTime = 0;
      d.querySelector(btnIniciar).disabled = false;
    }
  });
}
