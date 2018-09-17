import React, { Component } from 'react'
import Publicidad from "../components/publicidad.js"
export default class PublicidadSmart extends Component {
  render() {
    return (
        <div className="publicidad">
          {
            this.props.dataPublicidad.map((element)=>{
              return(
                <Publicidad 
                {...element}
                key={element.key}
                ></Publicidad>
              )
            })
          }
        </div>
        
    )
  }
}
 