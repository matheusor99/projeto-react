import React, { Component } from "react";
import Component2 from "./Component2";

export default class App extends Component{
  render() {
    return (
      <React.Fragment>
        <h1>Hello Word!!!</h1>
        <h2>Olá Mundo!</h2>
        <Component2 nome="Matheus" idade="20"/>
        <Component2 nome="Felipe" idade="19"/>
      </React.Fragment>
    );
  }
}