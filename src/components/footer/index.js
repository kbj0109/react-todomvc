import React, { useContext } from "react";
import list from "../../context/toDoList";

export default () => {
  const listContext = useContext(list);

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
        <strong>0</strong> item left
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
