import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider (props) {

    const {
        tarea: todos, 
        guardarTarea: guardarTodos, 
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
    
      const [resultadoBuscador, setResultadoBuscador] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length; 
      const totalTodos= todos.length;
    
      let tareasBuscadas= [];
    
      if ( !resultadoBuscador >=1 ){
        tareasBuscadas= todos;
      } else{
        tareasBuscadas= todos.filter(todo => {
          const textoTarea = todo.text.toLowerCase();
          const textoBusqueda = resultadoBuscador.toLowerCase();
          return textoTarea.includes(textoBusqueda);
        })
      }

      const añadirTarea =(text) =>{
        const newTodo= [...todos];
        newTodo.push({
          completed: false, 
          text,
        })
        guardarTodos(newTodo)
      }
    
      const completarTareas= (text) => {
        const todoIndex= todos.findIndex(todo => todo.text === text);
        const newTodo= [...todos];
        const currentStatus = newTodo[todoIndex].completed;
        newTodo[todoIndex].completed= !currentStatus;
        guardarTodos(newTodo);
      }
    
      const eliminarTareas= (text) => {
        const todoIndex= todos.findIndex(todo => todo.text === text);
        const newTodo= [...todos];
        newTodo.splice(todoIndex, 1);
        guardarTodos(newTodo);
      }

  
    return(
        <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        resultadoBuscador,
        setResultadoBuscador,
        tareasBuscadas,
        añadirTarea,
        completarTareas,
        eliminarTareas,
        openModal,
        setOpenModal
        }}>
        {props.children}
        </TodoContext.Provider>
    )
}


export { TodoProvider, TodoContext }
//<TodoContext.Consumer></TodoContext.Consumer>