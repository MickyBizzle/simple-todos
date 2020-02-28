import React, { Component } from "react";
import "./App.scss";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";

import "shards-ui/dist/css/shards.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Get Milk",
          body:
            "I need milk so that I can have coffee and cereals in the morning."
        },
        {
          title: "Order pizza",
          body: "It's the weekend so why not treat myself."
        }
      ]
    };
  }

  handleDeleteTodo = (indexToDelete) => {
    let { todos } = this.state;
    let filteredTodos = todos.filter((_, i) => {
      return i !== indexToDelete;
    });
    this.setState({ ...this.state, todos: filteredTodos });
  };

  handleAddTodo = (todo) => {
    let { todos } = this.state;
    todos.unshift(todo);
    this.setState({ ...this.state, todos });
  };

  render() {
    return (
      <div className="flexContain">
        <div style={{ textAlign: "center" }}>
          <h3>Simple Todo app</h3>
          <p>
            This is a simple Todo app using{" "}
            <a href="https://designrevision.com/docs/shards-react/getting-started">
              Shards React
            </a>{" "}
            for styling.
          </p>
        </div>
        <h4>Create your new Todo</h4>
        <AddTodo addTodo={this.handleAddTodo} />
        <h4>Your Todos</h4>
        <TodoList todos={this.state.todos} deleteTodo={this.handleDeleteTodo} />
      </div>
    );
  }
}
