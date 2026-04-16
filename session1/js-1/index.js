console.log("Hello world")
function add(a,b){
    console.log("add "+ (a+b))
}
add(2,3)
function multi(a,b,c){
    console.log("product "+(a*b*c))
}
multi(2,3,4)
function square(a){
    console.log(a*a)
}
let pow=square(6)
console.log(pow)
function oddEven(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            console.log("even ",arr[i])
        }else{
            console.log("Odd ",arr[i])
        }

    }
}
let arr=[2,3,4,5,9]
oddEven(arr)

function check(num){
    if(num==0)
        console.log( "Zero")
    else if(num<0)
        console.log( "negitive")
    else
                console.log( "Positive")

}
check(10)
check(-3)
check(0)
check("hello")
function markReport(a,b,c,d,e,f){
    let total = a+b+c+d+e+f
    let avg = total/6
    console.log("total ",total+" Average ",avg)
    if(total>=210){
        console.log("pass ")
    }else{
        console.log("fail")
    }
}
markReport(90,80,75,60,78,57)
markReport(31,24,34,34,32,25)
function checkZero(num){
    if(num!=0){
console.log("number", num);
    }
}
checkZero(5)
checkZero(0)