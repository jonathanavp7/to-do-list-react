import React from 'react';
import { TodoCounter } from './TodoCounter'; 
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de React Js', completed: true },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'lalalala', completed: false },
];

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
