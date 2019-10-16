import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <div class="geral mainBackground">
                <nav>
                    <div id="logo"></div>
                    <input type="text" placeholder="O que você está procurando" />
                    <div id="signin">
                        <a class="itensHovered" href="">Entrar</a>
                    </div>
                </nav>
                <section>
                    <div id="notFound"></div>
                    <span>Ops! Página não encontrada.</span>
                    <Link to="/">
                         <button class="itensHovered btnOutline btnDefault">Voltar</button>
                    </Link>
                </section>
            </div>
        )
    }
}