import React,{useState} from "react";


function Message(){
    let[qty, setqty] = useState(0)
    let[msg, setmsg] = useState("Hello")
    let[value, setvalue]= useState([10,20,30])
    let[product, setproduct]=useState({id:101, Name:"Iphone"})
    return <div>
        <h1>Message Component</h1>
        <h3>{qty}</h3>
        <h3>{msg}</h3>
        <h3>{value}</h3>
        <h3>{JSON.stringify(product)}</h3>
    </div>
}
export default Message