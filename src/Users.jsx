import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const[persons,setpersons]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(Response=>Response.data)
        // .then(data=>console.log(data))
           .then(data=>setpersons(data))
    })
  return (
    <div>
    <h1>Users data</h1>
    {/* <pre>{JSON.stringify(persons)}</pre> */}
    <table className='table table-hover'>
    <thead className='bg-dark text-white'>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Number</th>
        </tr>
    </thead>
    <tbody>
    {
        persons.map((person)=>{
            return(
                <tr>
         <td>{person.id}</td>
         <td>{person.name}</td>
         <td>{person.phone}</td>
         </tr>


            )
        })
    }
    </tbody>
    </table>
    </div>
  )
}

export default Users