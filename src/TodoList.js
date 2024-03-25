import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

// State is an empty array for todos
//

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [{name: 'Test todo'}] };
    this.createTodo = this.createTodo.bind(this);
  }

  // Takes newTodo from NewTodoForm and adds it to state
  createTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {

    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        name={todo.name}
      />
    ))

    return (
      <div>
        <h1>Todo List!</h1>
        <h4>A Simple React Todo List App.</h4>
        {todos}
        <NewTodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default TodoList;
