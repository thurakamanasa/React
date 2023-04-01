import React, { useState } from 'react'

const State = () => {
    const[message,setmessage]=useState("hello")
    // using array destructing here
    //to assign initial value 0
    //on click and a reference to the function 
    // that updates click to setclick
  return (
    <div>
        <h1>{message}</h1>
        <button onClick={()=>setmessage("gm")}>click</button>

    </div>
  )
}

export default State