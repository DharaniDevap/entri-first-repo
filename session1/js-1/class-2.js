function print(i){
    if(i>0){
console.log(i)
            i-=1

        return  print(i)


    }else if(i==0){
        return "done"
    }
}
let result=print(5)
console.log(result)

//normal function

function difference(a,b){
    console.log("normal function ",(a-b))
}
difference(5,3)
const differ=(a,b) => console.log("Arrow Function",(a-b))
differ(5,4)

//callback
function sum(a,b){
console.log("Add",a+b)
}
function showResult(callback){
    let a=3
    let b=5
    callback(a,b)
}
showResult(sum)

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const name = "Ali";
  callback(name);
}

processUser(greet);

function hello(callback) {
  console.log("Hello Student" );
  callback()
}

function bye() {
console.log("Good Bye")
}

hello(bye);

//Add two numbers and show result with callback

//add(2, 3, showResult);

function add(a,b,callback){
callback(a,b)
}
function showResults(a,b){
console.log(a+b)
}
add(2, 3, showResults)

function check(num,callback){
    callback(num)
}
function evenOrOdd(num){
    if(num%2!=0){
        console.log("Odd Number")
    }else{
        console.log("Even Number")
    }
}
check(9,evenOrOdd)

function printArray(arr,callback){
callback(arr)
}
function showElements(array){
console.log(...array)
}
printArray([1,2,3,4],showElements)

function printArray(arr,callback){
callback(arr)
}
function showElements(array){
    let length =array.length
for(let i=0;i<length;i++){
    console.log(array[i])
}

}
printArray([1,2,3,4],showElements)