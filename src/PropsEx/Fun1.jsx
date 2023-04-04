import React from 'react'
import Fun2 from './Fun2'

const Fun1 = () => {
    let employeeName="Manasa"
    let email="manasathuraka68@gmail.com"
    let role="front end developer"
  return (
    <div>
        <h4>Fun1 Component</h4>
        <Fun2 name={employeeName}
              email={email}
              role={role}/>
    </div>
  )
}

export default Fun1