import React, { Component } from "react";

class NewTodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="new todo">New Todo</label>
          <input
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <button>Add Todo</button>
      </form>
    )
  };
}

export default NewTodoForm;