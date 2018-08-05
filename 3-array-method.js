a = [1, 2, 3, 4, 5];

console.log("Join:", a.join());
console.log("Reverse:", a.reverse());
console.log("Sort:", a.sort());

b = [1111, 222, 33, 4];
console.log("Interesting sort");
console.log(b.sort());
console.log(b.sort(function(a,b){
    return a-b;
}));

console.log("Concat:", a.concat([6, 7]));
console.log("Slice:", a.slice(0, 3));

// Array splice()
var a = [1, 2, 3, 4, 5];
a.splice(2, 0, 'a', 'b');
a.splice(2, 2, [1, 2], 3);

// a.splice(index_to_slice, return_how_many, **add_from_selected_index)
