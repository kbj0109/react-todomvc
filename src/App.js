import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { ListProvider } from "./context/toDoList";

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <ListProvider>
          <Header> </Header>
          <Main></Main>
          <Footer />
        </ListProvider>
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
        </p>
        <p>
          Created by <a href="http://todomvc.com">you</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
