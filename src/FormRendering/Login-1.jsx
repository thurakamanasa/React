import React from "react";
class Login extends React.Component{
    state={
        UserName : "",
        Password : ""
    }
    emailHandler=(event)=>{
        this.setState({ emailID : event.target.value })
    }
    passwordHandler=(event)=>{
        this.setState({ password : event.target.value })
    }
    submitHandler=(event)=>{
        console.log(this.state)
        event.preventDefault()
    }
    render(){
        return (
            <div>
                <h1>Login Details</h1>
                <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>UserName</label>
                <input type="text" onChange={this.emailHandler}/> <br />
                <label>Password</label>
                <input type="text" onChange={this.passwordHandler}/> <br />
                <input type="submit" value="Login"/>
            </form>
            </div>

        )

    }
}
export default Login