import React,{useState} from 'react'
function Counter(){
    let[counter, setCounter]=useState(1)
    const decrHandler=()=>{
         setCounter(counter = counter - 1)
      }
     const incrHandler=()=>{
       setCounter(counter = counter  + 1 )
     }
    return <div>
        <h1>Counter Component</h1>
        <h3>Counter_Value:{counter}</h3>
        <button onClick={()=>{setCounter(counter - 1)}} >DECR</button>
        <button onClick={()=>{setCounter(counter + 1)}} >INCR</button>


    </div>
}
export default Counter