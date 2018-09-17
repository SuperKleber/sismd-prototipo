import React from 'react'
import VentanaModal from "./ventana-modal"
import "./seguro.css"
const Seguro = () => {
  return (
    <div>
      <VentanaModal>
        <div className="Seguro">
            <h1>Selecione su plan Anual</h1>
            <a 
            href="https://api.whatsapp.com/send?phone=59172513348&text=Hola Me interesa el plan de 100bs para mi familia"
            >100bs 1 persona menor de 18años</a>
            <a 
            href="https://api.whatsapp.com/send?phone=59172513348&text=Hola Me interesa el plan de 150bs para mi familia"
            >150bs 1 persona mayor de 18años</a>
            <a 
            href="https://api.whatsapp.com/send?phone=59172513348&text=Hola Me interesa el plan de 250bs para mi familia"
            >250bs toda la familia</a>
        </div>
      </VentanaModal>
    </div>
  )
}

export default Seguro
