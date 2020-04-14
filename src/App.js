import React, { Component } from 'react';

import './App.css';
import './saludo'
import Saludo from './saludo';
import ComboTareas from './comboTareas';
import RepasoListas from './claseRepaso';
import CheckTareas from './checkTareas';

class App extends Component {

  state = {
      tareas : [],
      cantidadTareasCompletas : 0,
      cantidadTareasIncompletas: 0,
  }

  componentDidMount(){
    this.getTareas();
  }

  getTareas = async () => {
    const respuesta = await fetch('./data/tareasFake.json');
    const tareasList = await respuesta.json();
    
    this.setState( { tareas :tareasList, 
      cantidadTareasCompletas:  tareasList.filter(e=>e.completa).length,
      cantidadTareasIncompletas: tareasList.filter(e=>!e.completa).length
     } )
  }


  render() {

    const {tareas, cantidadTareasCompletas, cantidadTareasIncompletas } = this.state;

    return (
      <div className="App">
        <RepasoListas />
        <Saludo nombre="Gerardo" apellido="Gonzalez" edad ="44 años" />
        <ComboTareas lista={tareas} filtro={false} cantidadTareas= {cantidadTareasIncompletas}/>
        <ComboTareas lista={tareas} filtro={true} cantidadTareas= {cantidadTareasCompletas}/>
        <CheckTareas lista={tareas} />  
      </div>
    );   
  }

}

export default App;
