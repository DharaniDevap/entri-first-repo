// let button = document.getElementById("btn")
// button.addEventListener("click",clickfun)
// function clickfun(){
//     alert("Hello World")
// }
let addbtn = document.getElementById("add")
let result =document.getElementById("result")
function sutractTwoNumbers(){
    let number1 = document.getElementById("num1").value
    let number2 = document.getElementById("num2").value
    let diff=Number(number1)-Number(number2)
    result.innerText = "Results:"+diff
}
addbtn.addEventListener("click",sutractTwoNumbers)