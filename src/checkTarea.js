import React, { Component } from "react";

class CheckTarea extends Component{

    render() {

        const {tarea, handlerCheck, handlerEliminarButton } = this.props;

        const handlerOnChange = () =>{
            handlerCheck(tarea)
        }

        const onClickEliminiar = () => {
            handlerEliminarButton(tarea)
        }


        return (
            <div>   
                <label htmlFor="check">{tarea.nombre}</label>
                <input id="check" type="checkbox" checked={tarea.completa} onChange={handlerOnChange} />
                <button onClick={onClickEliminiar}> Eliminar Tarea </button>
            </div>    
        )
    }

}

export default CheckTarea;