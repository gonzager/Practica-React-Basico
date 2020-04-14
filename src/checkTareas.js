import React, { Component } from "react";

class CheckTareas extends Component{

    render() {

        const {lista} = this.props; 

        const checks = lista.map(
            e => (
                <div key = {e.id} >
                    <label  >
                        <input type="checkbox" defaultChecked={e.completa}  />
                        {e.nombre}
                    </label>
                </div>
            ));

        return(
            <div>
                <br></br>
                {checks}
            </div>   
        );
    }
}

export default CheckTareas;