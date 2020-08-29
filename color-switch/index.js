const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let switcher;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

function randomColor() {
  const colorInd = randomIntegerFromInterval(0, colors.length - 1);
  const colorHex = colors[colorInd];
  document.body.style.backgroundColor = colorHex;
}

function startSwitchColor() {
  switcher = setInterval(() => randomColor(), 1500);
}

function stopSwitchColor() {
  clearInterval(switcher);
}

refs.startBtn.addEventListener("click", startSwitchColor);
refs.stopBtn.addEventListener("click", stopSwitchColor);
