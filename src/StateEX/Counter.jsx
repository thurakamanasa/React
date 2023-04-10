import React, { Component } from 'react'

class Counter extends React.Component {
    state = {
        qty: 1
    }
    incrHandler = () => {
        this.setState({qty:this.state})

    }
    decrHandler = () => {

    }
  render() {
    return (
      <div>
        <h4>Quantity: {this.state.qty}</h4>
        <button onclick={this.incrHandler}>Incr</button>
        <button onclick={this.decrHandler}>Decr</button>
        </div>
    )
  }
}

export default Counter
