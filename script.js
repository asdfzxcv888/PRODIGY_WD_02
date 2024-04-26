let startTime;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
  // Check if the stopwatch is not already running
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateStopwatch, 10);
  }
}

function updateStopwatch() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  displayTime(elapsedTime);
}

function displayTime(time) {
  const milliseconds = Math.floor(time % 1000 / 10);
  const seconds = Math.floor(time / 1000 % 60);
  const minutes = Math.floor(time / 1000 / 60 % 60);
  const hours = Math.floor(time / 1000 / 60 / 60);

  const formattedTime = 
    pad(hours) + ":" +
    pad(minutes) + ":" +
    pad(seconds) + "." +
    pad(milliseconds);

  document.getElementById("stopwatchDisplay").innerText = formattedTime;
}

function pad(number) {
  return (number < 10) ? "0" + number : number;
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null; // Reset timerInterval
}

function resetStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null; // Reset timerInterval
  elapsedTime = 0;
  displayTime(elapsedTime);
}

function recordLap() {
  const lapTime = document.createElement("li");
  lapTime.innerText = document.getElementById("stopwatchDisplay").innerText;
  document.getElementById("lapTimes").appendChild(lapTime);
}
