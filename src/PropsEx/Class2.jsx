import { Component } from "react"

class Class2 extends Component {
    render (){
  return (
    <div>
        <h4>Class2 Component</h4>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>product_Name:{this.props.name}</h4>
        <h4>product_price:{this.props.price}</h4>
        <h4>product_color:{this.props.color[0]}</h4>
    </div>
  )
}
}

export default Class2