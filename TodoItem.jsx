import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div style={{ margin: "5px 0" }}>
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;

