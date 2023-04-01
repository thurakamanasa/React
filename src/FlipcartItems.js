import React from 'react'

const FlipcartItems = ({flipcartData}) => {
  return (
    <>
        <pre>{JSON.stringify(flipcartData)}</pre>
        <div className='row'>
        {
            flipcartData.map((dress)=>{
                return(
                     <div className='col'>
<div className='card'>
<div className='card-header'>
<img src={dress.designs.image}/>
</div>
<div className='card-body'>
<h4>{dress.designs.label}</h4>
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

export default FlipcartItems