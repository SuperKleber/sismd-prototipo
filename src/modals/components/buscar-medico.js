import React from 'react'
import VentanaModal from "./ventana-modal"
import "./buscar-medico.css"
const BuscarMedico = (props) => {
    
  return (
    <div>
        <VentanaModal>
            <div className="Doctores">
               {props.children}
               <ul className="MenuDeplegable md1">
                   Departamentos
                   <div>
                    <li>La Paz</li>
                    <li>Cochabamba</li>
                    <li>Santa Cruz</li>
                    <li>Tarija</li>

                   </div>
               </ul>
               <ul className="MenuDeplegable md2">
                   Especialización
                   <div>
                    <li>Médico General</li>
                    <li>Pediatra</li>
                    <li>Odontólogo</li>
                    <li>Fisioterapeuta</li>

                   </div>
               </ul>
            </div>
        </VentanaModal>
    </div>
  )
}

export default BuscarMedico
