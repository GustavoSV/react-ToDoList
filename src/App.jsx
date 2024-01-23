import React from 'react'
import './App.scss'
import ToDoList from './componentes/ToDoList/ToDoList'

const App = () => {
  return (
    <div>
      <h2 className='tituloProyecto'>Mi primer proyecto SOLITO</h2>
      <br />
      <ToDoList/>
    </div>
  )
}

export default App