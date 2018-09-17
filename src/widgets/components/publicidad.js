import React from 'react'
import "./publicidad.css"
const Publicidad = (props) => {
  return (
      <a href={props.href} className="publicidadBlock">
        <span>
            <img src={props.imgSrc} alt={props.imgAlt}></img>
        </span>
        <h1>{props.h1}</h1>
     </a>
      
    
  )
}

export default Publicidad
 