import React from 'react'
import Funcom from './Funcom'

const Fungo = () => {
    let employeeName="Manasa"
    let email="manasathuraka68@gmail.com"
    let role="front end developer"
  return (
    <div>
        <h4>Fungo Component</h4>
        <Funcom name={employeeName}
              email={email}
              role={role}/>
    </div>
  )
}

export default Fungo