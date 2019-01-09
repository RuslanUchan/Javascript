const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
});

// Promise Chaining
promise
    .then(result => result + '!')
    .then(r => {
        throw Error;
        console.log(r);
    })
    .catch(() => console.log('Error!'))
    .then(rr => console.log(rr + '!'));