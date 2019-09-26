import React, {Component} from "react"

export default class Botao extends Component {
    render() {
        return <button onClick={() => this.props.change(this.props.name)}>{this.props.name}</button>
    }
}