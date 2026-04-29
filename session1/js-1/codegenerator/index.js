let qouteText = document.getElementById("qoutetext");
let qouteAuthor = document.getElementById("qouteauthor");
let qouteBtn = document.getElementById("qoutebtn");

let apiQoute =[]
function generateQoute(){
    fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json").then(response =>{
        return response.json()
    }).then(data=>{
    apiQoute=data
    let randomdata = apiQoute[Math.floor(Math.random()*data.length)]
        qouteText.innerText =randomdata.text
    })
}
qouteBtn.addEventListener("click",generateQoute);
