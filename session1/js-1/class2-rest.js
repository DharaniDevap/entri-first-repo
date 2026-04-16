function total(...array){
    let total = 0
    for(i of array){
total+=i
    }
    return total
}
console.log(total(1,2,3,4,5))

let arr =[1,2,3,4,5,6]
let [first,second, ...rest] = arr
console.log(first)
console.log(second)
console.log(rest)
let obj = {name:"Dharani",age:"30",salary:"12000",place:"Chennai"}
let {name,age,...rest1}=obj
console.log(name)
console.log(age)
console.log(rest1)

// Using setTimeout with a callback function
setTimeout(function () {
    console.log("Hello World");
}, 2000); // 2000 ms = 2 seconds

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to wait and then print
async function sayHello() {
    await delay(2000); // Wait for 2 seconds
    console.log("Hello World");
}

sayHello();
