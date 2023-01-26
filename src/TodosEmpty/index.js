import React from "react";
import Intro from "../img/fondo-intro.png"

function TodosEmpty() {
    return(
    <div className="intro">
    <span className="intro-img"><img id="intro-img" alt="intro" src={Intro}></img> </span>
    <span className="intro-text ">Crea una nueva tarea pulsando en el icono <button className="CreateTodoBoton-s">+</button> </span>
    </div>)
}

export {TodosEmpty}