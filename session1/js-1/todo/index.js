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
       let id="i"
  let lielement = document.createElement("li");
  var checkbox = document.createElement('input');
checkbox.type = "checkbox";
// checkbox.name = "name";
// checkbox.value = "value";
checkbox.id = "id";

// var label = document.createElement('label')
// label.htmlFor = "id";
// label.appendChild(document.createTextNode('text for label after checkbox'));


   lielement.innerText = todoArray[i];
   lielement.appendChild(checkbox);

    ulist.appendChild(lielement);

    }
}