import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Contact = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.data)
        .then(data=>setUsers(data))
    })
  return (
    <div>
    <h1>Contact users</h1>
    <pre>{JSON.stringify(users)}</pre>
{
     users.map((user)=>{
        return(

            <h2>{user.title}</h2>



        )
     })
}
    </div>
  )
}

export default Contact