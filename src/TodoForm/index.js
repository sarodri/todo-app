import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"
import Logo from "../img/logoAdd.png"


function TodoForm() {


    const [ newTodoValue, setNewTodoValue] = React.useState('');

    const{
        añadirTarea,
        setOpenModal
    } = React.useContext(TodoContext);

    const cambio= (event)=>{
        setNewTodoValue(event.target.value)
    }

    const cancelar= () =>{
        setOpenModal(false)
    }

    const aceptar= (event)=>{
        event.preventDefault();
        if(newTodoValue.length>1){añadirTarea(newTodoValue)} else{return alert("¡Debes escribir alguna tarea!")};
        setOpenModal(false);
        setNewTodoValue("")
    }

    return(

        <form onSubmit={aceptar}>
            <label>Escribe aquí tu nueva tarea <img id="form-img" alt="logoAdd" src={Logo} /> </label>
            <textarea value={newTodoValue} onChange={cambio} placeholder= "Poner el despertador a las 7 am.." required></textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={cancelar}>
                    Cancelar
                </button>
                <button     
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                onClick={aceptar}>
                    Añadir
                </button>
            </div>
        </form>
    )
    
}


export {TodoForm}