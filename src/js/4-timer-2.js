const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.clockface');

class Timer {
  constructor({ onTick }) {
    this.isActive = false;
    this.onTick = onTick;
    this.intervalId = null;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  onTick: updateClockFace,
});

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockFace({ hours, mins, secs }) {
  clockface.textContent = `${hours}:${mins}:${secs}`;
}
