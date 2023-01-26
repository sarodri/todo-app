import React from "react";
import './TodoTarea.css';
import Check from "../img/check-icon.png";
import Delete from "../img/delete3-icon.png";


function TodoTarea(props){

    return(
        <li className="TodoTarea">
            <span className="Icon"> 
            <img className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete} alt="Check" src={Check}/>
            </span>
            <p className={`TodoTarea-p ${props.completed && 'TodoTarea-p--complete'}`}>
            {props.text}
            </p>
            <span className="Icon" >
            <img className="Icon Icon-delete" onClick={props.onDelete} id="delete-icon" alt="Delete" src={Delete}/>
            </span>
        </li>
    )
}

export {TodoTarea}