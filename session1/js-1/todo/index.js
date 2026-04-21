let input = document.getElementById("inputbox");
let button = document.getElementById("button");
let ulist = document.getElementById("menulist");
let todoArray = JSON.parse(localStorage.getItem("todos_key")) || [];
showtodo();
button.addEventListener("click",function(){
    let text = input.value;
       todoArray.push(text);
    showtodo();
    localStorage.setItem("todos_key",JSON.stringify(todoArray))
   input.value="";
   

})

function showtodo(){
    ulist.innerHTML = "";
    let length = todoArray.length;
    for(let i=0;i<length;i++){
  let lielement = document.createElement("li");
   lielement.innerText = todoArray[i];
    ulist.appendChild(lielement);

    }
}