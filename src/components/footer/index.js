import React, { useContext, useEffect } from "react";
import list from "../../context/toDoList";

export default () => {
  const listContext = useContext(list);

  useEffect(() => {}, [listContext.state.list]); // 남은 ToDo 갯수를 위해

  const deleteCompleted = () => {
    const newList = listContext.state.list.filter(
      (item) => item.isCompleted === false
    );

    localStorage.setItem("toDoList", JSON.stringify(newList));
    listContext.actions.setList(newList);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {
            listContext.state.list.filter((item) => item.isCompleted === false)
              .length
          }
        </strong>{" "}
        item left
      </span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={deleteCompleted}>
        Clear completed
      </button>
    </footer>
  );
};
