import React from 'react'
import { TodoContext } from './TodoContext';

function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (

    <div className="input-wrapper">
      <input 
        className="input-box" 
        type="text" 
        placeholder="Busca una tarea..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <span className="underline"></span>
    </div>
    
  )
}

export { TodoSearch };