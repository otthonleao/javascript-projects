function updateClock() {
  const clockElement = document.querySelector(".clock");
  const hoursElement = clockElement.querySelector(".hours");
  const minutesElement = clockElement.querySelector(".minutes");
  const secondsElement = clockElement.querySelector(".seconds");

  const now = new Date();
	// Formatar horas, minutos e segundos com dois dígitos
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

updateClock();
// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);
