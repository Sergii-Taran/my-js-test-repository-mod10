const promise = new Promise(resolve => {
  resolve(10);
});

promise
  .then(value => {
    new Promise(resolve => {
      resolve(value * 2);
    });
  })
  .then(value => console.log(value));
