import React from 'react'
import "./noticia.css"
const Noticia = (props) => {
  return (
    <div className="Noticia">
      <img src={props.src} alt={props.alt}/>
      <h1>{props.h1}</h1>
      <h3>{props.h3}</h3>
    </div>
  )
}

export default Noticia

