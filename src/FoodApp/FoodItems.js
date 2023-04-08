import React from 'react'

const FoodItems = ({data}) => {
  return (
    <>
    <div className='row'>
    {data.map((elem)=>{
        return(
            <div className="col-md-4">
                <div className="card" style={{'width':'18rem'}}>
                <img className="card-img-top" src={elem.recipe.image} alt="Card image cap" />
                <div className="card-body">
                    <center>
                        <h5 className='card-title'>{elem.recipe.label}</h5>
                        <p className="card-text">Total Amount Of Calories:{Math.round(elem.recipe.calories)}</p>
                      <a href="" className="btn btn-primary">Buy</a>
                    </center>
                </div>
                </div>
            </div>
        )
    })}

    </div>
    </>
  )
}

export default FoodItems
