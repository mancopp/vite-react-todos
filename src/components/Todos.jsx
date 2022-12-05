import React, { useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([
    { isDone: false, content: "I like dogs", id: 1 },
    { isDone: true, content: "I like cats", id: 2 },
  ]);

  const toggleIsComplete = (id) => {
    console.log(id);
    const _todos = [...todos];
    const target = _todos.find((todo) => todo.id === id);
    target.isDone = !target.isDone;
    setTodos(_todos);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      const newTodo = {
        isDone: false,
        content: event.target.value,
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      };
      setTodos([...todos, newTodo]);
      event.target.value = null;
    }
  };

  return (
    <>
      <div className="titleContainer">TODOS</div>
      <div className="todosContainer">
        {todos.map((todo) => (
          <Todo
            isDone={todo.isDone}
            content={todo.content}
            id={todo.id}
            key={todo.id}
            toggleIsComplete={toggleIsComplete}
          />
        ))}
      </div>
      <div className="addTodoContainer">
        <button></button>
        <input type="text" onKeyDown={handleInputKeyDown} />
      </div>
    </>
  );
};

export default Todos;
