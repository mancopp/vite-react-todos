import React from "react";

function Todo(props) {
  return (
    <div className={`todo todo-isDone-${props.isDone}`}>
      <input
        type="checkbox"
        defaultChecked={props.isDone}
        onChange={() => props.toggleIsComplete(props.id)}
      ></input>
      <p className="todoContent">{props.content}</p>
    </div>
  );
}

export default Todo;
