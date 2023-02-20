import React from 'react'

const FoodItems = ({foodData}) => {
  return (
    <>
        <pre>{JSON.stringify(foodData)}</pre>
        <div className='row'>
        {
            foodData.map((food)=>{
                return(
                     <div className='col'>
<div className='card'>
<div className='card-header'>
<img src={food.recipe.image}/>
</div>
<div className='card-body'>
<h4>{food.recipe.label}</h4>
</div>
</div>
                    </div>
                )
            })
        }

        </div>
    </>
  )
}

export default FoodItems