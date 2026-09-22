import "./App.css";
import ToDoList from "./ToDoList.jsx";
import Parse from "parse";

Parse.initialize(
  "mNr5YjFHfkcuYmk9UtedVpiwaUHMUGapCcIH3Cvr",
  "2Sz4QJza9aEPfY8XZaGMflw6RR9UpuMFG0DIJl8D",
);
Parse.serverURL = "https://parseapi.back4app.com";

function App() {
  return (
    <div className="main-inner">
      <ToDoList listTitle={"Preparing for TID"} />
      <ToDoList listTitle={"Thesis"} />
    </div>
  );
}

export default App;
