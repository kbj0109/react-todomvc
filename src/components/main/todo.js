import React, { useContext, useState } from "react";
import list from "../../context/toDoList";

export default ({ item, index }) => {
  const listContext = useContext(list);

  const [liClassName, setLiClassName] = useState(
    item.isCompleted ? "completed" : ""
  );
  const [completed, setCompleted] = useState(item.isCompleted);

  // ToDo 상태 변경
  const setToDo = (e) => {
    const isChecked = e.target.checked;

    const newList = listContext.state.list;
    newList[index].isCompleted = isChecked;

    localStorage.setItem("toDoList", JSON.stringify(newList));
    listContext.actions.setList(newList);

    setLiClassName(isChecked ? "completed" : "");
    setCompleted(isChecked);
  };

  // ToDo 삭제
  const deleteToDo = (e) => {
    const orgToDoText = localStorage.getItem("toDoList");
    const orgToDoList = JSON.parse(orgToDoText);

    orgToDoList.splice(index, 1);

    localStorage.setItem("toDoList", JSON.stringify(orgToDoList));
    listContext.actions.setList(orgToDoList);
  };

  return (
    <li className={liClassName}>
      <div className="view">
        <input
          checked={completed}
          className="toggle"
          type="checkbox"
          onChange={setToDo}
        />
        <label>{item.title}</label>
        <button className="destroy" onClick={deleteToDo}></button>
      </div>
      <input className="edit" value="Create a TodoMVC template" readOnly />
    </li>
  );
};
