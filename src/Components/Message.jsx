import React, {Component} from 'react'
export class Message extends Component {
    //meassge="Hello"
    state = {
        Message : "GOOD MORNING"
    }
    gmHandler = () => {
        this.setState({Message:"Good Morning"})
    }
    gnHandler = () => {
        this.setState({Message:"Good Night"})
    }
    render(){
        return(
            <div>
                <h4>Message : {this.state.Message}</h4>
                <button onclick={this.gmHandler}>GM</button>
                <button onclick={this.gmHandler}>GN</button>
            </div>
        )

    }
}
export default Message