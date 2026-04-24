function fileopertion(){
    console.log("Downloading file");
setTimeout(function(){
    console.log("File Downloaded")
    setTimeout(function(){
    console.log("open file")
},2000)
},2000)
}
fileopertion()
setTimeout(function(){
    console.log("Wake up")
    setTimeout(function(){
        console.log("Brush teeth")
setTimeout(function(){
console.log("Take bath")
setTimeout(function(){
    console.log("Eat breakfast")
    setTimeout(function(){
        console.log("Go to class")
    },5000)
},4000)
},3000)
    },2000)
},1000)
