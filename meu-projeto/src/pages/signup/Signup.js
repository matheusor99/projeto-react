import React, {Component} from 'react';
import Step1 from './step1/Step1'

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actualPage: 0,
            info: []
        }
    }

    handleChangePage = (page, data) => {
        {
            const state = Object.assign({}, this.state);
            state.actualPage = page;

            state.info.push(data);

            this.setState(state);
        }
    }

    handleActualPage = () => {
        switch(this.state.actualPage) {
            case 1:
                return <h1>Pagina 2</h1>
            case 2:
                return <h1>Pagina 3</h1>
            default:
                return <Step1/>
        }
    }

    render() {
        return(
            this.handleActualPage()
        );
    }
}