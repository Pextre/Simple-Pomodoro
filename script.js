let currentTimer;
let active = false;
let interval = false;

function timer(duration, display) {

  currentTimer = setInterval(function () {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    duration--;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    if (duration === -1 && !interval) {

      document.querySelector('audio').play();
      stopTimer(true);
      interval = true;
      active = true;
      timer(900,display);// descanso de 15 minutos

    }else if(duration === -1 && interval){

      document.querySelector('audio').play();
      stopTimer(true);
      interval = false;

    }

    display.innerHTML = minutes + ":" + seconds;

  }, 1000);
}

function startTimer(start = false) {

  let display = document.querySelector('.timer > p');
  let duration = document.querySelector('.options > select').value * 60;

  if (start && !active) {

    timer(duration, display);
    active = true;

  } else if (start && active) {

    stopTimer(true);
    timer(duration, display);
    active = true;

  }

}

function stopTimer(stop = false) {

  if (stop) {
    clearInterval(currentTimer);
    active = false;
  }

}