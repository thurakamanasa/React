import React from 'react'
import Axios from 'axios'
class UserA extends React.Component{
    state={
        user:{}
    }
    componentDidMount(){
        Axios.get('https://dummyjson.com/users')
            .then((response)=>{
                this.setState({user:response.data})
            })
            .catch(()=>{})
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state.user)}</pre>
        </div>
    }
}
export default UserA