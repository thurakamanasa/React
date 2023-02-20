import React,{useState} from 'react'
import axios from'axios'
import FoodItems from './FoodItems'
const FoodApp = () => {
    const [items,setItems]=useState('')
    const [foodData,setFoodData]=useState([])
    const searchHandler=(e)=>{
        e.preventDefault()
        console.log(items);
        axios.get(`https://api.edamam.com/search?q=${items}&app_id=a462cfbb&app_key=5e4686d1283fad139516cb556cdf31d9&from=0&to=30&calories=591-722&health=alcohol-free`)
        .then(response=>response.data)
        //.then(data=>console.log(data))
        .then(data=>setFoodData(data.hits))
    }
  return (
    <>
<div className='container mt-5'>
<div className='row'>
<div className='col'>
<h1 className='bg-info text-white text-center'>FOOD items APP</h1>
<pre>{JSON.stringify(items)}</pre>
<form onSubmit={searchHandler}>
    <input type='search' placeholder='search...' className='form-control-lg' value={items} onChange={(e)=>setItems(e.target.value)}/>
    <button className='btn btn-primary'>Search food</button>
    <FoodItems foodData={foodData}/>
</form>
</div>
</div>
</div>
    </>
  )
}

export default FoodApp