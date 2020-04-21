import React, { Component } from "react";

class CheckTarea extends Component{

    render() {

        const {tarea, handlerCheck} = this.props;

        const handlerOnChange = () =>{
            handlerCheck(tarea)
        }

        return (
            <div>   
                <label htmlFor="check">{tarea.nombre}</label>
                <input id="check" type="checkbox" checked={tarea.completa} onChange={handlerOnChange} />
            </div>    
        )
    }

}

export default CheckTarea;