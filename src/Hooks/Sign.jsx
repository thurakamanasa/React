import React, { Component } from 'react'
 export class Sign extends Component {
    state = {
        checked: true
    }
    updateCheckBox = (event) => {
        this.setState({
            checked: !event.target.checked
        })

    }
    render() {
        return (
            <div className="container">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h4>Sign-using Class</h4>
                            </div>
                            <div className="card-body">
                                <form >
                                    <div className="form-group">
                                        <input placeholder="Email Id" type="text" className="form-control" />
                                    </div>
                                    <div className ="form-group">
                                <input placeholder ="Password" type="text" className="form-control"/>
                            </div>
                            <div className ="form-group">
                                <input type="checkbox" className =" form-checkbox" onChange={this.updateCheckbox} />
                                <label>please Accept terms & conditions</label>
                            </div>
                            <div className ="form-group">
                                <input type ="submit"  value="Sign" className="btn btn-success" disabled={this.state.checked} />
                            </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )       
    }
}

export default Sign