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
        return (
            <div>
                <h1>Login Details</h1>
                <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>UserName</label>
                <input type="text" onChange={this.emailHandler} name="EmailId"/> <br />
                <label>Password</label>
                <input type="text" onChange={this.passwordHandler} name="Password"/> <br />
                <input type="submit" value="Login"/>
            </form>
            </div>

        )

    }
}
export default Login