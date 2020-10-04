import React from "react";
import Todo from "./todo";

export default () => {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <Todo></Todo>

        <li>
          <div className="view">
            <input className="toggle" type="checkbox" readOnly />
            <label>Buy a unicorn</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="Rule the web" readOnly />
        </li>
      </ul>
    </section>
  );
};
