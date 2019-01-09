let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr);

for (let [key, value] of valMap.entries()) {
    console.log(`${key} points to ${value}`);
}