const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json());
        }));

        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch {
        console.log('oops', err);
    }
}