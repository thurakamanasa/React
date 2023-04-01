import React,{useState} from "react";
function Digital(){
    let[CurrentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    const updateHandler=()=>{
        setCurrentTime(CurrentTime = new Date().toLocaleTimeString())
    }
    return <div>
            <h1>Digital Clock</h1>
            <h3>Time:{CurrentTime}</h3>
            <button onClick={updateHandler}>Refresh</button>
    </div>
}
export default Digital