import React from 'react'
import "./doctor.css"
const Doctor = (props) => {
 console.log("props")
  return (
    <div className="Doctor">
        <h1>{props.nombreDoctor}</h1>
        <img src={props.imgSrc}></img>
        <h3>{props.descripcionDoctor}</h3>
        <a href={"download:" + props.curriculum}>Descargar Curriculum</a>
        <a href={"https://api.whatsapp.com/send?phone="+props.celularDoctor+"&text="+props.mensajeDoctor}>Hablar por Whatsapp</a>
    
    </div>
  )
}

export default Doctor
