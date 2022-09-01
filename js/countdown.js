const d = document;

//************* Countdown *************//

export default function countdown(selector, date, message) {
  const $idCountdown = d.querySelector(selector),
    $message = document.createElement("h2"),
    errorMessage = "FECHA NO PERMITIDA";

  let diffDates, days, hours, minutes, seconds;

  const intervalCountdown = setInterval(() => {
    const futureDate = new Date(date),
      now = new Date();

    diffDates = futureDate.getTime() - now.getTime(); //? Calculate the difference of the dates

    //** Conversion of time**//
    //? (1000*60*60*24) -->Mls -> Seconds -> Minutes -> Hours -> Days
    days = Math.round(diffDates / (1000 * 60 * 60 * 24));

    if (days == 0) {
      hours = futureDate.getHours() - now.getHours();

      if (hours == 0) {
        minutes = futureDate.getMinutes() - now.getMinutes();
      }

      if (minutes == 0) {
        seconds = futureDate.getSeconds() - now.getSeconds();
      } else {
        seconds = Math.round(59 - now.getSeconds());
      }
    } else {
      hours = Math.round(23 - now.getHours());
      minutes = Math.round(59 - now.getMinutes());
      seconds = Math.round(59 - now.getSeconds());
    }

    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
      $message.textContent = message;
      $idCountdown.append($message);
      clearInterval(intervalCountdown);
    } else if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
      $message.textContent = errorMessage;
      $idCountdown.append($message);
      clearInterval(intervalCountdown);
      return;
    }

    $idCountdown.children[1].firstElementChild.textContent = `Faltan
    ${days}
    dias 
    ${hours}
    horas 
    ${minutes}
    minutos 
    ${seconds}
    segundos `;
  }, 1000);
}
