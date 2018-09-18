// Callbacks, Promises, Async and Await

// # ASYNC AWAIT

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

function createPost(post) {
    setTimeout(() => {
    posts.push(post);
}, 2000);
}

async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three'});

    // Get posts only executes after await
    getPosts();
}

// Async / Await / Fetch
async function fetchUsers() {
    const res = await fetch('url');

    const data = await res.json();

    console.log(data);
}

fetchUsers();
