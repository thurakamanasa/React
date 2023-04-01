import React,{useState} from "react";
function Digital(){
    let[CurrentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    setInterval(()=>{
        setCurrentTime(CurrentTime = new Date().toLocaleTimeString())
    },[1000])
    return <div>  
            <h1>Digital Clock</h1>
            <h3>Time:{CurrentTime}</h3>
    </div>
}
export default Digital