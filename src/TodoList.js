import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

// State is an empty array for todos

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.createTodo = this.createTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  // Takes newTodo from NewTodoForm and adds it to state
  createTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  editTodo(id, editedTitle) {
    // New array that maps over existing state todos
    const editedTodos = this.state.todos.map((todo) => {
      // Check each todo to see if id matches given id, return a copy of the todo with the new updated title (editedTitle)
      if (todo.id === id) {
        return { ...todo, title: editedTitle };
      }
      // Returns the updated todo
      return todo;
    });
    // Sets state with the new edited array of todos to include the update - never mutate state directly (react rule)
    this.setState({ todos: editedTodos });
  }

  completeTodo(id) {
    // New array that maps over existing state todos
    const editedTodos = this.state.todos.map((todo) => {
      // Check each todo to see if id matches given id, return a copy of the todo with flipped completed (true/false)
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      // Returns the updated todo
      return todo;
    });
    // Sets state with the new edited array of todos to include the update - never mutate state directly (react rule)
    this.setState({ todos: editedTodos });
  }

  removeTodo(id) {
    // takes id and filters through existing todos (in state) and removes whatever todos match the id
    this.setState({
      // within todos in state "(todos: ")
      // edit the state.todos by filter ("this.state.todos.filter")
      // within todos check each todo and filter out which todo id = given id ("(todo => todo.id !== id)")
      // Filter method makes copy of todos that do not equal to the given id (pretty much filtering out the deleted id)
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        removeTodo={this.removeTodo}
        editTodo={this.editTodo}
        completeTodo={this.completeTodo}
      />
    ));

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
