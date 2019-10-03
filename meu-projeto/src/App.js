import React, { Component } from "react";
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup'
import Step1 from './pages/signup/step1/Step1'
import './template-bootcamp/template/assets/css/normalize.css'
import './template-bootcamp/template/assets/css/template.css'
import './template-bootcamp/template/assets/css/style.css'

export default class App extends Component{
  render() {
    return <Signup/>
  }
}