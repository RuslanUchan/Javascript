const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hello from Promise 1');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hello from Promise 2');
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hello from Promise 3');
});

Promise.all([p1, p2, p3])
    .then(value => {
        console.log(value);
    });