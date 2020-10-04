import React from "react";

export default ({ item }) => {
  const liClassName = item.isCompleted ? "completed" : "";
  const completed = item.isCompleted;
  const message = item.isCompleted
    ? "Create a TodoMVC template"
    : "Rule the web";

  return (
    <li className={liClassName}>
      <div className="view">
        <input
          checked={completed}
          className="toggle"
          type="checkbox"
          readOnly
        />
        <label>{item.title}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value={message} readOnly />
    </li>
  );
};
