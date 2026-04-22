let obj=[
    {
    id: 1,
    name: "nani",
    age: "10",
    sub:{
        sub1: "math",
        sub2: "telugu"
    },
    },
    {
        id: 2,
        name: "ramu",
        age: "20",
        sub:{
            sub1: "english",
            sub2: "math"
        },
    },
    {
        id: 3,
        name: "priya",
        age: "25",
        sub:{
            sub1: "dsp",
        
        },
    },

]
console.log(obj[2].name)
obj.forEach(e => {
    console.log(e.name)
    
});
fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
   return response.json()
}).then(data=>{
data.forEach(obj => {
    console.log(obj.name)
    
});
});
