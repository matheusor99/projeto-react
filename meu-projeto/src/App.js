import React, { Component } from "react";
import Signup from './pages/signup/Signup'
import './template/assets/css/normalize.css'
import './template/assets/css/template.css'
import './template/assets/css/style.css'

import Routes from './Routes'

export default class App extends Component{
  render() {
    return <Routes/>
  }
}