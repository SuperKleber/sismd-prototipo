import React from 'react'
import "./ventana-modal.css"
const VentanaModal = (props) => {
  return (
    <div className="VentanaModal">
        
        {props.children}
        
    </div>
  )
}

export default VentanaModal
 