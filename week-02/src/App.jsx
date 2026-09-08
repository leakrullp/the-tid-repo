import "./App.css";
import ToDoList from "./ToDoList.jsx";

function App() {
  return (
    <div className="main-inner">
      <ToDoList listTitle={"Preparing for TID"} />
      <ToDoList listTitle={"Thesis"} />
    </div>
  );
}

export default App;
