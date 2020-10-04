import React, { useContext } from "react";
import Todo from "./todo";
import list from "../../context/toDoList";

export default () => {
  const listContext = useContext(list);

  const setAllToDo = (e) => {
    const newList = listContext.state.list.map((item) => {
      return { ...item, isCompleted: e.target.checked };
    });

    localStorage.setItem("toDoList", JSON.stringify(newList));
    listContext.actions.setList(newList);
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={listContext.state.list.every((item) => item.isCompleted)}
        onChange={setAllToDo}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {listContext.state.list.map((item, index) => {
          return <Todo key={index} item={item} index={index}></Todo>;
        })}
      </ul>
    </section>
  );
};
