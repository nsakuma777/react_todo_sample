import React from "react";
import { render } from "react-dom";
import User from "./User";
import TodoList from "./TodoList";
import Form from "./Form";
import Clear from "./Clear";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const styles = {
  fontFamily: "sans-serif"
};

class App extends React.Component {
  constructor() {
    super();
    this.createTodo = this.createTodo.bind(this);
    this.compTodo = this.compTodo.bind(this);
    this.clearTodo = this.clearTodo.bind(this);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Hello, React!",
          desc: "React始めました",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux!",
          desc: "Reduxも始めました",
          done: false
        }
      ]
    };
  }

  createTodo(inputTitle, inputDesc) {
    this.setState({
      todo: this.state.todos.push({
        id: this.state.todos.length + 1,
        title: inputTitle,
        desc: inputDesc,
        done: false
      })
    });
  }

  compTodo(clickTodo) {
    console.log(this.state);
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;

    this.setState({ todos });
  }

  clearTodo() {
    console.log(this.state);
    const todos = [];

    this.setState({ todos });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles}>
          <h1>
            {" "}
            {"\u2728"}My TodoList {"\u2728"}
          </h1>
          <User name="new user" />
          <Form createTodo={this.createTodo} />
          <Clear clearTodo={this.clearTodo} />
          <TodoList todos={this.state.todos} compTodo={this.compTodo} />
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
