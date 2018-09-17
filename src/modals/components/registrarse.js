import React from 'react'
import "./registrarse.css"
import VentanaModal from "./ventana-modal"
const Registrarse = (props) => {
  return (
    <div className="Registrarse">
      <VentanaModal>
        
            <form className="RegistrarseFormulario">
                <h1>Ingrese sus datos</h1>
                <input placeholder="Nombres" className="nombres" type="text" required></input>
                <input placeholder="Apellidos" className="Apellido" type="text" required></input>
                <input placeholder="Carnet de Identidad" className="carnet" type="text" required></input>
                <input placeholder="Correo electrónico" className="correo" type="email" required></input>
                <input placeholder="Contraseña" className="contraseña" type= "password" required></input>
                <div className="tipo">
                    <label htmlFor="doctor">
                        <input id="doctor" name="tipo" type="radio" value="doctor"/> Doctor
                    </label>
                    <label htmlFor="paciente">
                        <input id="paciente" name="tipo" type="radio" value="paciente"/> Paciente
                    </label>
                </div>
                <input className="enviar" value="Registrarse" type="submit"></input>
                
            </form>
      </VentanaModal>
    </div>
  )
}

export default Registrarse
