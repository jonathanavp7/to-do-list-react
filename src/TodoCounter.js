import React from "react";

function TodoCounter({ completed, total }) {
    return (
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> TO-DO's
        </h1>
    );
}

export { TodoCounter };