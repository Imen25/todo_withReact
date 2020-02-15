import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: ""
    };
  }

  changeHandler = e => {
    this.setState({ todo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.concat({
        todo: this.state.todo,
        isCompleted: false,
        id: Date.now()
      }),
      todo: ""
    });
  };
  onDelete = ident => {
    this.setState({
      todos: this.state.todos.filter(el => el !== ident)
    });
  };
  render() {
    return (
      <div className="App">
        <i className="fas fa-list" />
        <span> To-Do App !</span>
        <br />
        <span>Add new To-Do</span>
        <br />
        <Form
          val={this.state.todo}
          changeHandler={this.changeHandler}
          onSubmit={this.addTodo}
        />
        <TodoList todos={this.state.todos} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
