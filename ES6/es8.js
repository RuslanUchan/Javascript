let o = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch',
}

Object.keys(o).forEach((key, index) => {
    console.log(key, o[key]);
});

Object.values(o).forEach(value => {
    console.log(value);
});

Object.entries(o).forEach(value => {
    console.log(value);
});

// Some scenario
const arr = Object.entries(o).map(value => {
    return value[1] + value[0].replace('username', '');
});

console.log(arr);
