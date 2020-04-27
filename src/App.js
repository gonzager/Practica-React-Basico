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

    const handlerCheck = (tarea) => {
      const newTareas = [...tareas]
      const tareaEncontrada = newTareas.find(t=> t === tarea)
      tareaEncontrada.completa = !tareaEncontrada.completa
      this.setState( { tareas :newTareas, 
        cantidadTareasCompletas:  newTareas.filter(e=>e.completa).length,
        cantidadTareasIncompletas: newTareas.filter(e=>!e.completa).length
       } )
    }

    const handlerAddButton = () => {
      if (this.campoAgregar.value) {
        const newTareas = [...tareas]
        const maxId = newTareas.reduce((a,b) => a.id > b.id ? a.id : b.id, 0) + 1
        newTareas.push({"id":maxId, "nombre":this.campoAgregar.value, "completa": false })
        this.campoAgregar.value = null
        this.setState( { tareas :newTareas, 
          cantidadTareasCompletas:  newTareas.filter(e=>e.completa).length,
          cantidadTareasIncompletas: newTareas.filter(e=>!e.completa).length
        } )
      }
    }

    const handlerEliminarButton = (tarea) => {
      const newTareas = [...tareas]
      const posicion = newTareas.indexOf(tarea)
      newTareas.splice(posicion, 1)
      this.setState( { tareas :newTareas, 
        cantidadTareasCompletas:  newTareas.filter(e=>e.completa).length,
        cantidadTareasIncompletas: newTareas.filter(e=>!e.completa).length
       } )
    }

    return (
      <div className="App">
        <RepasoListas />
        <Saludo nombre="Gerardo" apellido="Gonzalez" edad ="44 años" />
        {cantidadTareasIncompletas > 0 && <ComboTareas lista={tareas} filtro={false} cantidadTareas= {cantidadTareasIncompletas}/>}
        {cantidadTareasCompletas > 0 && <ComboTareas lista={tareas} filtro={true} cantidadTareas= {cantidadTareasCompletas}/>}
        <CheckTareas lista={tareas} handlerCheck={handlerCheck}  handlerEliminarButton={handlerEliminarButton} />  
        <br/>
        <label htmlFor="tareatext">Ingrese una tarea: </label>
        <input id="tareatext" type="text" ref={ele => this.campoAgregar = ele}/>
        <button onClick={handlerAddButton}>Agregar</button>
      </div>
    );   
  }

}

export default App;
