import React from "react";
class Registration extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
            mobile:""
        }
    }
    inputHamdler=(event)=>{
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
                <div className="col-5">
                    <div className="card-header bg-dark text-warning">
                        <h1>Registration Form</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <input name="name" onChange={this.inputHamdler} type="text" placeholder="Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input name="email" onChange={this.inputHamdler} type="email" placeholder="EmailId" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input name="password" onChange={this.inputHamdler} type="password" placeholder="Password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input name="mobile" onChange={this.inputHamdler} type="number" placeholder="Mobile" className="form-control"/>
                            </div>
                            <input type="submit" value="Login" className="btn btn-success"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Registration