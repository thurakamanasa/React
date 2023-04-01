import React from 'react'
import { useState } from 'react'

const StateEX = () => {
    const[count,setcount]=useState(0)
  return (
    <div className='text-center'>
        <h1>helo{count}</h1>
        <button className='btn-primary' onClick={()=>setcount(count+1)}>click</button>
    </div>
  )
}

export default StateEX