import React from 'react'
import "./servicios.css"
const Servicios = (props) => {
//   console.log(props.NumeroModal)
  let handleClick;
  if(props.NumeroModal == 1)
  {
    handleClick=props.EstadoModal.Consulta
  }
  else if(props.NumeroModal ==2){
    handleClick=props.EstadoModal.Seguro
  }
  else if(props.NumeroModal == 3){
    handleClick=props.EstadoModal.Buscar
  }
//   switch (props.NumeroModal) {
//         case 1:
//             handleClick=props.EstadoModal.Consulta
//             break;
//         case 2:
//             handleClick=props.EstadoModal.Seguro
//             break;
//         case 3:
//             handleClick=props.EstadoModal.Buscar
//         default:
//             console.log("nelpastel")
//             break;
//   }
  return (
    <div className="servicio">
        {/* <section>
            <h1>{props.tituloServicio}</h1>
            <button>{props.mensajeBoton}</button>
        </section> 
            
        <h5>{props.mensajePequeño}</h5> */}
        <section>
            <h1>{props.h1}</h1>
            <button onClick={handleClick}>{props.button}</button>
        </section> 
            
        <h5>{props.h4}</h5>
    </div>
  )
}

export default Servicios
