const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.slot-container');
const result = document.querySelector('.result');

startBtn.addEventListener('click', handleStart);

function handleStart() {
  const promises = [...container.children].map(() => {
    return new Promise((resolve, reject) => {
      const random = Math.random();

      if (random > 0.5) {
        resolve('🤑');
      } else {
        reject('👿');
      }
    });
  });

  Promise.allSettled(promises).then(data => {
    data.forEach((item, i) => {
      setTimeout(() => {
        container.children[i].textContent = item.value || item.reason;
      }, 1000 * (i + 1));
    });
  });
}
