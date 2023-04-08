import React, { useState } from 'react'
import FoodItems from './FoodItems';
const Food1 = () => {
  const YOUR_APP_ID = "a462cfbb";
  const YOUR_APP_KEY ="5e4686d1283fad139516cb556cdf31d9";
    const[search,setSearch]=useState('');
    const[data,setData]=useState([])
    const SubmitHandler = e =>{
        e.preventDefault();
        // console.log(search)
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
        .then(
          response=>response.json()
        ).then(
          data=>setData(data.hits)
        )
    }
  return (
    <div className='text-center'>
        <h1 className='text-info'>Food Recipe App</h1>
        <form onSubmit={SubmitHandler}>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />  <br/>
            <input type="Submit" value='search' />
        </form>
        {

          data.length>1 ? <FoodItems data={data}/> :null
        }
    </div>
  )
}

export default Food1