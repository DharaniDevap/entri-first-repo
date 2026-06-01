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
function deleteItem(index) {
  todoArray.splice(index, 1);
  console.log(todoArray)
localStorage.setItem("todos_key",JSON.stringify(todoArray))
   showtodo();
}

function hoverItem(index){
}

function showtodo(){
    ulist.innerHTML = "";
    let length = todoArray.length;
    if(length>0){
          for(let i=0;i<length;i++){
       let id="i"
  let lielement = document.createElement("li");
  const checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.id = "id";


   lielement.innerText = todoArray[i];
  // lielement.appendChild(checkbox);
//    checkbox.addEventListener('click',()=> function(i)
// {
//    lielement.innerHTML ="<del>hello</del>"
// })
       const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteItem(i));
    lielement.appendChild(deleteButton);


    ulist.appendChild(lielement);
    }

    }else{
          ulist.innerHTML = "<h1>No Data Available</h1>";

      
    }
}