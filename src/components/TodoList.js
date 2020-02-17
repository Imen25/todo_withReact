import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="list">
      {props.todos.map((todo, i) => (
        <Todo
          key={i}
          id={todo.id}
          todo={todo.todo}
          isCompleted={todo.isCompleted}
          onDelete={props.onDelete}
          onCheck={props.onCheck}
        />
      ))}
    </div>
  );
};

export default TodoList;
