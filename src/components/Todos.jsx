import React, { useState, useEffect, useRef } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("TODOS_STATE"));
    console.log(data);
    if (data && data.length > 0) setTodos(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("TODOS_STATE", JSON.stringify(todos));
  }, [todos]);

  const toggleIsComplete = (id) => {
    console.log(id);
    const _todos = [...todos];
    const target = _todos.find((todo) => todo.id === id);
    target.isDone = !target.isDone;
    setTodos(_todos);
  };

  const addTodo = () => {
    const newTodo = {
      isDone: false,
      content: inputRef.current.value,
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    };
    setTodos([...todos, newTodo]);
    inputRef.current.value = null;
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value) {
      addTodo();
    }
  };

  return (
    <>
      <div className="titleContainer">TODOS</div>
      <div className="todosContainer">
        {todos
          // .sort((a, b) => Number(a.isDone) - Number(b.isDone))
          .map((todo) => (
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
        <button type="button" onClick={addTodo}></button>
        <input type="text" onKeyDown={handleInputKeyDown} ref={inputRef} />
      </div>
    </>
  );
};

export default Todos;
