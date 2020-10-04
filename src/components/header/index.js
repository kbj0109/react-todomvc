import React, { useState, useEffect, useContext } from "react";
import list from "../../context/toDoList";

export default () => {
  const listContext = useContext(list);

  const [topTodo, setTopTodo] = useState("");

  useEffect(() => {
    if (!topTodo) {
      return;
    }

    const newToDo = { isCompleted: false, title: topTodo };

    const toDoText = localStorage.getItem("toDoList") || "[]";
    const toDoArray = JSON.parse(toDoText);

    toDoArray.push(newToDo);
    localStorage.setItem("toDoList", JSON.stringify(toDoArray));

    listContext.actions.setList(toDoArray);

    document.getElementById("inputToDo").value = "";
  }, [topTodo]);
  // 여긴 어떻게 해야 경고를 없앨 수 있을까???

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
