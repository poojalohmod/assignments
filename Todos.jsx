import { TodoProvider } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todos() {
  return (
    <TodoProvider>
      <div>
        <h2>Todo Application (Context API)</h2>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default Todos;

