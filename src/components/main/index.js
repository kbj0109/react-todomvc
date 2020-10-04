import React, { useEffect, useContext } from "react";
import Todo from "./todo";
import list from "../../context/toDoList";

export default () => {
  const listContext = useContext(list);

  useEffect(() => {
    const toDoText = localStorage.getItem("toDoList") || "[]";
    const toDoArray = JSON.parse(toDoText);

    // listContext.actions.setList(toDoArray);
  }, []);
  // 기본값으로 useEffect 두번째 인자값에 빈 배열이라도 넣는게 좋은게 아닐까?

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {listContext.state.list.map((item, index) => {
          return <Todo key={index} item={item}></Todo>;
        })}
      </ul>
    </section>
  );
};
