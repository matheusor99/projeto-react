import React, {Component} from 'react'

export default class Congrats extends Component {

    render() {
        return(
            <React.Fragment>
                <section>
                    <span>Parabéns {this.props.name}, sua conta está pronta para uso.</span>
                    <button className="itensHovered btnOutline btnDefault">Voltar</button>
                </section>
            </React.Fragment>
        );
    }
}