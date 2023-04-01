import React from 'react' 
class Counter extends React.Component {
    //qty = 1;
    state = {
        qty : 1
    }
    incrHandler = () => {
        this.setState({qty: this.state.qty + 1})
    }
    decrHandler = () => {
        this.setState({qty: this.state.qty - 1})
    }
    render() {
        return <div>
                <h4>Quantity : {this.state.qty}</h4>
                <button onClick = {this.incrHandler}>Incr</button>
                <button onClick = {this.decrHandler}>Decr</button>
        </div>
    }
}
export default Counter