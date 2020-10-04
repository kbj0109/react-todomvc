import React from "react";
import ReactDOM from "react-dom";

// 왜 문서에서 하라는대로 하는데 이건 CSS 적용이 안될까?
// import "../node_modules/todomvc-common/base.css";
// import "../node_modules/todomvc-app-css/index.css";

// 위의 CSS 파일들을 복사해서 이 경로에 놓으면 되는데.
import "./index.css";
import "./base.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
