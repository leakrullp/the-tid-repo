import "./App.css";
import ToDoList from "./ToDoList.jsx";
import Parse from "parse";

Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY");
Parse.serverURL = "https://parseapi.back4app.com";

function App() {
  return (
    <div className="main-inner">
      <ToDoList listTitle={"My Todo List"} />
    </div>
  );
}

export default App;
