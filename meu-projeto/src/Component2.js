import React, {Component} from "react"

export default class Component2 extends Component {
    render() {
        return (
            <>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.idade}</h2>
            </>
        );
    }
}