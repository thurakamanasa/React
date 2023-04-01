import React from "react"
class Hero extends React.Component{
     Hero_Name= "NTR" 
     Heroin_Name = "Kajal"
     Movie_Name ="Temper"
     Image ="https://i.pinimg.com/originals/34/ec/a4/34eca43e368086960904a284574688cb.jpg"
    render(){
        return <div>
            <h1>M_Hero:{this.Hero_Name}</h1>
            <h1>M_Heroin:{this.Heroin_Name}</h1>
            <h1>M_Name:{this.Movie_Name}</h1>
            <img src={Image} alt=""/>
        </div>
    }
}
export default Hero