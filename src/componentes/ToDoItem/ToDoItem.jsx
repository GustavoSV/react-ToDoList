import React from 'react'

const ToDoItem = ({texto, borrarToDo}) => {
  return (
    <li>
        <strong>{texto}</strong>
        <button onClick={() => borrarToDo(texto)}> Eliminar </button>
    </li>
  )
}

export default ToDoItem