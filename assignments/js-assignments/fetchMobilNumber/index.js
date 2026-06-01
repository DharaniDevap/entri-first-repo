let qouteText = document.getElementById("qoutetext");
let qouteAuthor = document.getElementById("qouteauthor");
let root = document.getElementById("root");

let apiQoute =[]
function generateQoute(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
        return response.json()
    }).then(data=>{
    apiQoute=data
    data.map(function(item){
    let list = document.createElement("li")
    list.innerText =item.phone
    root.appendChild(list)

    })
   // let randomdata = apiQoute[Math.floor(Math.random()*data.length)]
     //   qouteText.innerText =randomdata.text
    })
}
//qouteBtn.addEventListener("click",generateQoute);
generateQoute()
