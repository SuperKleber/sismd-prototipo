import React from 'react'
import VentanaModal from "./ventana-modal"
import "./iniciar-sesion.css"
const IniciarSesion = (props) => {
  return (
    <div className="IniciarSesion">
      <VentanaModal>
          <form className="IniciarSesionFormulario">
                <h1>Ingrese sus datos</h1>
                <input placeholder="Correo electrónico" className="correo" type="email" required></input>
                <input placeholder="Contraseña" className="contraseña" type= "password" required></input>
                <input className="enviar" type="submit"></input>
          </form>
      </VentanaModal>
    </div>
  )
}

export default IniciarSesion
