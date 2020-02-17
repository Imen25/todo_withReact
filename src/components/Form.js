import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        value={props.val}
        onChange={props.changeHandler}
        placeholder="enter new task"
      />
      <br />
      <i
        className="fas fa-plus-circle btn-add"
        style={{ marginLeft: "58%", fontSize: "25px" }}
        onClick={props.onSubmit}
      ></i>
    </form>
  );
};
export default Form;
