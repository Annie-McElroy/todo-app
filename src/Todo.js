import React, { Component } from "react";

class Todo extends Component {

  render() {

    return (
      <div>
        <div>
          {this.props.name}
        </div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  };
}

export default Todo;