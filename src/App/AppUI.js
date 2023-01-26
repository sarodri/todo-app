import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoContador } from "../TodoContador";
import { TodoBuscador } from "../TodoBuscador";
import { TodoLista } from "../TodoLista";
import { TodoTarea } from "../TodoTarea";
import { TodoForm } from "../TodoForm";
import { CreateTodoBoton} from "../CreateTodoBoton";
import { Modal } from "../Modal";
import {TodosEmpty} from "../TodosEmpty";
import '../CreateTodoBoton/CreateTodoBoton.css';
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";



function AppUI () {

   const {
    error,
    loading, 
    tareasBuscadas, 
    completarTareas, 
    eliminarTareas,
    openModal,
    setOpenModal} =  React.useContext(TodoContext);


    return(
  
    <React.Fragment>
        <TodoContador />
        <TodoBuscador />
        <TodoLista> 
            {error && <TodosError error={error}/>}
            {loading && <TodosLoading  />}
            {(!loading && !tareasBuscadas.length) && <TodosEmpty />}
            {tareasBuscadas.map(todo=> 
            (<TodoTarea 
            key={todo.text} 
            text={todo.text} 
            onComplete={() => completarTareas(todo.text)} 
            onDelete={()=> eliminarTareas(todo.text)} 
            completed={todo.completed}/>)
            )}

        </TodoLista>
        
       {!!openModal && (
        <Modal>
                <TodoForm />
        </Modal>
       )}
    
        <CreateTodoBoton
        setOpenModal={setOpenModal}
         />  

    </React.Fragment>
    )
    
}

export { AppUI };