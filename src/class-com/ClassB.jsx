import React from 'react'
function ClassB (props){

    return <div>
        <h1>Component B</h1>
        <hr />
        <pre>{JSON.stringify(props)}</pre>
        <h3>Property1:{props.props1}</h3>
        <h3>Property2:{props.props2}</h3>
    </div>
}
export default ClassB