import React from 'react'
import { RiMenuAddFill } from "react-icons/ri";

function EmptyTodos() {
  return (
    <div className='emptyTodosContent'>
      <RiMenuAddFill className='addTodo' />
      <h3>Crea tu primer TO-DO!!!</h3>
    </div>
  )
}

export { EmptyTodos };