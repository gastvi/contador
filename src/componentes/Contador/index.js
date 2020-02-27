import React, { Component } from 'react';
import {button, Button} from 'reactstrap'

import './contador.css'


class Contador extends Component {

    state = {
        numero: 0
    }

    aumentar = () => {

        this.setState({ numero: this.state.numero + 1 })
    }

    diminuir = () => {

        if (this.state.numero !== 0) {
            this.setState({ numero: this.state.numero - 1 })
        } else {
            return alert("não é premitido numero menor que 0")
        }

    }

    render() {
        return (
            <div>
                <h1 className="contador-titulo">
                    {this.state.numero}
                </h1>
                <Button color="success" outline className="mr-2 contador-aumentar" onClick={this.aumentar}> aumentar </Button>

                <Button color="danger" outline className="contador-diminuir" onClick={this.diminuir}> diminuir </Button>
            </div>
        )
    }
}

export default Contador;