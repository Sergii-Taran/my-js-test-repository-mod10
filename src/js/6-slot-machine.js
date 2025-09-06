// const startBtn = document.querySelector('.start-btn');
// const container = document.querySelector('.slot-container');
// const result = document.querySelector('.result');

// startBtn.addEventListener('click', handleStart);

// function handleStart() {
//   startBtn.disabled = true;
//   result.innerHTML = '';

//   const promises = [...container.children].map(() => {
//     return new Promise((resolve, reject) => {
//       const random = Math.random();

//       if (random > 0.5) {
//         resolve('🤑');
//       } else {
//         reject('👿');
//       }
//     });
//   });

//   Promise.allSettled(promises).then(data => {
//     const isWinner =
//       data.every(item => item.status === 'fulfilled') ||
//       data.every(item => item.status === 'rejected');

//     data.forEach((item, i) => {
//       container.children[i].textContent = '';

//       setTimeout(() => {
//         container.children[i].textContent = item.value || item.reason;

//         if (i === data.length - 1) {
//           result.innerHTML = isWinner ? 'Winner' : 'Loser';
//           startBtn.disabled = false;
//         }
//       }, 1000 * (i + 1));
//     });
//   });
// }

// const startBtn = document.querySelector('.start-btn');
// const container = document.querySelector('.slot-container');
// const result = document.querySelector('.result');

// startBtn.addEventListener('click', handleStart);

// function getRandomSymbol() {
//   return Math.random() > 0.5 ? '🤑' : '👿';
// }

// function handleStart() {
//   startBtn.disabled = true;
//   result.textContent = '';

//   const symbols = [...container.children].map(getRandomSymbol);

//   const isWinner = symbols.every(s => s === symbols[0]);

//   symbols.forEach((symbol, i) => {
//     container.children[i].textContent = '';

//     setTimeout(() => {
//       container.children[i].textContent = symbol;

//       if (i === symbols.length - 1) {
//         setTimeout(() => {
//           result.textContent = isWinner ? 'Winner' : 'Loser';
//           startBtn.disabled = false;
//         }, 1000);
//       }
//     }, 1000 * (i + 1));
//   });
// }

// const startBtn = document.querySelector('.start-btn');
// const container = document.querySelector('.slot-container');
// const result = document.querySelector('.result');

// const symbols = ['🍒', '🍋', '🍉', '⭐', '🔔', '7️⃣', '🤑'];

// startBtn.addEventListener('click', handleStart);

// function getRandomSymbol() {
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// function handleStart() {
//   startBtn.disabled = true;
//   result.textContent = '';

//   const finalSymbols = [...container.children].map(getRandomSymbol);

//   [...container.children].forEach((slot, i) => {
//     let counter = 0;
//     const spins = 10 + i * 5; // чим далі барабан, тим довше крутиться

//     const interval = setInterval(() => {
//       slot.textContent = getRandomSymbol();
//       counter++;

//       if (counter >= spins) {
//         clearInterval(interval);
//         slot.textContent = finalSymbols[i];

//         if (i === container.children.length - 1) {
//           const isWinner = finalSymbols.every(s => s === finalSymbols[0]);

//           setTimeout(() => {
//             result.textContent = isWinner ? '🎉 Winner!' : '💀 Loser';
//             startBtn.disabled = false;
//           }, 500);
//         }
//       }
//     }, 100);
//   });
// }

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.slot-container');
const result = document.querySelector('.result');

const symbols = ['🍒', '🍋', '🍉', '⭐', '🔔', '7️⃣', '🤑'];

const SPIN_TICK_MS = 100;
const BASE_SPINS = 10;
const SPINS_STEP = 5;
const RESULT_DELAY = 500;

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

startBtn.addEventListener('click', handleStart);

function handleStart() {
  startBtn.disabled = true;
  result.textContent = '';

  const finalSymbols = [...container.children].map(getRandomSymbol);

  [...container.children].forEach((slot, i) => {
    let counter = 0;
    const spins = BASE_SPINS + i * SPINS_STEP;

    const interval = setInterval(() => {
      slot.textContent = getRandomSymbol();
      counter++;

      if (counter >= spins) {
        clearInterval(interval);
        slot.textContent = finalSymbols[i];

        if (i === container.children.length - 1) {
          const isWinner = finalSymbols.every(s => s === finalSymbols[0]);
          setTimeout(() => {
            result.textContent = isWinner ? '🎉 Winner!' : '💀 Loser';
            startBtn.disabled = false;
          }, RESULT_DELAY);
        }
      }
    }, SPIN_TICK_MS);
  });
}
