import { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import ToDoItem from "./ToDoItem";
import {
  fetchTodos,
  createTodo,
  setTodoDone,
  deleteTodo,
} from "../service/todoService";

export default function ToDoList({ listTitle, userId }) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function load() {
      const todos = await fetchTodos();

      const userTodos = todos.filter((todo) => todo.owner === userId);

      setTodoList(userTodos);
    }
    load();
  }, [userId]);

  async function handleAdd(text) {
    const newToDo = await createTodo(text, userId);
    setTodoList([...todoList, newToDo]);
  }
  async function handleToggle(id) {
    const todo = todoList.find((t) => t.id === id);
    await setTodoDone(id, !todo.done);
    setTodoList(
      todoList.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }
  async function handleRemove(idToDelete) {
    await deleteTodo(idToDelete);
    setTodoList(todoList.filter((todo) => todo.id !== idToDelete));
  }

  return (
    <div className="todo-body">
      <h1>{listTitle}</h1>

      <NewTodoForm onAdd={handleAdd} />
      {todoList.length === 0 ? (
        <p>Nothing to do. Enjoy your day!</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
