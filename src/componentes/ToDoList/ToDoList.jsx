import { useState, useEffect } from "react"
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [toDo, setToDo] = useState( () => {
        const toDoLocalSt = localStorage.getItem("toDos");
        if (toDoLocalSt) {
            return JSON.parse(toDoLocalSt);
        } else {
            return [];
        }
    });

    // con cada cambio en la lista de ToDo se guarda en el localstorage
    useEffect( () => {
        localStorage.setItem("toDos", JSON.stringify(toDo));
    }, [toDo]);

    // funciones auxiliares
    const agregarToDo = (texto) => {
        setToDo([...toDo, texto]);
        //se usa el operador spread. 
    }

    const borrarToDo = (toDoEliminar) => {
        const actualizarToDos = toDo.filter((item) => item !== toDoEliminar);
        setToDo(actualizarToDos);
    }

    const manejadorSubmit = (e) => {
        // deshabilitamos el manejo por default del formulario
        e.preventDefault();

        if (inputValue.trim()) {
            agregarToDo(inputValue);
            setInputValue("");
        } 
    }

  return (
    <div>
        <h2>Lista de Actividades por realizar</h2>
        <form onSubmit={manejadorSubmit}>
            <input type="text" placeholder="Escriba su tarea" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <button type="submit"> Agregar </button>
        </form>

        <ul>
            {
                toDo.map(item => (
                    <ToDoItem 
                        texto = {item}
                        borrarToDo = {borrarToDo}
                    />
                ))
            }
        </ul>
    </div>
  )
}

export default ToDoList