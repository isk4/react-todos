import React from 'react';

const ToDos = (props) => {
  const mappedToDos = props.todos.map(todo =>
    <div key={todo.id} className="card text-white bg-dark m-3 pb-3 w-75">
      <div className="card-body">
        <p className="card-text">{todo.content}</p>
      </div>
      <button onClick={props.handleDelete} todo-id={todo.id} className="btn btn-danger">Delete</button>
    </div>
  );
  return (
    <div className="card-columns w-75 mx-auto">
      {mappedToDos}  
    </div>
  )
};

export default ToDos;