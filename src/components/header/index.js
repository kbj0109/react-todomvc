import React, { useState, useEffect } from "react";

export default () => {
  const [topTodo, setTopTodo] = useState("");

  useEffect(() => {
    const toDoText = localStorage.getItem("toDoList") || "[]";
    const toDoArray = JSON.parse(toDoText);

    toDoArray.push({ isCompleted: false, title: topTodo });
    localStorage.setItem("toDoList", JSON.stringify(toDoArray));

    document.getElementById("inputToDo").value = "";
  }, [topTodo]);

  const saveTodo = (e) => {
    if (e.key === "Enter") {
      setTopTodo(e.target.value);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        id="inputToDo"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyPress={saveTodo}
      />
    </header>
  );
};
