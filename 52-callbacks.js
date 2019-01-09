// Callbacks, Promises, Async and Await

// # CALLBACKS

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

/*
function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}


getPosts();
createPost({ 'Post Three': 'This is post three' });
*/
// CreatePost took longer than getPosts
// This is where async programming come in

// What we can do is that, we can create callbacks
// like so

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);

// Now the getPosts waited extra seconds for the createPost to finish
