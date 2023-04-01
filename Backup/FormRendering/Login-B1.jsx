import React from "react";
class Login extends React.Component{
    state={
        EmailId : "",
        Password : ""
    }
    emailHandler=(event)=>{
        this.setState({ 
            [event.target.name ]: event.target.value 
        })
    }
    passwordHandler=(event)=>{
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
                    <div className="card-header bg-success text-white">
                        <h1>Login Page</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <div>
                                <label>EmailId</label>
                                <input type="text" placeholder="EmailId"/>
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="text" placeholder="Password"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    }
}
export default Login
 