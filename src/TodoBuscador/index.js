import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoBuscador.css';

function TodoBuscador(){

const {resultadoBuscador, setResultadoBuscador}= React.useContext(TodoContext)

    const onCambiosBuscador= (event) => {
        console.log(event.target.value);
        setResultadoBuscador(event.target.value)
    }

    return(  
        <input 
        onChange={onCambiosBuscador} 
        className="TodoBuscador" 
        value={resultadoBuscador} 
        placeholder="Busca aqui tu tarea.."/>
    )
    
}

export {TodoBuscador}