import React, { createContext, useState } from "react";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  // 여기서 Context 초기값을 지정하는게 맞을까?
  const toDoText = localStorage.getItem("toDoList") || "[]";
  const toDoArray = JSON.parse(toDoText);

  const [list, setList] = useState(toDoArray);

  const store = {
    state: { list },
    actions: { setList },
  };
  return <ListContext.Provider value={store}>{children}</ListContext.Provider>;
};

export { ListProvider };
export default ListContext;
