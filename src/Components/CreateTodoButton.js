import React from 'react'
import { TodoContext } from './TodoContext';

function CreateTodoButton() {

  const { setOpenModal } = React.useContext(TodoContext);

  return (
    <button 
      className='CreateTodoButton'
      onClick={(event) => {
        setOpenModal((value) => !value)
      }}
    >+</button>
  )
}

export { CreateTodoButton };