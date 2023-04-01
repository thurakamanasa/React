import React from "react";
import employee from "./data";
class Employee extends React.Component{

    render(){
        console.log(employee.length);
        return <div>
            <h1>File Data</h1>
            {/* <h3>{JSON.stringify(employee)}</h3> */}
            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>GENDER</th>
                </thead>
                <tbody>
                    {
                        employee.map((emp)=>{
                            return  (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.gender}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    }
}
export default Employee