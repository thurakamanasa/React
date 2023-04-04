import React, { Component } from 'react'
import Funcome from './Funcome'
export class Classto extends Component {
    product="vivo"
    price="22000"
    Model="8gb ram 2022 is processing"
  render() {
    return (
      <div>
        <h2>Classgo</h2>
        <Funcome product={this.product}
                 price={this.price}
                 Model={this.Model}/>
      </div>
    )
  }
}

export default Classto