import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { TodosLoading } from './Components/TodosLoading';
import { TodosError } from './Components/TodosError';
import { EmptyTodos } from './Components/EmptyTodos';
import { CreateTodoButton } from './Components/CreateTodoButton';
import { TodoForm } from './Components/TodoForm'; 
import { Modal } from './TodoModal'; 
import { TodoContext } from './Components/TodoContext';
import React from 'react';

function AppUI() {

    const {

        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,

    } = React.useContext(TodoContext);

    return (
        <>

            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length == 0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

        </>
    );
}

export { AppUI };