const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.slot-container');
const result = document.querySelector('.result');

startBtn.addEventListener('click', handleStart);

function handleStart() {
  startBtn.disabled = true;
  result.innerHTML = '';

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
    const isWinner =
      data.every(item => item.status === 'fulfilled') ||
      data.every(item => item.status === 'rejected');

    data.forEach((item, i) => {
      container.children[i].textContent = '';

      setTimeout(() => {
        container.children[i].textContent = item.value || item.reason;

        if (i === data.length - 1) {
          result.innerHTML = isWinner ? 'Winner' : 'Loser';
          startBtn.disabled = false;
        }
      }, 1000 * (i + 1));
    });
  });
}
