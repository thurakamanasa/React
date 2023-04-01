import React, { Component } from 'react'

export class UserList extends Component {
    seluser=(user)=>{
        this.props.seluser(user)
    }
  render() {
    return (
        <div className="row">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="col-md-8">
                <table className='table table-hover'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((user)=>{
                                return <tr key={user.id} onClick={this.seluser.bind(this,user)}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.age}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}

export default UserList