let minutes = 30;
let seconds = 0;
let timer;
let isRunning = false;

// Pega os elementos HTML corretamente
const minutesCount = document.getElementById("minutes");
const secondsCount = document.getElementById("seconds");
const startTimerButton = document.getElementById("start");
const pauseTimerButton = document.getElementById("pause");
const resetTimerButton = document.getElementById("reset");

// Atualiza o display
function updateDisplay() {
  minutesCount.textContent = String(minutes).padStart(2, "0");
  secondsCount.textContent = String(seconds).padStart(2, "0");
}

// Função principal do cronômetro
function countdown() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      alert("Time is over! Take a break.");
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateDisplay();
}

// Event listeners corretos e fora da função countdown
startTimerButton.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(countdown, 1000);
    isRunning = true;
  }
});

pauseTimerButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetTimerButton.addEventListener("click", () => {
  clearInterval(timer);
  minutes = 30;
  seconds = 0;
  isRunning = false;
  updateDisplay();
});

// Inicializa o display com os valores iniciais
updateDisplay();
