// Callbacks, Promises, Async and Await

// # PROMISES

const posts = [
    { title: 'Post One', body: 'This is a post one' },
    { title: 'Post Two', body: 'This is a post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        posts.push(post);

        // error checking
        const error = false;
        if(!error) {
            resolve();
        } else {
            reject('Error: Something went wrong');
        }
    }, 2000);
    })
}
/*
createPost({ title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err));
*/

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
});

// Promise.all wait for all promises to be resolved
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

// const promise4 = fetch('')
// when using fetch, there might be 2 times of then required
// because we need to format the data (usually JSON), before
// able to use it
