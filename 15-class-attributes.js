function classof(o) {
    if (o == null) return "Null";
    if (o == undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(classof(null))
console.log(classof(1))
console.log(classof(""))
console.log(classof(false))
console.log(classof({}))
console.log(classof([]))
console.log(classof(/./))
console.log(classof(new Date()))
console.log(classof(new classof()))
