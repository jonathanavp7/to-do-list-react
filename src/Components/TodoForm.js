import React from 'react';
import { TodoContext } from './TodoContext'; 

function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit} className='todoForm-form'>
            <label>Escribe tu nuevo TO-DO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Aprender React Js...'
            />
            <div className='TodoForm-buttonContainer'>
                <button onClick={onCancel} type='button' className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add'>Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };