import React from 'react'
import ClassB from "./ClassB";
function ClassA (){
        let P_Name = "Iphone12"
        let P_Price = 65000
    return <div>
        <h1>Class- </h1>
        <hr />
        <ClassB props1={P_Name} props2={P_Price}/>
    </div>
}
export default ClassA