import React from "react";

export default () => {
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" checked readOnly />
        <label>Taste JavaScript</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="Create a TodoMVC template" readOnly />
    </li>
  );
};
