import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input value={props.val} onChange={props.changeHandler} />
      <button>add</button>
    </form>
  );
};
export default Form;
