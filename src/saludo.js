import React, {Component} from 'react'

class Saludo extends Component {

    render() {
        const { apellido, nombre, edad} = this.props;
        return (
            <div> 
                <h1>Hola soy {nombre} {apellido} y tengo {edad} años</h1>
            </div>
        )
    }

}

export default Saludo