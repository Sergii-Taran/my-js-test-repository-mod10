const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.clockface');

let isActive = false;
let intervalId = null;

init();

function start() {
  if (isActive) {
    return;
  }

  const startTime = Date.now();
  isActive = true;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime;
    const time = getTimeComponents(deltaTime);

    onTick(time);
  }, 1000);
}

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function stop() {
  clearInterval(intervalId);
  isActive = false;
  const time = getTimeComponents(0);
  onTick(time);
}

function init() {
  const time = getTimeComponents(0);
  onTick(time);
}

function onTick({ hours, mins, secs }) {
  clockface.textContent = `${hours}:${mins}:${secs}`;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
