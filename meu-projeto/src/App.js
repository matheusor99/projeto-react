import React, { Component } from "react";
import Botao from "./Botao";
import Titulo from "./Titulo";

export default class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      actualBtn: ''
    }
  }

  handleChange = (name) => {
    this.setState({
      actualBtn: name
    })
  }

  render() {
    return (
      <>
        <Titulo titulo={this.state.actualBtn}/>
        <Botao change={this.handleChange} name='Botão 1'/>
      </>
    );
  }
}