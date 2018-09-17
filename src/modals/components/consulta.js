import React from 'react'
import VentanaModal from "./ventana-modal"
import "./consulta.css"
const Consulta = () => {
  return (
    <div>
        <VentanaModal>
            <ul className="Consulta">
                <div id="comienzoconsulta">
                    <h1>¿Cuál es su situación?</h1>
                    <a href="#emergencia" className="icon-health">Emergencia</a>
                    <a href="#consulta" className="icon-man">Consulta Médica</a>
                </div>    
                <div id="emergencia">
                    <span className="icon-heart-broken">
                        <input type="submit" value="INFARTO"/>
                    </span>
                    <span className="icon-feed" >
                        <input type="submit" value="EPILEPSIA" />
                    </span>
                    <span className="icon-droplet">
                        <input type="submit" value="HERIDO" />
                    </span>
                    <a  href="tel:+59170657034" className="icon-phone">LLAMAR</a>
                    <a className="atras icon-circle-left"  href="#comienzoconsulta" > </a>
                </div>
                <div id="consulta">
                    <a href="#formularioMedico" className="icon-man">Revisión Rutinaria</a>
                    <a href="#formularioMedico" className="icon-injection">Incoveniente de salud</a>
                    <a className="atras icon-circle-left"  href="#comienzoconsulta" > </a>
                </div>
                <div>
                    <form id="formularioMedico">
                        <input type="text" placeholder="Nombre y Apellido" required></input>
                        <input type="text" placeholder="Edad" required></input>
                        <input type="text" placeholder="Celular" required></input>
                        <section className="sexo">
                            <label htmlFor="mujer">
                                <input type="radio" value="mujer" name="sexo" /> Mujer
                            </label>
                            <label htmlFor="hombre">
                                <input type="radio" value="hombre" name="sexo" /> Hombre
                            </label>
                        </section>
                        <input type="text" placeholder="Describa la razón de su consulta" required></input>
                        <input id="enviarFormularioMedico" type="submit" required></input>
                        <a  className="atras icon-circle-left" href="#comienzoconsulta" > </a>
                    </form>
                </div>

            </ul> 
        </VentanaModal>
    </div>
  )
}

export default Consulta
