// iterate over iterables

let incomes = [62000, 67000, 72000];
let total = 0;

// Can't be used to update the values of the iterables
// So, syntax like
// let income of incomes
// is invalid
for (const income of incomes) {
    console.log(income);
    total += income;
}

console.log(total);