import React, { Component } from 'react'
import "./home.css"
import ServiciosSmart from "../../productos/containers/servicios-smart.js"
import PublicidadSmart from "../../widgets/containers/publicidad-smart.js"
import FooterSmart from "../../widgets/containers/footer-smart.js"
import NoticiasSmart from "../../layout/containers/noticia-smart"

export default class Home extends Component {
  state={
    estiloMenu:{
      transform: "translateX(-100vw)"
    },
    estiloBurger:{
      color:"#2db6d6"
    },
    buttonMenuClass: "burgerButton icon-menu",
    toggleMenu: true
  }
  handleClickMenuToggle=(event)=>{
        
        if (this.state.toggleMenu){
          this.setState({
            estiloMenu:{
              transform: "translateX(0)"
            },
            estiloBurger:{
              color:"#061f3e"
            },
            buttonMenuClass: "burgerButton icon-circle-left",
            toggleMenu: false

          })
        }
        else{
          this.setState({
            estiloMenu:{
              transform: "translateX(-100vw)"
            },
            estiloBurger:{
              color:"#2db6d6"
            },
            buttonMenuClass: "burgerButton icon-menu",
            toggleMenu: true
          })
        }
  }
  render() {
    // console.log(this.props.handleModal.open)
    return (
      <div className="Home">
          <header>
            <img className="logo" src="./logo.jpg" alt="logoSISMD"></img>
            <h1>SIS - MD</h1>
            <button style={this.state.estiloBurger} onClick={this.handleClickMenuToggle} className={this.state.buttonMenuClass} ></button>
            <div className="sesion">
              <button onClick={this.props.EstadoModal.IniciarSesion} >Iniciar Sesión</button>
              <button onClick={this.props.EstadoModal.Registrarse} >Regístrate</button>       
            </div>
            <ul style={this.state.estiloMenu} className="menu">
                <li>
                  <a onClick={this.handleClickMenuToggle} href="#servicios">Servicios</a>
                </li>
                <li>
                  <a onClick={this.handleClickMenuToggle} href="#noticias">Noticias</a>
                </li>
                <li>
                  <a onClick={this.handleClickMenuToggle} href="#contacto">Contacto</a>
                </li>
              
            </ul>
          </header>
          <div className="cuerpo">
              <ServiciosSmart EstadoModal={this.props.EstadoModal} dataServicio={this.props.data.servicios}></ServiciosSmart>
              <div className="noticias-publicidad">
                <NoticiasSmart dataNoticias={this.props.data.noticias}></NoticiasSmart>
                <PublicidadSmart dataPublicidad={this.props.data.publicidad}></PublicidadSmart>
              </div>
          </div>
          <FooterSmart></FooterSmart>
      </div>
    )
  }
}
