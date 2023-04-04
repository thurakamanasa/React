import { Component } from 'react'

import Class2 from './Class2'

class Class1 extends Component {
  product_Name = "Iphone 12"
  product_price = "45000"
  color = ['blue','green','rose','black','gold']
  render () {
  return(
    <div>
     <h2>Class1 Component</h2> 
     <hr/>
     <Class2 name= {this.product_Name}
             price= {this.product_price}
             color= {this.color}/>
    </div>
  )
  }
  
}

export default Class1