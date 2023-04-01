import React, { useState } from 'react'

const State1 = () => {
    const[count,setmessage]=useState("hello")
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setmessage("gn")}>click</button>
    </div>
  )
}

export default State1