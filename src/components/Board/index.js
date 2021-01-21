import React, { Component } from 'react';
import ToDos from '../ToDos';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
      toDoList: [],
      id: 1
    }
  }
  
  componentDidMount() {
    if (localStorage.getItem('todos')) {
      let todos = JSON.parse(localStorage.getItem('todos'));
      let lastId = todos[todos.length - 1].id;
      this.setState({
        toDoList: todos,
        id: lastId + 1
      });
    }

    window.addEventListener('beforeunload', () => this.handleExit());
  }

  handleChange = event => {
    this.setState({
      inputField: event.target.value
    });
  }

  handleExit = () => {
    if (this.state.toDoList.length > 0) {
      localStorage.setItem('todos', JSON.stringify(this.state.toDoList));
    } else {
      localStorage.removeItem('todos');
    }
  }


  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => ({
      id: state.id + 1,
      inputField: '',
      toDoList: state.toDoList.concat(
        {
          id: state.id,
          content: event.target.input.value
        }
      )
    }));
  }

  handleDelete = event => {
    let todoId = parseInt(event.target.getAttribute('todo-id'));
    this.setState(state => ({
        toDoList: state.toDoList.filter(todo => todo.id !== todoId)
    }));
  }

  render() {
    return (
      <div>
        <form className="d-flex flex-column w-50 mx-auto" onSubmit={this.handleSubmit}>
          <textarea name="input" value={this.state.inputField} onChange={this.handleChange} />
          <button type="submit" className="btn btn-info mt-3">Add new to-do!</button>
        </form>
        <ToDos todos={this.state.toDoList} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default Board;