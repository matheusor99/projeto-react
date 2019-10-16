import React, {Component} from 'react';
import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return(
            <div className="geral mainBackground">
                <Navbar/>
                <section>
                    <span>A conta Banco Digital te dá acesso a um novo patamar de produtos e serviços bancários. Bem vindo ao
                        futuro.
                    </span>

                    <Link to="/signup">
                        <button className="itensHovered btnOutline btnDefault">Continuar</button>    
                    </Link>
                    
                </section>
            </div>
        );
    }
}