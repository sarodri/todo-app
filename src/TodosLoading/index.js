import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import './TodosLoading.css';

const override = {
        display: "flex",
        //margin: "200px auto",
        items: "center",
        size: "10px",
        };

function TodosLoading() {

    
    return(
        <div className="loader">
        <PacmanLoader color="#B28966" cssOverride={override}></PacmanLoader>
        <p>Estamos cargando...</p>
        </div>
        
    )
    
}

export {TodosLoading}