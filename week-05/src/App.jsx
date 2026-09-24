import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList.jsx";
import Parse from "parse";
import AuthPage from "./pages/AuthPage.jsx";

Parse.initialize(
  "gIfWHFPdXe70K1Tvg0ma0892ovyFKbaKbgwAHjVU",
  "rCQCXMFLdKSFNbfNuUaYYw1wceh6kZdtuTAAq6nI",
);
Parse.serverURL = "https://parseapi.back4app.com";

function App() {
  const [user, setUser] = useState(Parse.User.current());

  function handleAuthenticated(loggedInUser) {
    setUser(loggedInUser);
  }

  if (!user) return <AuthPage onAuthenticated={handleAuthenticated} />;

  return (
    <div className="main-inner">
      <ToDoList listTitle={"My Todo List"} userId={user.id} />
    </div>
  );
}

export default App;
