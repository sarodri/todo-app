import React from "react";
import './CreateTodoBoton.css';

function CreateTodoBoton(props){

    const onClickBoton= ()=> {
        props.setOpenModal(prevState=> !prevState)
    }

    return(
            <button className="CreateTodoBoton"
            onClick={onClickBoton}
            >
            +
            </button>
    )
}

export {CreateTodoBoton}


