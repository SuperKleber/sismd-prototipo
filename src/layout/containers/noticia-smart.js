import React, { Component } from 'react'
import Noticia from "../components/noticia"
export default class NoticiasSmart extends Component {
  render() {
    // console.log(this.props.dataNoticias+"asd")
    return (
      <div className="NoticiasContainer" id="noticias">
        {
            this.props.dataNoticias.map((element)=>{
                return(
                    <Noticia
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
