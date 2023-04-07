import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Useeffect = () =>{
    const [data,setData] = useState([]);
    useEffect(()=>{``
  axios.get("https://jsonplaceholder.typicode.com/users").then(
    response=>setData (response.data)
  )
    },[]);
  return (
    <div>
        <pre>{JSON.stringify(data)}</pre>
         {data.map(item => <li key={item.id}>{item.tittle} {item.email}</li>)}
    </div>
  )
}

export default Useeffect