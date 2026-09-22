import "./App.css";
import ToDoList from "./ToDoList.jsx";
import Parse from "parse";
import { useEffect } from "react";

Parse.initialize(
  "gIfWHFPdXe70K1Tvg0ma0892ovyFKbaKbgwAHjVU",
  "rCQCXMFLdKSFNbfNuUaYYw1wceh6kZdtuTAAq6nI",
);
Parse.serverURL = "https://parseapi.back4app.com";

function App() {
  return (
    <div className="main-inner">
      <ToDoList listTitle={"My Todo List"} />
    </div>
  );
}

export default App;
