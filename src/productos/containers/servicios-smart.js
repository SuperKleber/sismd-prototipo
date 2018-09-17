import React, { Component } from 'react'
import Servicios from "../components/servicios.js"
export default class ServiciosSmart extends Component {
  render() {
    
    return (
      <div className="servicios" id="servicios">
        {
          this.props.dataServicio.map((element)=>{
            return(
              <Servicios 
              // tituloServicio={element.h1} 
              // mensajeBoton={element.button} 
              // mensajePequeño={element.h4}
              EstadoModal={this.props.EstadoModal}
              {...element}
              key={element.key}
              />

            )
          })
        }
      </div>
    )
  }
}
