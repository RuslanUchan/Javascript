// Chapter 5

// Loop that has empty statements
a = [4, 3, 2, 1]
console.log(a)

for(i = 0; i < a.length; a[i++] = 0);
console.log(a)


// Infinite loop
while(true){
    console.log("Hi!")
    break;
}

// Do-while
do {
    // something
} while(++i < 10);
