import React from "react";
class Salary extends React.Component{
    state ={
        salary:75000
    }
    updateSalaryHandler=(Hike)=>{
        this.setState({
            salary:this.state.salary + (this.state.salary*Hike/100)
        })
    }
    render(){
        return <div>
            <h1>Salary Component</h1>
            <h3>Salary:{this.state.salary}</h3>
            <button onClick={this.updateSalaryHandler.bind(this,100)}>100</button>
            <button onClick={this.updateSalaryHandler.bind(this,50)}>50</button>
            <button onClick={this.updateSalaryHandler.bind(this,10)}>10</button>
            <button onClick={this.updateSalaryHandler.bind(this,0)}>0</button>

        </div>
    }
}
export default Salary