import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoContador.css';

function TodoContador(){

     const {totalTodos, completedTodos} = React.useContext(TodoContext)
    
        if (totalTodos!== completedTodos){ 
            return <h2 className="TodoContador">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        } 
            else{ 
            return (
            <div>
                <h2 className="TodoContador">¡Bien hecho! no tienes tareas pendientes </h2>
                
            </div>
            ) 
        }
      

}

export {TodoContador}