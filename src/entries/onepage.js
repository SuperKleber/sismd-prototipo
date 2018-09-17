import React, { Component } from 'react'
import Home from "../pages/containers/home.js"
import Domicilio from "../pages/containers/domicilio.js"
import ModalContainer from "../modals/containers/modal-container"
import Modal from "../modals/components/modal"
import data from "../../data/data-home.json"

import IniciarSesionSmart from "../modals/containers/iniciar-sesion-smart"
import RegistrarseSmart from "../modals/containers/registrarse-smart"
import ConsultaSmart from "../modals/containers/consulta-smart"
import SeguroSmart from "../modals/containers/seguro-smart"
import BuscarMedicoSmart from "../modals/containers/buscar-medico-smart"

export default class Onepage extends Component {
  state={
    ModalVisible: false,
    childrenModal: 0
  }
  handleOpenModal=(event)=>{
    this.setState({
      ModalVisible: true
    })
  }
  handleCloseModal=(event)=>{
    this.setState({
      ModalVisible: false
    })
  }
  ModalIniciarSesion=()=>{
    this.handleOpenModal()
    this.setState({
      childrenModal: 1
    })
  }
  ModalRegistrarse=()=>{
    this.handleOpenModal()
    this.setState({
      childrenModal: 2
    })
  }
  ModalConsulta=()=>{
    this.handleOpenModal()
    this.setState({
      childrenModal: 3
    })
  }
  ModalSeguro=()=>{
    this.handleOpenModal()
    this.setState({
      childrenModal: 4
    })
  }
  ModalBuscarMedico=()=>{
    this.handleOpenModal()
    this.setState({
      childrenModal: 5
    })
  }
  EstadoModal=()=>{
    switch (this.state.childrenModal) {
      case 1:
      return(

        <IniciarSesionSmart></IniciarSesionSmart>
      )
      break;
      case 2:
      return(

        <RegistrarseSmart></RegistrarseSmart>
      )
      break;
      case 3:
      return(
        <ConsultaSmart></ConsultaSmart>
      )
      break;
      case 4:
      return(
        <SeguroSmart></SeguroSmart>
      )
      break;
      case 5:
      return(
        <BuscarMedicoSmart doctores={data.doctores}></BuscarMedicoSmart>
      )
      break;

      default:
        console.log("nada")
      break;
     }
      
      
  }
  render() {
    let handle={
      open: this.handleOpenModal,
      close: this.handleCloseModal
    }
    let estadoModal ={
      IniciarSesion:this.ModalIniciarSesion,
      Registrarse: this.ModalRegistrarse,
      Consulta: this.ModalConsulta,
      Seguro: this.ModalSeguro,
      Buscar:this.ModalBuscarMedico
    }
    return (
      <div>
          <Home handleModal={handle} EstadoModal={estadoModal}  data={data}></Home>
          <Domicilio></Domicilio>
          {
            
            this.state.ModalVisible &&
              
                <ModalContainer>
                  <Modal  close={this.handleCloseModal}>
                    {
                      this.EstadoModal()
                      // this.state.IniciarSesion ?
                      // <IniciarSesionSmart></IniciarSesionSmart>
                      // :
                      // <RegistrarseSmart></RegistrarseSmart>
                      // switch (key) {
                      //   case value:
                          
                      //     break;
                      
                      //   default:
                      //     break;
                      // }
                    }
                  </Modal>
                </ModalContainer>
              
            
             
          }
      </div>
    )
  }
}
