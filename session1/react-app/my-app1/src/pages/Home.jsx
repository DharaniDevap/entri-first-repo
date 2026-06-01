import { useState } from "react"

const Home = ()=>{
    const [count,setCount] = useState(0)
    const [name,setName] = useState(null)
       const students=[
    {
        id: 1,
        name: "ravi",
        age: 30
    },
        {
        id: 2,
        name: "priya",
        age: 18
    },
        {
        id: 3,
        name: "riya",
        age: 24
    },
    {
        id:4,
        name:"varsha",
        age: 14
    },
    {
        id:5,
        name : "anitha",
        age : 31
    },


   ]
       const [studentData,setStudentsData] = useState(students)
// setStudentsData(
//   studentData.filter(a => a.age<= 18)
// );


        function handleCount (){
            if(count<20){
                        setCount(count+1)
            }
    }
        function handleDeCount (){

            if(count>0){
                        setCount(count-1)
            }
    }

    function rest (){
        setCount(0)
    }
    function selectText(e){
        setName(e.target.value)
    }
    return(
        <div className="flex gap-3">
        <h1>{count}</h1>
        <button onClick={handleCount}>Increase</button>
        <button onClick={handleDeCount}>Decrease</button>
        <button onClick={rest}>rest</button>
        <input type="text" placeholder="Enter your name"  onChange={selectText}/>
        <h1> my name is:  {name} </h1>
         <div>
             <h2>Students data:</h2>
             {studentData.map((item)=>
                (
                <div key={item.id}>
                 <h1>{item.name}</h1>
                 <h1>{item.age}</h1>
                 </div> 
             ))}
        </div> 

        </div>
    )
}

export default Home