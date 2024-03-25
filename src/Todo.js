import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    // Add a local state called isEditing to be false
    // Add local state of title to equal to given prop
    this.state = {
      isEditing: false,
      title: this.props.title,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.editForm = this.editForm.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Passes up id to parent and calls the removeTodo method to remove todo
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  // Shows the edit form based on conditional rendering by switching isEditing from true/false
  editForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleComplete() {
    this.props.completeTodo(this.props.id);
  }

  // Submit event to edit the todo by passing up the new edit to the parent state
  handleEdit(event) {
    event.preventDefault();
    // take new todo title and pass up to parent TodoList
    this.props.editTodo(this.props.id, this.state.title);
    this.setState({ isEditing: false });
  }

  // Handle change in form method
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    // Create an empty variable called result
    let result;

    // check state for if isEditing is true or false
    if (this.state.isEditing) {
      // if true, show a form
      result = (
        <div>
          <form onSubmit={this.handleEdit}>
            <input
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      // if false show the todo as is
      result = (
        <div>
          <li
            className={this.props.completed ? "Completed" : ""}
            onClick={this.handleComplete}
          >
            {this.props.title}
          </li>
          <button onClick={this.editForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
