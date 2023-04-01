import React from 'react'
import { useState } from 'react'

const State2 = () => {
    const[count,setcount]=useState(0)
  return (
    <div className='text-center'>
        <h1>{count}</h1>
        <button className="btn-primary" onClick={()=>setcount(count+1)}>click</button>
    
  </div>
  )
}
  
  export default State2 
