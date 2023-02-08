import React from "react";
class Login extends React.Component{
    state={
        EmailId : "",
        Password : ""
    }
    inputHandler=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })  
    }
    submitHandler=(event)=>{
        console.log(this.state)
        event.preventDefault()
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card-header bg-dark text-white">
                        <h1>Login Page</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label>EmailId</label>
                                <input name="EmailId" onChange={this.inputHandler} type="text" placeholder="EmailId" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="Password" onChange={this.inputHandler} type="text" placeholder="Password" className="form-control"/>
                            </div>
                            <input type="submit" value="Login" className="btn btn-info"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    }
}
export default Login