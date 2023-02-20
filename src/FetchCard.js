import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FetchCard = () => {
    const [Contacts,setContacts]=useState([])
    useEffect(()=>{
        axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist/')
        .then(response=>response.data)
       // .then(data=>console.log(data))
       .then(data=>setContacts(data))
    },[])
  return (
    <div>
        <pre>{JSON.stringify(Contacts)}</pre>
        {/* <pre>{JSON.stringify(Contacts)}</pre> */}
        {
            Contacts.map((contact)=>{
                return(
<div className='card' style={{width:'30%'}}>
<div className='card-header'>
<img src={contact.picture.medium} alt='image'/>
</div>
<div className='card-body'>
<h3>{contact.name.first}</h3>
</div>
</div>
                )
            })
        }
    </div>
  )
}
export default FetchCard