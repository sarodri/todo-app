import React from "react";
import './TodoLista.css';


function TodoLista(props){
    return(
    <section> 
        <ul>
            {props.children}
        </ul> 
    </section>  
    )
}

export {TodoLista}