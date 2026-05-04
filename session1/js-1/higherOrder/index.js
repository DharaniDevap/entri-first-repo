function hello(name,callback){
return callback(name)
}

function call(name){
    //console.log("hello",name)
    return "hello" +name;
}
hello("Poorvi",call)

let arr = [1,2,3,4]
let res = arr.map(function(num){
    //console.log(res)
    return num*2
})
console.log(res)