import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h3>Todo List</h3>
      {todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}

export default TodoList;

