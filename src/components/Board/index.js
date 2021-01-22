import React, { useState, useEffect } from 'react';
import ToDos from '../ToDos';

const Board = () => {
  const initialToDos = () => JSON.parse(localStorage.getItem('todos')) || [];
  const [toDoList, setToDoList] = useState(initialToDos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDoList));
  }, [toDoList]);
  
  const lastId = () => {
    let todos = initialToDos();
    return todos[todos.length - 1] ? todos[todos.length - 1].id : 0;
  }
  const [currentId, setCurrentId] = useState(lastId() + 1);

  const [inputField, setInputField] = useState('');
  
  const handleChange = event => setInputField(event.target.value);
  
  const handleSubmit = event => {
    event.preventDefault();
    setInputField('');
    setCurrentId(currentId + 1);
    setToDoList(toDoList.concat(
      {
        id: currentId,
        content: event.target.input.value
      }
    ));
  }

  const handleDelete = event => {
    let todoId = parseInt(event.target.getAttribute('todo-id'));
    setToDoList(toDoList.filter(todo => todo.id !== todoId));
  }

  return (
    <div>
      <form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit}>
        <textarea name="input" value={inputField} onChange={handleChange} />
        <button type="submit" className="btn btn-info mt-3">Add new to-do!</button>
      </form>
      <ToDos todos={toDoList} handleDelete={handleDelete}/>
    </div>
  );
}

export default Board;