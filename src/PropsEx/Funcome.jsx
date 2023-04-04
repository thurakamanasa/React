import React from 'react'

const Funcome = (props) => {
  return (
    <div>
        <h2>Funcome</h2>
        <h4>{props.product}</h4>
        <h4>{props.price}</h4>
        <h4>{props.Model}</h4>
    </div>
  )
}

export default Funcome