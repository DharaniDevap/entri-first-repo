//Variables
var a="hello"
console.log(a)
let b = 10
console.log(b)
const c=25
console.log(c)

//data types

/* Primitive data types */
let num=10
let str="String data"
let flag=true

/* Reference data types */

let arr =[1,2,3,5,6]
let obj ={name:"nagaveni",name:"swathi",name:"Dharani"}

//operators and expression
let sum=c+num
console.log("Sum ",sum)
let diff=sum-2
console.log("difference ",diff)
let mul=diff*2
console.log("mul ",mul)
let div=mul/3
console.log("divi ",div)
let mod = mul%2
console.log("mod ",mod)

//conditional statements
if(b>0)
{
    console.log("Positive number")
}else{
    console.log("Negitive number")
}
let marks=389
if(marks<210){
    console.log("grade C")
}
else if(marks>210 && marks<400)
{
    console.log("grade B")
}else{
    console.log("grade A")
}

//Looping statements
for(let i=0;i<=10;i++){
    console.log(i)
}
for(let i=1;i<=20;i++)
{
    if(i/2==0){
        console.log("Even number "+i)
    }else{
        console.log("Odd number "+i)
    }
}