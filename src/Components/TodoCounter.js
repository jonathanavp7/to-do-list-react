import React from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
    const {

        completedTodos,
        totalTodos,

    } = React.useContext(TodoContext)

    return (

        totalTodos == completedTodos ?

        <h1 className="TodoCounter">Felicidades! Has completado tus TO-DO's</h1>

        :

        <h1 className="TodoCounter">
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TO-DO's
        </h1>
        
    );
}

export { TodoCounter };