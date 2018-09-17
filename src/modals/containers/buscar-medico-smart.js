import React, { Component } from 'react'
import BuscarMedico from "../components/buscar-medico"
import Doctor from "../components/doctor"
export default class BuscarMedicoSmart extends Component {
  render() {
    return (
      <div>
        <BuscarMedico>
          {
            this.props.doctores.map((element)=>{
              return(
                <Doctor
                {...element}
                ></Doctor>
              )
            })

          }
        </BuscarMedico>
      </div>
    )
  }
}
