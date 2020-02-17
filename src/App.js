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
  onDelete = id => {
    this.setState({
      todos: this.state.todos.filter(el => el.id !== id)
    });
  };

  onCheck = id => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    });
  };
  render() {
    return (
      <div className="App">
        <div className="main-head">
          <div className="head">
            <i className="fas fa-list" />
            <span style={{ fontSize: "40px" }}> To-Do App !</span>
            <br />
            <br />
            <span style={{ fontSize: "20px" }}>Add new To-Do</span>
            <br />
          </div>
          <Form
            val={this.state.todo}
            changeHandler={this.changeHandler}
            onSubmit={this.addTodo}
          />
        </div>
        <div className="division">Let's get some work done !</div>
        <hr />
        <TodoList
          todos={this.state.todos}
          onDelete={this.onDelete}
          onCheck={this.onCheck}
        />
      </div>
    );
  }
}

export default App;
