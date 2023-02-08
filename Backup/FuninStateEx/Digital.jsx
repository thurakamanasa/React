import React,{useState} from "react";
function Digital(){
    let[CurrentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    setInterval(()=>{
        setCurrentTime(CurrentTime = new Date().toLocaleTimeString())
    },[1000])
    return  <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header bg-Success text-white">
                                <h1>Digital Clock</h1>
                            </div>
                            <div className="card-body">
                                <h3>Time:{CurrentTime}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}
export default Digital