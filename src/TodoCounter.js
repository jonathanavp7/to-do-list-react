import React from "react";

function TodoCounter({ completed, total }) {
    return (

        total == completed ?

        <h1 className="TodoCounter">Felicidades! Has completado tus TO-DO's</h1>

        :

        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> TO-DO's
        </h1>
        
    );
}

export { TodoCounter };