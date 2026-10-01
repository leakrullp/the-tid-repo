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

  function handleLogout() {
    Parse.User.logOut().then(() => setUser(null));
  }

  if (!user) return <AuthPage onAuthenticated={handleAuthenticated} />;

  return (
    <div className="main-inner">
      <ToDoList listTitle={"My Todo List"} userId={user.id} />
      <button id="logout-btn" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default App;
