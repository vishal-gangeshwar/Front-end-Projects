let inputEl = document.getElementById("defuser");
let timerText = document.getElementById("timer");

let count = 10;
let intervalId = setInterval(function () {
  timerText.textContent = count;
  count = count - 1;
  if (count === 0) {
    timerText.textContent = "BOOM !!!";
    clearInterval(intervalId);
  }
  if (count !== 0 && inputEl.value === "defuse") {
    timerText.textContent = "You Did It";
    clearInterval(intervalId);
  }
}, 1000);
