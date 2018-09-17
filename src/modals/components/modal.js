import React from 'react'
import "./modal.css"
const Modal = (props) => {
  return (
      <div className="Modal">
            <button onClick={props.close} className="cerrarModal">X</button>
            {props.children}
      </div>
  )
}

export default Modal
