import React from "react";

const Todo = props => {
  return (
    <div>
      <button>Complete</button>
      <button onClick={props.onDelete}>Delete</button>
      <span>{props.todo}</span>
    </div>
  );
};

export default Todo;
