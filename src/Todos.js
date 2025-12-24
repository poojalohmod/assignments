import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      <h2>Todos</h2>
      <button onClick={handleLogout}>Logout</button>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"10px"}}>
        {todos.map((todo) => (
          <div key={todo.id} style={{border:"1px solid #ccc", padding:"10px"}}>
            <Link to={`/todos/${todo.id}`}>
              <h4>{todo.title}</h4>
            </Link>
            <p>Status: {todo.completed ? "Completed ✅" : "Not Completed ❌"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
