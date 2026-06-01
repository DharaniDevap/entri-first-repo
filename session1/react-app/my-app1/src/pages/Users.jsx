import { useEffect, useState } from "react"
import axios from "axios"
function Users(){
    const [users,setUsers]=useState([])

//   fetch("https://jsonplaceholder.typicode.com/users").
//     then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)
//         setUsers(data) 
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

    useEffect(()=>{
        async function fetchdata() { 
            const res=await axios.get("https://jsonplaceholder.typicode.com/users");
            const data=await res.data
            console.log(data)
            setUsers(data)
        }
        fetchdata()
    },[])

    return (
        <div>
            <h1>User</h1>
            {users.map((user)=>(
                <div key={user.id}>
                    <h1>{user.name}</h1>
                </div>
            ))}

        </div> 
    )
}
export default Users
