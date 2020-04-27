import React, { Component } from "react";
import CheckTarea from './checkTarea'

class CheckTareas extends Component{

    render() {

        const {lista, handlerCheck, handlerEliminarButton} = this.props; 

        const checks = lista.map(
            t => (
                <div key={t.id}>
                    <CheckTarea tarea={t} handlerCheck={handlerCheck} handlerEliminarButton={handlerEliminarButton}/>
                </div>
            )
        )

        return(
            <div>
                <br></br>
                {checks}
            </div>   
        );
    }
}

export default CheckTareas;